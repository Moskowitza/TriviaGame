$(document).ready(function () {
    $("#quiz").hide(); //hide these divs on load
    $("#results").hide();
    // var numRight = 0;
    var number = 100;     //  Set our countdown timer to 100.

    //  Variable that will hold our interval ID when we execute

    var intervalId;

    //  the "runTimer" function 
    function runTimer() {
        clearInterval(intervalId);
        //          setInterval(function, value)
        intervalId = setInterval(decrementTimer, 1000);
    }
    function decrementTimer() {
        number--;

        $("#show-number").html("<h2>" + number + "</h2>");


        //  Once number hits zero...
        if (number === 0) {

            //  ...run the stop function.
            stopTimer();

            //  Alert the user that time is up.
            alert("Time Up!");
        }
    }

    //  The stop function
    function stopTimer() {
        $("#start").hide();
        $("#quiz").hide();
        $("#results").show();
        getScore()
        clearInterval(intervalId);
        $("#correct").html("Correct answers: " + numRight);
        $("#wrong").html("Wrong answers: " + numWrong);
        $("#unanswered").html("Unanswers: " + numUnans);
    }
    function timer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000);
    }

    //  Execute the run function.
    runTimer();
    function getScore() {
        //put correct answers into an array

        numRight = 0; //set right, wrong, unasnwered to zero
        numWrong = 0;
        numUnans = 0;
        for (i = 0; i < 5; i++) { //while 'i' is less than the number of questions in our quiz
            var radios = document.getElementsByName('question' + i); //get questions and store them in 
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.value == "correct" && radio.checked) {
                    numRight++; //add score
                } else if (radio.value == "wrong" && radio.checked) {
                    numWrong++;
                }
                numUnans = 4 - numRight - numWrong;
            }
        }//end for loop
        console.log(numRight)
    }//end getScore

    //On Start btn press
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
    $("#done").click(function () {
        $("#start").hide();
        $("#quiz").hide();
        $("#results").show();
        getScore()
        clearInterval(intervalId);
        $("#correct").html("Correct answers: " + numRight);
        $("#wrong").html("Wrong answers: " + numWrong);
        $("#unanswered").html("Unanswers: " + numUnans);
    });

    $("#return").click(function () {
        $("#results").hide();
        $("#start").show();
    });//end return to start

});//end document ready