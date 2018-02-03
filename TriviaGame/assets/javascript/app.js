var timeRemaining = 30;
var clockDisplay = {
	setInterval: function() {
		interval = setInterval(clockDisplay.updateClockDisplay, 1000);
	},
	// Perform updateClockDisplay function every 1000 milliseconds
	updateClockDisplay: function() {
		if (timeRemaining > 0) {
			// decrement timeRemaining by 1
			timeRemaining--;
			// Update timeRemaining every second
			$("#fixedJumbotron").html("Time Remaining: &emsp;" + timeRemaining + " seconds");
		}
		else {
			clearInterval(interval);
			// change clock display
			$("#fixedJumbotron").html("30 seconds are up! See your results below.");
			over.grade();
			over.gradesDisplay();
		}
	}
};
var over = {
	// Stops clockDisplay when timeRemaining is 0 seconds
	stopClockDisplay: function() {
		clearInterval(interval);
		over.grade();
		over.gradesDisplay();
	},
	// Declares a function that grades the test and changes the display when the test is over
	grade: function() {
		// Reset scores
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0;
		// Grades 1st question
		if ($("input:radio[name=tripleAxel]:checked").val() == "3.5") {
			correct++;
		}
		else if ($("input:radio[name=tripleAxel]:checked").val() == null) {
			unanswered++;
		}
		else if ($("input:radio[name=tripleAxel]:checked").val() !== "3.5") {
			incorrect++;
		}
		// Grades 2nd question
		if ($("input:radio[name=camelSpin]:checked").val() == "camel") {
			correct++;
		}
		else if ($("input:radio[name=camelSpin]:checked").val() == null) {
			unanswered++;
		}
		else if ($("input:radio[name=camelSpin]:checked").val() !== "camel") {
			incorrect++;
		}
		// Grades 3rd question
		if ($("input:radio[name=lutzEdge]:checked").val() == "outside") {
			correct++;
		}
		else if ($("input:radio[name=lutzEdge]:checked").val() == null) {
			unanswered++;
		}
		else if ($("input:radio[name=lutzEdge]:checked").val() !== "outside") {
			incorrect++;
		}
		// Grades 4th question
		if ($("input:radio[name=dragBoot]:checked").val() == "lunge") {
			correct++;
		}
		else if ($("input:radio[name=dragBoot]:checked").val() == null) {
			unanswered++;
		}
		else if ($("input:radio[name=dragBoot]:checked").val() !== "lunge") {
			incorrect++;
		}
		// Append scores inside of results jumbotron
		$("#correct").append(correct);
		$("#incorrect").append(incorrect);
		$("#unanswered").append(unanswered);
	},
	gradesDisplay: function() {
		// Hide questions
		$(".well").css("display", "none");
		// Hide submit button
		$("#submitJumbotron").css("display", "none");
		// Display results
		$("#results").css("display", "block");			
	}
};
// When start button is clicked, do the following
$(document).on("click", "button[type=start]", function() {
	$("#fixedJumbotron").html("Time Remaining: &emsp;" + timeRemaining + " seconds");
	clockDisplay.setInterval();
	// Hide start button
	$("#startJumbotron").css("display", "none");
	// Display questions
	$(".well").css("display", "block");
	// Display submit button
	$("#submitJumbotron").css("display", "block");
});
// When submit button is clicked, do the following
$(document).on("click", "button[type=submit]", function() {
	// change clock display
	$("#fixedJumbotron").html("Successfully submitted! Your results are below.");
	over.stopClockDisplay();
});