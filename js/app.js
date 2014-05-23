function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}

var poseMusic = false;
function playPose () {
  poseMusic = !poseMusic;
  if (poseMusic) {
    $('#pose')[0].pause();
    $('#pose')[0].play();
  }
}
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
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		//play hadouken sound
		playHadouken();
		$('.hadouken').finish().show()
		// show hadouken and animate it to the right of the screen
			.animate(
				  {'left': '800px'},
				  500,
				  function() {
				    $(this).hide();
				    $(this).css('left', '520px');
				  }
			);
	})

	.mouseup(function() {
		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
	});

	$(document).keydown(function(event) {
		if (event.keyCode == 88){
			playPose();
			$('.ryu-still').hide();
			 $('.ryu-cool').show();
			}

	}).keyup(function(event) {
		/* Act on the event */
		if (event.keyCode == 88){
			$('#pose')[0].pause();
      		$('#pose')[0].load();
			$('.ryu-cool').hide();
			$('.ryu-still').show();

		}
	});	
		

});