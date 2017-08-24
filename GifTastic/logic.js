// declare array of topics
var topics = ["yoga", "nature", "mint", "negative space"];

// declare (unfinished) url that will be identical for every query
var url = "https://api.giphy.com/v1/gifs/search?api_key=bdf476b0e1d142468f3228d00cfce250"; 

// declare topicCount (used to append to id of corresponding button)
var topicCount = 0;

// declare function that gets api data from giphy
function runQuery(topicInput) {
	$.ajax({
    url: url,
    method: "GET"
  }).done(function(GIPHYData) {

  	/*NYTSearch example
  	$("#article-well-" + articleCounter)
          .append(
            "<h3 class='articleHeadline'><span class='label label-primary'>" +
            articleCounter + "</span><strong> " +
            NYTData.response.docs[i].headline.main + "</strong></h3>"
          );
    */

    // retrieve still url (for any item in topics array)
	var stillURL = response.data.images.fixed_height_still.url;

	// retrieve animated url (for any item in topics array)
	var animateURL = response.data.images.original.fixed_height.url;
}

// whenever a button is clicked, do the following
$(document).on("click", ".btn-topics", function() {
	
	// using submit property, we can hit enter on the keyboard and it registers the search
	event.preventDefault();

	// clear images currently displayed (if any)
	$("img").clear();

	// topic holds the value of the selected button
	var topic = $(".btn-topics").val();

	// serialize (via param method) components of url
	url = url + $.param(
		"&q=": topic,
		"&limit=": "10"
	);

	// passes final url to the runQuery function
	runQuery(url);

	// declare a variable holding the rating of the image...use ajax GET method
	var rating = data.rating;

	// Create image element with five attributes
	$("<img>").attr({
		src: "data.images.fixed_height_still.url", 
		"url-still": "data.images.fixed_height_still.url",
		"url-animate": "data.images.original.fixed_height.url",
		state: "still",
		type: "gif",
		class: "img"
	});

	// Create label beneath image element that displays rating
	$("<label>").attr().html("Rating: " + rating);

});

// when submit button is clicked
$("#submit").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  event.preventDefault();

  	// create variable to hold input text
  	var topicInput = $("#input").val().trim();

	// push input text to topics array
	topics.push(topicInput);

	// updates topicCount
  	topicCount = topics.length();

  	// create button element
  	$("<button>").attr({
		id: topicInput, 
		type: "submit",
		class: "btn btn-default btn-topics",
		value: topicInput,
	}).html(topicInput);
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