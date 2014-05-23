$(document).ready(function() {

	//when user hover over
	$('.ryu').mouseenter(function() {
		/* Act on the event */
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	//after user leave ryu
	.mouseleave(function() {

    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })

	.mousedown(function() {
		//play hadouke sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		
		// show hadouken and animate it to the right of the screen
	})

	.mouseup(function() {
		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
	});


});