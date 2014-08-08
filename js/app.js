$(document).ready(function() {
	playThemeSong();
})

$(document).ready(function() {
 $('.ryu').mouseenter(function() {
 	$('.ryu-still').hide();
 	$('.ryu-ready').show();
 })
 .mouseleave(function() {
 	$('.ryu-ready').hide();
 	$('.ryu-still').show();
 })
 .mousedown(function() {
 	playHadouken();
 	$('.ryu-ready').hide();
 	$('.ryu-throwing').show();
 	$('.hadouken').finish().show()
 	.animate(
 		{'left': '300px'},
 		500,
 		function() {
 			$(this).hide();
 			$(this).css('left', '-134px');
 		}
 		);
 })
 .mouseup(function() {
 	$('.ryu-throwing').hide();
 	$('.ryu-ready').show();
 })
});

$(document).ready(function() {
	$(document).keydown(function(event) { 
		if(event.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
			$('.main').css('background-image', 'url(https://lh6.googleusercontent.com/-MYjBRwvWsuY/T5oMRSnibzI/AAAAAAAAL3U/4NZBI9OGvjo/s1440-d/street%252520fighter%252520sakura%252520ryu%252520akuma%252520chunli%252520ken%252520masters%2525201440x900%252520wallpaper_www.wallfox_net_75.jpg)');
		}
	})
	.keyup(function(event) {
		if(event.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-ready').show();
			$('.main').css('background-image', 'none');
		}
	})
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playThemeSong () {
	$('#theme-song')[0].volume = 0.5;
	$('#theme-song')[0].load();
	$('#theme-song')[0].play();
}