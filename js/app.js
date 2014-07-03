$(document).ready(function() {

	// These are the events for the mouse.
	$(".fighter")
		.mouseenter(function() {
			$(".still").hide();
			$(".ready").show();
			$(".throwing").hide();
			$(".cool").hide();
		})

		.mouseleave(function() {
			$(".still").show();
			$(".ready").hide();
			$(".throwing").hide();
			$(".cool").hide();
		})

		.mousedown(function() {
			sound_throwing();
			$(".still").hide();
			$(".ready").hide();
			$(".cool").hide();
			$(".throwing").show();
			$(".hadouken").finish().show()
			.animate(
				{"left": "1000px"},
				500,
				function() {
					$(this).hide();
					$(this).css("left", "434px");
				}
			);

		})

		.mouseup(function() {
			$(".throwing").hide();
			$(".cool").hide();
		})

	// These are the events for the keyboard.
	$(document)
		.keydown(function(event) {
			if (event.which == 88) {
				$(".still").hide();
				$(".ready").hide();
				$(".throwing").hide();
				$(".cool").show();
			}
		})

		.keyup(function(event) {
			if (event.which == 88) {
				$(".throwing").hide();
				$(".cool").hide();
				$(".still").show();
			}
		})

	// These are the other event functions.
	function sound_throwing() {
		$(".soundclip_throwing")[0].load();
		$(".soundclip_throwing")[0].volume = 0.5;
		$(".soundclip_throwing")[0].play();
	};

});