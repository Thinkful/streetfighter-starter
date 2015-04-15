$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    $('.ryu-cool').hide();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    $('.ryu-cool').hide();
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
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  $(".instruct").on("mouseenter", "img", function() {
		$('ul').slideDown('slow');	
	})

	.mouseleave(function() {
		$('ul').slideUp('slow');
	})

  $(document).keydown(function(event) {

    if(event.which == 88) {
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
      $('.ryu-still').hide();
    }   
  })
  .keyup(function(event) {

    if(event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }   
  });
});
 
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
