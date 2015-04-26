$(document).ready(function() {
  $('.mega').mouseenter(function() {
    $('.mega-still').hide();
    $('.mega-ready').show();
  })
  .mouseleave(function() {
    $('.mega-ready').hide();
    $('.mega-still').show();
  })
  .mousedown(function() {   
    $('.mega-ready').hide();
    $('.mega-throwing').show();
    $('.haduken').finish().show()
    .animate(
      {'left': '800px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '360px');
      }
    );
  })
  .mouseup(function() {
    $('.mega-throwing').hide();
    $('.mega-ready').show();
  });
});

