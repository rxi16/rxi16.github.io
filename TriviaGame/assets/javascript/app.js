// When start button is clicked, do the following
$("button[type=start]").on("click", function() {
	var timeRemaining = 30;
	// Change content of fixedJumbotron from instructions to time remaining
	$("#fixedJumbotron").html("Time Remaining: &emsp;" + timeRemaining + " seconds");
	// Hide start button
	$("#startJumbotron").css("display", "none");
	// Display questions
	$(".well").css("display", "block");
	// Display submit button
	$("#submitJumbotron").css("display", "block");
	// Perform updateTime function every 1000 milliseconds
	setInterval(clock.updateTime, 1000);
});

var clock = {
	timeRemaining: 30,
	updateTime: function() {
		// decrement timeRemaining by 1
		clock.timeRemaining--;
		// Update timeRemaining every second
		$("#fixedJumbotron").html("Time Remaining: &emsp;" + clock.timeRemaining + " seconds");
		setTimeout(function() {over.stopClockDisplay();}, 30000);
	}
};

// When submit button is clicked, do the following
$("button[type=submit]").on("click", function() {
	over.stopClockDisplay();
	over.grade();
});

var over = {
	// Stops clock when timeRemaining is 0 seconds
	stopClockDisplay: function() {
		clearTimeout();
		$("#fixedJumbotron").html("30 seconds are up!");
	},
	// Declares a function that grades the test and changes the display when the test is over
	grade: function() {
		// Reset scores
		var correct = 0;
		var incorrect = 0;
		var blank = 0;
		// Grades 1st question
		if ($("input:radio[name=tripleAxel]:checked").val() == "3.5") {
			correct++;
		}
		else if ($("input:radio[name=tripleAxel]:checked").val() == null) {
			blank++;
		}
		else if ($("input:radio[name=tripleAxel]:checked").val() !== "3.5") {
			incorrect++;
		}
		// Grades 2nd question
		if ($("input:radio[name=camelSpin]:checked").val() == "camel") {
			correct++;
		}
		else if ($("input:radio[name=camelSpin]:checked").val() == null) {
			blank++;
		}
		else if ($("input:radio[name=camelSpin]:checked").val() !== "camel") {
			incorrect++;
		}
		// Grades 3rd question
		if ($("input:radio[name=lutzEdge]:checked").val() == "outside") {
			correct++;
		}
		else if ($("input:radio[name=lutzEdge]:checked").val() == null) {
			blank++;
		}
		else if ($("input:radio[name=lutzEdge]:checked").val() !== "outside") {
			incorrect++;
		}
		// Grades 4th question
		if ($("input:radio[name=dragBoot]:checked").val() == "lunge") {
			correct++;
		}
		else if ($("input:radio[name=dragBoot]:checked").val() == null) {
			blank++;
		}
		else if ($("input:radio[name=dragBoot]:checked").val() !== "lunge") {
			incorrect++;
		}
		// Hide questions
		$(".well").css("display", "none");
		// Hide submit button
		$("#submitJumbotron").css("display", "none");
		// Display results
		$("#results").css("display", "block");
		// Display scores inside of results jumbotron
		$("#correct").append(correct);
		$("#incorrect").append(incorrect);
		$("#blank").append(blank);
	}
};