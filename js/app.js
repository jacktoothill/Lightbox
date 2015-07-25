// Light Box code

// Decalre variables for overlay, image and caption.
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//add image to overlay
$overlay.append($image);
//add caption to overlay
$overlay.append($caption);
//add overlay to body
$("body").append($overlay);

// add the click event to stop default action (image appearing in own page in browser)
$("#imageGallery a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	//show overlay
	$overlay.fadeIn(1000);
	//get the child element alt attr and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

//when overlay is clicked
$overlay.click(function(){
	//hide overlay
	$overlay.hide();
});