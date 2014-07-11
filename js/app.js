$(document).ready( function() {
	$(".ryu").mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		console.log('mousedown');
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
	})

	.mouseup(function() {
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(".instruct").on("mouseenter", "img", function() {
		$('ul').slideDown('slow');	
	})

	.mouseleave(function() {
		$('ul').slideUp('slow');
	});	
});