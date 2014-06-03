$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show()
		$('.hadouken').finish().show()
		.animate(
		  {'left': '1175px'}, 500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '475px');
		  }
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position
	})

	$(document).keydown(function(event) {
		if (event.which == 88 ) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show(); //how do  I get the gif to loop
		}
	})

	.keyup(function(){ //how do I get ryu-ready pose to show if mouse in div when releasing x?
		if (event.which === 88 ) {
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
		console.log('yep');
		}
	})
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}