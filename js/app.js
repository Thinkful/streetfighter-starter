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
    $('.fireball img').animate({ "left": "+=700px" }, 500, function() {
      $( this ).css('display', 'none').css('left', '-=700px');
    });
  }).mouseup(function() {
    $( this ).css('background-image', 'url("/images/ryu-standing-still.png")');
  });

});
