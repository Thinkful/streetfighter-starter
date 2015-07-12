$(document).ready(function(){
$('.ryu').mouseenter(function(){

	//alert("mouse entereed .ryu div");
	$('.ryu-still').hide();
	$('.ryu-ready').show();
})
.mouseleave(function(){

	//alert("mouse left");
	$('.ryu-ready').hide();
	$('.ryu-still').show();
})
.mousedown(function(){
	playHadouken();
	//console.log("mouse down fired");
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();
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

	//console.log("mouse up fired");
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
 });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}