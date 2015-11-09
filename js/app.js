$(document).ready(function() {
	function playHadouken () {
  	$('#hadouken-sound')[0].volume = 0.5;
  	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}
	$('.ryu').mouseenter(function() {
		//alert('mouse entered .ryu div');//
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();

	})
	.mousedown(function() {
		playHadouken ();
  		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1024'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','524px');
	});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(window).keydown(function(keypress){
		if(keypress.keyCode==88)
		{
			$('.ryu-still,.ryu-ready').hide();

			$('.ryu-cool').show();
		}
	})
	$(window).keyup(function(){
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	});
});