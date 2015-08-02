$(document).ready(function() {
  $('.fighter').hover(
    function() {
      $( this ).css('background-image', 'url("/images/ryu-ready-position.gif")');
    },
    function() {
      $( this ).css('background-image', 'url("/images/ryu-standing-still.png")');
    }
  ).mousedown(function() {
    $( this ).css('background-image', 'url("/images/ryu-throwing-hadouken.png")');
    $('.fireball img').css('display', 'inline');
    playHadouken();
    $('.fireball img').animate({ "left": "+=700px" }, 500, function() {
      $( this ).css('display', 'none').css('left', '-=700px');
    });
  }).mouseup(function() {
    $( this ).css('background-image', 'url("/images/ryu-standing-still.png")');
  });


  $(document).keydown(function() {
    if( event.which ==  88 || event.which == 120) {
      $('.fighter').css('background-image', 'url("/images/ryu-cool.gif")');
    }
  }).keyup(function() {
    $('.fighter').css('background-image', 'url("/images/ryu-standing-still.png")');
  });


});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
