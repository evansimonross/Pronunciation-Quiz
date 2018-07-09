var quiz = {
    questionPool: [],
    totalRounds: 10,
    currentRound: 0,
    timeLimit: 5,
    correctAnswers: 0,
    incorrectAnswers: 0,
    timesUp: 0,
    toReport: [],
    nextQuestion: function () {
        $('#choices').empty();
        if(quiz.currentRound===quiz.totalRounds || quiz.questionPool.length===0){
            quiz.displayReport();
            return;
        }
        $('#timer').text(quiz.timeLimit);
        quiz.currentRound++;
        var countdownInterval;
        var countdownTimeout;

        // Choose a random question from the question pool, and chooses one correct answer.
        var choicesIndex = Math.floor(Math.random() * quiz.questionPool.length);
        var choices = quiz.questionPool[choicesIndex];
        quiz.questionPool.splice(choicesIndex, 1);
        var correctIndex = Math.floor(Math.random() * choices.length);
        var correctWord = choices[correctIndex];

        // Print the correct answer to the log. Delete this for final deployment.
        console.log('The correct answer is ' + correctWord);

        // Set up audio file for the correct answer
        var audio = $('audio');
        audio.attr('src', "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + correctWord + "_us_1.mp3");
        audio[0].addEventListener('loadedmetadata', function () {
            audio[0].play();
        });
        var newAudio = audio[0].cloneNode(true);
        audio[0].parentNode.replaceChild(newAudio, audio[0]);


        for (var i = 0; i < choices.length;) {

            // Randomize the order for the answer choices, display it, and remove it from the choices array.
            var randomIndex = Math.floor(Math.random() * choices.length);
            var choice = choices[randomIndex];
            $('#choices').append('<button type="button" id="' + choice + '" class="btn btn-primary btn-lg answerButton">' + choice + '</button>');
            choices.splice(randomIndex, 1);

            // Action taken if the button shows the correct answer. Increase correct answers tally and move to next question.
            if (randomIndex === correctIndex) {
                $('#' + choice).on('click', function () {
                    quiz.correctAnswers++;
                    $('#correct').text(quiz.correctAnswers);
                    clearInterval(countdownInterval);
                    clearTimeout(countdownTimeout);
                    quiz.nextQuestion();
                });

                // Drop the correctIndex out of bounds to avoid subsequent false positives.
                correctIndex = -1;
            }

            // Action taken if the button shows an incorrect answer. Increase incorrect answers tally and move to next question.
            else {
                $('#' + choice).on('click', function () {
                    quiz.incorrectAnswers++;
                    $('#incorrect').text(quiz.incorrectAnswers);
                    clearInterval(countdownInterval);
                    clearTimeout(countdownTimeout);
                    var youSaid = $(this).text();
                    quiz.toReport.push({correctWord, youSaid});
                    quiz.nextQuestion();
                });
            }

            // Because we are splicing the array shorter, the correct answer's index may get lower.
            if (randomIndex < correctIndex) {
                correctIndex--;
            }
        }

        // Set up the countdown timer display interval
        countdownInterval = setInterval(function(){
            var currentTime = parseInt($('#timer').text());
            currentTime--;
            $('#timer').text(currentTime);
        },1000);

        // Set up the timeout for time running out
        countdownTimeout = setTimeout(function(){
            quiz.timesUp++;
            $('#timeup').text(quiz.timesUp);
            clearInterval(countdownInterval);
            clearTimeout(countdownTimeout);
            quiz.nextQuestion();
        },1000*(quiz.timeLimit+1));

    },

    // Report the results of the quiz.
    displayReport: function () {
        for(var i=0; i<quiz.toReport.length;i++){
            $('#choices').append('<div id="report' + i + '"></div>');
            var youSaidButton = $('<button type="button" id="highFront" class="btn btn-danger btn-lg reportButton">' + quiz.toReport[i].youSaid + '</button>');
            youSaidButton.on('click',function(){
                var audio = $('audio');
                audio.attr('src', "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + $(this).text() + "_us_1.mp3");
                audio[0].addEventListener('loadedmetadata', function () {
                    audio[0].play();
                });
                var newAudio = audio[0].cloneNode(true);
                audio[0].parentNode.replaceChild(newAudio, audio[0]);
            })
            var correctButton = $('<button type="button" id="highFront" class="btn btn-success btn-lg reportButton">' + quiz.toReport[i].correctWord + '</button>');
            correctButton.on('click',function(){
                var audio = $('audio');
                audio.attr('src', "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + $(this).text() + "_us_1.mp3");
                audio[0].addEventListener('loadedmetadata', function () {
                    audio[0].play();
                });
                var newAudio = audio[0].cloneNode(true);
                audio[0].parentNode.replaceChild(newAudio, audio[0]);
            })
            $('#report' + i).append(youSaidButton);
            $('#report' + i).append(correctButton);
        }
        $('#choices').append('<button type="button" id="highFront" class="btn btn-primary btn-lg answerButton">Try again</button>');
    },

    // Check whether all the audio files in the current question pool are accessable. 
    checkAudioFiles: function() {
        for(var i=0; i<quiz.questionPool.length;i++){
            var questionSet = quiz.questionPool[i];
            for(var j=0; j<questionSet.length;j++){
                var audio = $('audio');
                audio.attr('src', "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + questionSet[j] + "_us_1.mp3");
                audio[0].addEventListener('loadedmetadata', function () {
                    // An error will be thrown to the console if the audio file does not exist and the metadata cannot load.
                });
                var newAudio = audio[0].cloneNode(true);
                audio[0].parentNode.replaceChild(newAudio, audio[0]);
            }
        }
    }
}

// Sets click listeners for the options buttons at the start
$(document).ready(function () {
    $('#highFront').on('click', function(){
        quiz.questionPool = highFrontVowels;
    });
    $('#highBack').on('click', function(){
        quiz.questionPool = highBackVowels;
    });
    $('#low').on('click', function(){
        quiz.questionPool = lowVowels;
    })

    // Set this as our final function to check if there are any erroneous file names.
    //$('.answerButton').on('click',quiz.checkAudioFiles);

    // Set this as our final function for main quiz functionality.
    $('.answerButton').on('click',quiz.nextQuestion);
});