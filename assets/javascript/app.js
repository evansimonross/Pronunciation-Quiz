var quiz = {
    questionPool: [],
    totalRounds: 10,
    currentRound: 0,
    timeLimit: 5,
    correctAnswers: 0,
    incorrectAnswers: 0,
    timesUp: 0,
    nextQuestion: function () {
        $('#choices').empty();
        $('#timer').text(quiz.timeLimit);
        if(quiz.currentRound===quiz.totalRounds || quiz.questionPool.length===0){
            quiz.displayReport();
            return;
        }

        quiz.currentRound++;
        var countdownInterval;
        var countdownTimeout;

        // Choose a random question from the question pool, and chooses one correct answer.
        var choicesIndex = Math.floor(Math.random() * quiz.questionPool.length);
        var choices = quiz.questionPool[choicesIndex];
        quiz.questionPool.splice(choicesIndex, 1);
        var correctIndex = Math.floor(Math.random() * choices.length);

        // Print the correct answer to the log. Delete this for final deployment.
        console.log('The correct answer is ' + choices[correctIndex]);

        // Set up audio file for the correct answer
        var audio = $('audio');
        audio.attr('src', "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + choices[correctIndex] + "_us_1.mp3");
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
    displayReport: function () {

    },
    checkAudioFiles: function() {
        for(var i=0; i<quiz.questionPool.length;i++){
            var questionSet = quiz.questionPool[i];
            for(var j=0; j<questionSet.length;j++){
                var audio = $('audio');
                audio.attr('src', "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + questionSet[j] + "_us_1.mp3");
                audio[0].addEventListener('loadedmetadata', function () {
                    //audio[0].play();
                });
                var newAudio = audio[0].cloneNode(true);
                audio[0].parentNode.replaceChild(newAudio, audio[0]);
            }
        }
    }
}

$(document).ready(function () {
    $('#highFront').on('click', function(){
        quiz.questionPool = highFrontVowels;
    });
    $('#highBack').on('click', function(){
        quiz.questionPool = highBackVowels;
    });
    //$('.answerButton').on('click',quiz.checkAudioFiles);
    $('.answerButton').on('click',quiz.nextQuestion);
});