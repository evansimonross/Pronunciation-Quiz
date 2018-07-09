var quiz = {
    questionPool: testPool,
    totalRounds: 10,
    currentRound: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    timesUp: 0,
    nextQuestion: function () {
        $('#choices').empty();
        quiz.currentRound++;

        // Choose a random question from the question pool, and chooses one correct answer.
        var choicesIndex = Math.floor(Math.random() * quiz.questionPool.length);
        var choices = quiz.questionPool[choicesIndex];
        quiz.questionPool.splice(choicesIndex, 1);
        var correctIndex = Math.floor(Math.random() * choices.length);

        // Print the correct answer to the log. Delete this for final deployment.
        console.log('The correct answer is ' + choices[correctIndex]);

        // Set up audio file for the correct answer

        // Play the audio

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
                    quiz.nextQuestion();
                });
            }

            // Because we are splicing the array shorter, the correct answer's index may get lower.
            if (randomIndex < correctIndex) {
                correctIndex--;
            }
        }

        // Set up the countdown timer display interval

        // Set up the timeout for time running out

    },
    displayReport: function () {

    }
}

$(document).ready(quiz.nextQuestion());