$(document).ready(function () {
    $("#quiz").hide(); //hide these divs on load
    $("#results").hide();

    //set right, wrong, unasnwered counters to Zero
    var numRight = 0; 
    var numWrong = 0;
    var numUnans = 0;
    //Set our count down values
    var number = 45;     
    var intervalId; 

    //  Runtime: Clears intervalID, interval (decrement the "number variable" every ONE second
    function runTimer() {
        number=45;
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000);
    }
    //decrese number by one. 
    //Show the count down in the DOM, 
    //when number =0 STOP
    function decrementTimer() {
        number--;
        $("#show-number").html("You have " + number + " seconds left");
        if (number === 0) {
            stopTimer();
        }
    }

    //  When time is UP:
    function stopTimer() {
        //Swap out what is seen
        $("#start").hide();
        $("#quiz").hide();
        $("#results").show();
        //load get score into results

        getScore();
        
        $("#correct").html("Correct answers: " + numRight);
        $("#wrong").html("Wrong answers: " + numWrong);
        $("#unanswered").html("Unanswers: " + numUnans);
    }


    function getScore() {
        //put correct answers into an array

        numRight = 0; //set right, wrong, unasnwered to zero
        numWrong = 0;
        numUnans = 0;
        progress = 0;
        for (i = 0; i < 13; i++) { //while 'i' is LESS than number of questions in our quiz -1
            var radios = document.getElementsByName('question' + i); //get questions and store them in 
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                progress++;
                if (radio.value == "correct" && radio.checked) {
                    numRight++; //add score
                } else if (radio.value == "wrong" && radio.checked) {
                    numWrong++;
                }
                numUnans = 12 - numRight - numWrong;
            }
        }//end for loop
    }//end getScore

function clearRadio(){
    $('input[type="radio"]').prop('checked',false); //clear radio buttons
}

    //On Start btn press
    $("#startBtn").click(function () {
        $("#start").hide();
        $("#quiz").show();
        runTimer();     //there seems to be a delay here
        clearRadio();   //Clear out radio buttons
        
        setTimeout(function quiz() {
            //quiz function
            $("#done").click(function () {
                $("#quiz").hide();
                $("#results").show();
            });

        }, 1000 + 5);
    });
    //when the DONE button is clicked, but timer has not run out:
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