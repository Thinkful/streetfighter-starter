$(document).ready(function() {
  $('.fighter').hover(function() {
      $( this ).css('background-image', 'url("/images/ryu-ready-position.gif")')},
      function() {
          $( this ).css('background-image', 'url("/images/ryu-standing-still.png")')});
  $('.fighter').mousedown(function() {
            $( this ).css('background-image', 'url("/images/ryu-throwing-hadouken.png")')});






});
