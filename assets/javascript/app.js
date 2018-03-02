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
});//end return to start

});//end document ready