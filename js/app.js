$(document).ready(function() {
	GoRyu();
});


//Initiate Function
var hadoukenSound = false;
function playHadouken () {
		hadoukenSound = !hadoukenSound;
	  if (hadoukenSound){
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	  }
	}

var poseMusic = false;
function playPose () {
  poseMusic = !poseMusic;
  if (poseMusic) {
    $('#pose')[0].pause();
    $('#pose')[0].play();
  }
}

// Ryu Function

function GoRyu () {
	//when user hover over
	$('.ryu').mouseenter(function() {
		/* Act on the event */
		$('.action').hide();
		$('.ryu-ready').show();
	})
	//after user leave ryu
	.mouseleave(function() {
    $('.action').hide();
	$('.ryu-still').show();
  })

	.mousedown(function() {	
		//play hadouken sound
		playHadouken();
		$('.action').hide();
		$('.ryu-throwing').show();		
		$('.hadouken').finish().show()
		// show hadouken and animate it to the right of the screen
			.animate(
				  {'left': '900px'},
				  400,
				  function() {
				  	$(this).stop();
				    $(this).hide();
				    $(this).css('left', '520px');
				  }
			);
	})

	.mouseup(function() {
		$('.action').hide();
  		$('.ryu-ready').show();
	});

	$(document).keydown(function(event) {
		if (event.keyCode == 88){
			playPose();
			$('.action').hide();
			 $('.ryu-cool').show();
			}

	}).keyup(function(event) {
		/* Act on the event */
		if (event.keyCode == 88){
			$('#pose')[0].pause();
      		$('#pose')[0].load();
			$('.action').hide();
			$('.ryu-still').show();

		}
	});	

}