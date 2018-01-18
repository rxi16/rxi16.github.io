// declare array of topics
var topics = ["yoga", "nature", "mint", "negative space"];

// declare variable to hold limit of responses
var limit = 10;

// declare an incomplete url that will be identical for every query
var url = "https://api.giphy.com/v1/gifs/search?api_key=bdf476b0e1d142468f3228d00cfce250"; 

// declare topicCount (used to append to id of corresponding button)
var topicCount = 0;

// declare function that gets api data from giphy
function runQuery(topicInput) {
	$.ajax({
    url: url,
    method: "GET"
  	}).done(function(GIPHYData) {

	  	// Loop through image responses
	    for (var i = 0; i < limit; i++) {

			// Create image element with five attributes and append to bootstrap 4.0.0's card element
			// Create label beneath each image element that displays its rating
			$("#card").append(
				$("<div>").attr("class", "form-group"),
				$("<img>").attr({
					src: GIPHYData.data[i].images.fixed_height_still.url, 
					"url-still": GIPHYData.data[i].images.fixed_height_still.url,
					"url-animate": GIPHYData.data[i].images.fixed_height.url,
					state: "still",
					type: "gif",
					class: "img"
				}),
				$("<p>"),
				$("<label>").html("Rating: " + GIPHYData.data[i].rating)
			)
			
		}
	});
}

// whenever a button is clicked, do the following
$(document).on("click", ".btn-topics", function() {
	
	// using submit property, we can hit enter on the keyboard and it registers the search
	event.preventDefault();

	// clear images currently displayed (if any)
	$("#card").empty();

	// topic holds the value of the selected button
	var topic = $(this).val();

	// concatenate components of url
	url = url + "&q=" + topic + "&limit=" + limit;

	// passes final url to the runQuery function
	runQuery(url);
});

// when submit button is clicked
$("#submit").on("click", function(event) {
	// submit property allows us to hit enter on the keyboard and it registers the search
	event.preventDefault();

  	// create variable to hold input text
  	var topicInput = $("#input").val().trim();

	// push input text to topics array
	topics.push(topicInput);

	// updates topicCount
  	topicCount = topics.length;

  	// create button element
  	$("#button-div").append(
	  	$("<button>").attr({
			id: topicInput, 
			type: "submit",
			class: "btn btn-default btn-topics",
			value: topicInput,
		}).html(topicInput)
	);
 });

// whenever image is clicked, do the following
$(document).on("click", ".img", function() {

	// direct ourselves to the animate or still url
	var state = $(this).attr("state");
		if (state === "still") {
	        $(this).attr("src", $(this).attr("url-animate"));
	        $(this).attr("state", "animate");
	    } else {
	        $(this).attr("src", $(this).attr("url-still"));
	        $(this).attr("state", "still");
	    }
});