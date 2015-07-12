$(document).ready(function(){
	doIntro();
	playGame();
});

//HADOKEN SOUND
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

//COOL SOUND FUNCTION
 var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#theme-song')[0].pause();
    // $('#cool')[0].load()
    $('#cool')[0].play();
  }
}

//MOUSE MOVEMENT ANIMATION	
function playGame() {
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

//KEY UP KEY DOWN MOVEMENTS
$(document).keydown(function(e) {
      if (e.keyCode == 88) {
      $('.ryu-action').hide();
      $('.ryu-cool').show(); 
  }
  })

 .keyup(function(e) {
if (e.keyCode == 88) {      
	  $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
}


//INTRO GRAPHICS
 function doIntro() {
  $('#theme-song')[0].volume = 0.3;
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
