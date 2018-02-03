var well = $(".well");

// Question set
var questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: "Fred Spice"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls"
}, {
  question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana"
}, {
  question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King"
}, {
  question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: "Skeeter"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: "Mr.Belding"
}];

// Variable that will hold the setInterval
var timer;

var quiz = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  timeRemaining: 30,

  clockDisplay: function() {
    quiz.timeRemaining--;
    $("#fixedJumbotron").html("Time Remaining: &emsp;" + quiz.timeRemaining + " seconds");
    if (quiz.timeRemaining === 0) {
      quiz.over.grade();
      quiz.over.gradesDisplay();
    }
  },
  start: function() {
    timer = setInterval(quiz.clockDisplay, 1000);
    $("#fixedJumbotron").html("Time Remaining: &emsp;" + quiz.timeRemaining + " seconds");
    // $("#fixedJumbotron").append("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    // Hide start button
    $("#startJumbotron").css("display", "none");
    // Display questions
    $(".well").css("display", "block");
    // Display submit button
    $("#submitJumbotron").css("display", "block");
  },
  grade: function() {
    // Grades 1st question
    if ($("input:radio[name=tripleAxel]:checked").val() == "3.5") {
      quiz.correct++;
    }
    else if ($("input:radio[name=tripleAxel]:checked").val() == null) {
      quiz.unanswered++;
    }
    else if ($("input:radio[name=tripleAxel]:checked").val() !== "3.5") {
      quiz.incorrect++;
    }
    // Grades 2nd question
    if ($("input:radio[name=camelSpin]:checked").val() == "camel") {
      quiz.correct++;
    }
    else if ($("input:radio[name=camelSpin]:checked").val() == null) {
      quiz.unanswered++;
    }
    else if ($("input:radio[name=camelSpin]:checked").val() !== "camel") {
      quiz.incorrect++;
    }
    // Grades 3rd question
    if ($("input:radio[name=lutzEdge]:checked").val() == "outside") {
      quiz.correct++;
    }
    else if ($("input:radio[name=lutzEdge]:checked").val() == null) {
      quiz.unanswered++;
    }
    else if ($("input:radio[name=lutzEdge]:checked").val() !== "outside") {
      quiz.incorrect++;
    }
    // Grades 4th question
    if ($("input:radio[name=dragBoot]:checked").val() == "lunge") {
      quiz.correct++;
    }
    else if ($("input:radio[name=dragBoot]:checked").val() == null) {
      quiz.unanswered++;
    }
    else if ($("input:radio[name=dragBoot]:checked").val() !== "lunge") {
      quiz.incorrect++;
    }
    this.gradesDisply();
  },
  gradesDisplay: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});