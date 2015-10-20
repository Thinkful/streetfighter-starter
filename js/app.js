$(document).ready(function() {

	function playRyuStage(){

		$('#ryu-stage')[0].volume = 0.5;
		$('#ryu-stage')[0].load();
		$('#ryu-stage')[0].play();

	};

	playRyuStage();

	$('.jquery-logo, .thinkful-logo, .intro-message ').fadeIn(2000).delay(2000).fadeOut(2000);

	$('.personal-intro').fadeIn(2000).delay(2000).fadeOut(2000,function(){

		$('.intro-instructions').fadeIn(1000);

	});

	$('.ryu').mouseenter(function(){
	
		$('.ryu-still').hide();
		$('.ryu-ready').show();

	});
	$('.ryu').mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();


	});

	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-still').hide();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate({"left":"1020px"},600,function(){
    		$(this).hide();
    		$(this).css("left","520px");
    		});
    });
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
 	$('.ryu').mouseup(function() {
    	 $('.ryu-throwing').hide();
 		 $('.ryu-ready').show();
    // ryu goes back to his ready position
 	});

 	function playRyu(){

		$('#ryu-pose')[0].volume=0.5;
		$('#ryu-pose')[0].load();
		$('#ryu-pose')[0].play();

	};

	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
		};

	function playKen(){

		$('#ken-sound')[0].volume=0.5;
		$('#ken-sound')[0].load();
		$('#ken-sound')[0].play();

	};

	

	$(window).keydown(function(e){

		if(e.keyCode==72){

			

			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		

		}
	});

	$(window).keyup(function(e){

		if(e.keyCode==72){
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').show();



		}
	});

	$(window).keydown(function(e){

		if(e.keyCode==88){
			
			$('.intro-instructions').css("display","none");
			$('#ryu-stage')[0].pause();
			playKen();

			$('.ken').delay(5000).fadeIn(2000,function(){

				$('.TBC').fadeIn(1000);

			});

		}
	});





});

