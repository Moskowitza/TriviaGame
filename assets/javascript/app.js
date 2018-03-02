// starts with a button click "start"
//timer starts automatically demo has 30s, displayed at the top
//quiz is multiple choice
//ends when the timer hits zero
//there is a DONE button
//next screen, show correct answers, incorrect answers, AND not clicked

//setTimeout(function, milliseconds)

$(document).ready(function () {
    $("#quiz").hide();
    $("#results").hide();


    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function getScore(form) {

        var AnswersAndObjects = new Array();
        AnswersAndObjects[0] = ["eno", form.question1];
        AnswersAndObjects[1] = ["noBut", form.question2];
        AnswersAndObjects[2] = ["dog", form.question3];
        AnswersAndObjects[3] = ["mike", form.question4];
        //correct answers
        var theScore = 0;

        for (i = 0; i < AnswersAndObjects.length; i++) {
            currQuestionObject = AnswersAndObjects[i][1];
            for (j = 0; j < currQuestionObject.length; j++) {
                if (currQuestionObject[j].checked && currQuestionObject[j].value == AnswersAndObjects[i][0]) {
                    theScore++;
                    break;
                }
            }
        }
        //convert to percentage
        theScore = Math.round(theScore / AnswersAndObjects.length * 100);

        form.percentage.value = theScore + "%";
    }

    //  The decrement function.
    function decrement() {
        number--;

        $("#show-number").html("<h2>" + number + "</h2>");


        //  Once number hits zero...
        if (number === 0) {

            //  ...run the stop function.
            stop();

            //  Alert the user that time is up.
            alert("Time Up!");
        }
    }

    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//On Start
$("#startBtn").click(function () {
    $("#start").hide();
    $("#quiz").show();
    //start timer right after 
    setTimeout(function quiz() {
        //quiz function
        $("#done").click(function () {
            $("#quiz").hide();
            $("#results").show();
        });

    }, 1000 + 5);
});


$("#return").click(function () {
    $("#results").hide();
    $("#start").show();
});

});