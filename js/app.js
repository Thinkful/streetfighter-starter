$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		// play hadouken sound
		playHadouken ();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();

		// show hadouken and animate it to the right of the screen
		//.finish() completes all currently running animations on an element.
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px')
			}
		);
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
		// ryu goes back to his ready position
		// hadouken needs to show for animation
		});

	$(document).keydown(function(x){
		if(x.keyCode == 88){
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(x){
		if(x.keyCode == 88){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	})
});

 //Load sound for ryu-throw
  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}