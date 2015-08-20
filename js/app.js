$(document).ready(function(){
	intro();

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
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide(); //Added to remove duplicate image 
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
		$('.ryu-ready').show();
		// ryu goes back to his ready position
		// hadouken needs to show for animation
		});

	$(document).keydown(function(e){
		if(e.keyCode == 88){
			$('.ryu-ready').hide();
			$('.ryu-still').hide(); //Removes duplicate image below
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e){
		if(e.keyCode == 88){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	})
});

//Load sound for ryu-throw
function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

//Load logo and text
function intro() {
  $('.logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
        $('.instr').fadeIn(2000, function() {
        	$(this).fadeOut(7000);
        	});
       })	
  	})
}	