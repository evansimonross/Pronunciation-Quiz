var audioSet = false;
var ipaMode = false;
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
        var countdownInterval;
        var countdownTimeout;

        $('#choices').empty();
        if (quiz.currentRound === quiz.totalRounds || quiz.questionPool.length === 0) {
            clearInterval(countdownInterval);
            clearTimeout(countdownTimeout);
            quiz.displayReport();
            return;
        }
        $('#timer').text(quiz.timeLimit);
        quiz.currentRound++;

        // Choose a random question from the question pool, and chooses one correct answer.
        var choicesIndex = Math.floor(Math.random() * quiz.questionPool.length);
        var choices = quiz.questionPool[choicesIndex];
        quiz.questionPool.splice(choicesIndex, 1);
        var correctIndex = Math.floor(Math.random() * choices.length);
        var correctWord = choices[correctIndex];

        // Print the correct answer to the log. Delete this for final deployment.
        var consoleMessage = 'The correct answer is ' + correctWord[0];
        if(correctWord.length>1){
            consoleMessage += " [" + correctWord[1] + "]";
        }
        else{
            if(ipaMode){
                alert("IPA Mode is not yet supported for this data set.");
                $('#ipaToggle').bootstrapToggle('off');
                ipaMode = false;
            }
        }
        console.log(consoleMessage);

        // Set up audio file for the correct answer

        var player = document.getElementById('player');
        player.src = "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + correctWord[0] + "_us_1.mp3";
        player.play();

        for (var i = 0; i < choices.length;) {

            // Randomize the order for the answer choices, display it, and remove it from the choices array.
            var randomIndex = Math.floor(Math.random() * choices.length);
            var choice = choices[randomIndex][0];
            $('#choices').append('<button type="button" id="' + choice + '" class="btn btn-primary btn-lg answerButton">' + choice + '</button>');
            $('#' + choice).attr('data-word', choice);
            if (choices[randomIndex].length > 1) {
                $('#' + choice).attr('data-ipa', choices[randomIndex][1]);
                if (ipaMode) {
                    $('#' + choice).text(choices[randomIndex][1]);
                }
            }
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
                    var youSaid = $(this);
                    quiz.toReport.push({ correctWord, youSaid });
                    quiz.nextQuestion();
                });
            }

            // Because we are splicing the array shorter, the correct answer's index may get lower.
            if (randomIndex < correctIndex) {
                correctIndex--;
            }
        }

        // Add a quit button
        $('#choices').append('<button type="button" id="quit" class="btn btn-dark btn-lg menuButton">Quit</button>')
        $('#quit').on('click', function () {
            clearInterval(countdownInterval);
            clearTimeout(countdownTimeout);
            quiz.currentRound = quiz.totalRounds;
            quiz.nextQuestion();
        });

        // Set up the countdown timer display interval
        countdownInterval = setInterval(function () {
            var currentTime = parseInt($('#timer').text());
            currentTime--;
            $('#timer').text(currentTime);
        }, 1000);

        // Set up the timeout for time running out
        countdownTimeout = setTimeout(function () {
            quiz.timesUp++;
            $('#timeup').text(quiz.timesUp);
            clearInterval(countdownInterval);
            clearTimeout(countdownTimeout);
            quiz.toReport.push({ correctWord, youSaid: "(TIME)" });
            quiz.nextQuestion();
        }, 1000 * (quiz.timeLimit + 1));

    },

    // Report the results of the quiz.
    displayReport: function () {
        $('#timer').text('Quiz Results')

        if (quiz.toReport.length === 0) {
            $('#choices').append('<h3>100% Correct!</h3>');
        }
        else {
            $('#choices').append('<h3>Incorrect Responses:</h3>');
        }

        for (var i = 0; i < quiz.toReport.length; i++) {
            $('#choices').append('<div id="report' + i + '"></div>');
            var youSaidButton = quiz.toReport[i].youSaid;
            youSaidButton.on('click', function () {
                if ($(this).text() === "(TIME)") {

                }
                else {
                    var player = document.getElementById('player');
                    player.src = "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + $(this).attr('data-word') + "_us_1.mp3";
                    player.play();
                }
            });
            youSaidButton.removeClass('btn-primary answerButton').addClass('btn-danger reportButton');
            var correctButton = $('<button type="button" class="btn btn-success btn-lg reportButton">' + quiz.toReport[i].correctWord[0] + '</button>');
            correctButton.attr('data-word', quiz.toReport[i].correctWord[0]);
            if (quiz.toReport[i].correctWord.length > 1) {
                correctButton.attr('data-ipa', quiz.toReport[i].correctWord[1]);
                if (ipaMode) {
                    correctButton.text(quiz.toReport[i].correctWord[1]);
                }
            }
            correctButton.on('click', function () {
                var player = document.getElementById('player');
                player.src = "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + $(this).attr('data-word') + "_us_1.mp3";
                player.play();
            })
            $('#report' + i).append(youSaidButton);
            $('#report' + i).append(correctButton);
        }
        var disableButton = "";
        if (quiz.questionPool.length === 0) {
            disableButton = " disabled";
        }
        $('#choices').append('<button type="button" id="tryAgain" class="btn btn-primary btn-lg answerButton"' + disableButton + '> Try Again</button>');
        $('#tryAgain').on('click', function () {
            quiz.currentRound = 0;
            quiz.nextQuestion();
        });
        $('#choices').append('<button type="button" id="mainMenu" class="btn btn-dark btn-lg answerButton">Main Menu</button>');
        $('#mainMenu').on('click', displayMainMenu);

        quiz.toReport = [];
    },

    // Check whether all the audio files in the current question pool are accessable. 
    checkAudioFiles: function () {
        for (var i = 0; i < quiz.questionPool.length; i++) {
            var questionSet = quiz.questionPool[i];
            for (var j = 0; j < questionSet.length; j++) {
                var audio = $('audio');
                audio.attr('src', "https://s3.amazonaws.com/audio.oxforddictionaries.com/en/mp3/" + questionSet[j][0] + "_us_1.mp3");
                audio[0].addEventListener('loadedmetadata', function () {
                    // An error will be thrown to the console if the audio file does not exist and the metadata cannot load.
                });
                var newAudio = audio[0].cloneNode(true);
                audio[0].parentNode.replaceChild(newAudio, audio[0]);
            }
        }
    }
}

setUpAudio = function () {
    var player = document.getElementById('player');
    player.play();
    audioSet = true;
}

clearData = function () {
    quiz.currentRound = 0;
    quiz.correctAnswers = 0;
    $('#correct').text(0);
    quiz.incorrectAnswers = 0;
    $('#incorrect').text(0);
    quiz.timesUp = 0;
    $('#timeup').text(0);
    quiz.toReport = [];
}

displayVowels = function () {
    $('#choices').empty();

    $('#choices').append('<button type="button" id="highFront" class="btn btn-primary btn-lg answerButton">[i] vs. [ɪ]</button>');
    $('#highFront').on('click', function () {
        quiz.questionPool = highFrontVowels;
    });

    $('#choices').append('<button type="button" id="highBack" class="btn btn-primary btn-lg answerButton">[u] vs. [ʊ]</button>');
    $('#highBack').on('click', function () {
        quiz.questionPool = highBackVowels;
    });

    $('#choices').append('<button type="button" id="low" class="btn btn-primary btn-lg answerButton">[æ], [ʌ], [ɑ]</button>');
    $('#low').on('click', function () {
        quiz.questionPool = lowVowels;
    })

    $('#choices').append('<button type="button" id="midBack" class="btn btn-primary btn-lg answerButton">[ɔ], [ou], [oɚ]</button>');
    $('#midBack').on('click', function () {
        quiz.questionPool = midBackVowels;
    })

    $('#choices').append('<button type="button" id="rColored" class="btn btn-primary btn-lg answerButton">[ɚ], [aɚ], [oɚ]</button>');
    $('#rColored').on('click', function () {
        quiz.questionPool = rColoredVowels;
    })

    $('#choices').append('<button type="button" id="back" class="btn btn-dark btn-lg menuButton">Main Menu</button>');
    $('#back').on('click', function () {
        displayMainMenu();
    })

    // Set this as our final function to check if there are any erroneous file names.
    //$('.answerButton').on('click',quiz.checkAudioFiles);

    // Set this as our final function for main quiz functionality.
    $('.answerButton').on('click', quiz.nextQuestion);

};

displayConsonants = function () {
    $('#choices').empty();

    // $('#choices').append('<button type="button" id="rl" class="btn btn-primary btn-lg answerButton">[r] vs. [l]</button>');
    // $('#rl').on('click', function () {
    //     quiz.questionPool = rl;
    // });

    // $('#choices').append('<button type="button" id="nl" class="btn btn-primary btn-lg answerButton">[n] vs. [l]</button>');
    // $('#nl').on('click', function () {
    //     quiz.questionPool = nl;
    // });
    // $('#choices').append('<button type="button" id="vw" class="btn btn-primary btn-lg answerButton">[v] vs. [w]</button>');
    // $('#vw').on('click', function () {
    //     quiz.questionPool = vw;
    // });

    // $('#choices').append('<button type="button" id="vb" class="btn btn-primary btn-lg answerButton">[v] vs. [b]</button>');
    // $('#vb').on('click', function () {
    //     quiz.questionPool = vb;
    // });

    $('#choices').append('<button type="button" id="back" class="btn btn-dark btn-lg menuButton">Main Menu</button>');
    $('#back').on('click', function () {
        displayMainMenu();
    })

    // Set this as our final function to check if there are any erroneous file names.
    //$('.answerButton').on('click',quiz.checkAudioFiles);

    // Set this as our final function for main quiz functionality.
    $('.answerButton').on('click', quiz.nextQuestion);

};

displayMainMenu = function () {
    $('#timer').text("Evan's Pronunciation Quiz");

    clearData();
    $('#choices').empty();

    $('#choices').append('<button type="button" id="vowels" class="btn btn-primary btn-lg menuButton">Vowels</button>');
    $('#vowels').on('click', function () {
        displayVowels();
        if (!audioSet) {
            setUpAudio();
        }
    });

    $('#choices').append('<button type="button" id="consonants" class="btn btn-primary btn-lg menuButton">Consonants</button>');
    $('#consonants').on('click', function () {
        displayConsonants();
        if (!audioSet) {
            setUpAudio();
        }
    });
}

// Sets click listeners for the options buttons at the start
$(document).ready(function () {
    displayMainMenu();
    $('#ipaToggle').change(function () {
        ipaMode = !ipaMode;
    });
});