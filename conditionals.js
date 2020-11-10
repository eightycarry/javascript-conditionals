var count = 0;


$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

    function countClick(event) {
        event.preventDefault();

        // Increment a variable that tracks the
        // number of button clicks
        count++;
        // Print the current number of clicks to the
        // <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(count);

        // When the count gets to 10, reset it to 0
        if (count === 10) {
            count = 0;
        }


    }


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var birthYear =$("#birthYear").val();
        var age = 2020 - birthYear;
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18) {
            $("#birthYearOutput").text("Child");
        } else {
            $("#birthYearOutput").text("Adult");
        }
        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchaseAmount = $("#purchaseAmount").val();
        // Get the state from the text box with ID "state"
        var wi = .05;
        var il = .08;
        var mn = .075;
        var mi = .055;

        var state = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        if (state === "wi") {
            var salesTotal = (.05 * purchaseAmount) + purchaseAmount;
            $("#salesTaxOutput").text(salesTotal);
        }
        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});