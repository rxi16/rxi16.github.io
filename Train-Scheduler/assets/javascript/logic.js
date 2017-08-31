    // Initialize Firebase
   	var config = {
      apiKey: "AIzaSyCtLI55hfrLceLCEZAHD45sB9hHyFFP_IU",
      authDomain: "train-scheduler-1c1ee.firebaseapp.com",
      databaseURL: "https://train-scheduler-1c1ee.firebaseio.com",
      projectId: "train-scheduler-1c1ee",
      storageBucket: "",
      messagingSenderId: "257389690813"
  	};

    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database(); 

    // Capture Button Click
    $("#add-train").on("click", function(event) {
      event.preventDefault();

      // Grab values from text boxes
      var name = $("#name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrainTime = $("#firstTrainTime-input").val().trim();
      var frequency = $("#frequency-input").val().trim();

      // Creates local "temporary" object for holding train data
      var trainInstance = {
        name: name,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
      };

      // Code for handling the push to firebase
      database.ref().push(trainInstance);

      // console log properties of trainInstance object
      console.log("name: " + trainInstance.name);
      console.log("desetination: " + trainInstance.destination);
      console.log("firstTrainTime: " + trainInstance.firstTrainTime);
      console.log("frequency: " + trainInstance.frequency);

      // Alert
      alert("Train successfully added");

      // Clears all of the text-boxes
      $("#name-input").val("");
      $("#destination-input").val("");
      $("#firstTrainTime-input").val("");
      $("#frequency-input").val("");
    });

    // Create Firebase event for adding train to the database and a row in the html
    database.ref().on("child_added", function(snapshot) {
      
      var sv = snapshot.val();

      // create variable for each child in firebase
      var name = snapshot.val().name;
      var destination = snapshot.val().destination;
      var firstTrainTime = snapshot.val().firstTrainTime;
      var frequency = snapshot.val().frequency;

      // log data of last train added
      console.log("name: " + sv.name);
      console.log("destination: " + sv.destination);
      console.log("firstTrainTime: " + sv.firstTrainTime);
      console.log("frequency: " + sv.frequency);

      //put firstTrainTime in context of current moment (sans military time input)
      var firstTrainTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");

      // log current time
      console.log("current time: " + moment().format("HH:mm"));

      // calculate difference between current moment and firstTrainTimeConverted
      var timeToNow = moment().diff(firstTrainTimeConverted, "minutes");

      // calculate modulus
      var modulus = timeToNow % frequency; 
      console.log("modulus: " + modulus);

      // calculate minutesAway
      var minutesAway = frequency - modulus; 
      console.log("minutesAway: " + minutesAway);

      // calculate nextArrivalTime
      var nextArrivalTime = moment().add(minutesAway, "minutes").format("HH:mm");
      console.log("nextArrivalTime: " + nextArrivalTime);

      // change the HTML to reflect added train
      $("#tbody").append(
      	$("<tr>"),
  	    $("<td>" + name + "</td>"),
  	    $("<td>" + destination + "</td>"),
  	    $("<td>" + frequency + "</td>"),
  	    $("<td>" + nextArrivalTime + "</td>"),
  	    $("<td>" + minutesAway + "</td>"),
  	    $("</tr>")
      );
    });