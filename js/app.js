$(document).ready(function(){

	intro();

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
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
				$(this).css('left', '-212px');
			})
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position	

	});



  $(document).keydown(function(x) {
    if (x.keyCode == 88) {
      playCool();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.instruct').fadeOut(400);
      $('.ryu-cool').show();
      $('.beach').fadeIn(700);
    }  
  }).keyup(function(x) {
    if (x.keyCode == 88) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
      $('.instruct').show();
      $('.beach').hide();
    }
  });

 $(document).keydown(function(z) {
    if (z.keyCode == 90) {
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-16bit').show();
    }   
  }).keyup(function(z) {
    if (z.keyCode == 90) {
      $('.ryu-16bit').hide();
      $('.ryu-ready').show();
    }
  });





});


var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    //$('#theme-song')[0].pause();
    // $('#cool')[0].load()
    $('#cool')[0].play();
  }
}

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function intro() {
  $('.jquery-logo').fadeIn(900, function() {
    $(this).fadeOut(1700, function() {
      $('.presents').fadeIn(900, function() {
        $(this).fadeOut(1500, function() {
          $('.sf-logo').fadeIn(900, function() {
            $(this).fadeOut(1800, function() {
              $('.ryu-still').fadeIn(800);
              $('.instruct').fadeIn(800);
            });
          })
        })
      })
    })
  })
}




