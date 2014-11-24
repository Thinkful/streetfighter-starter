$(document).ready(function() {
    
    
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-still').show();
    });
    
    $('.ryu').mousedown(function() {
        playHadouken ();
       $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
        $('.hadouken').finish().show()
        .animate({"left": "+400px"}, "slow",                            function() {$('.hadouken').hide();
            $('.hadouken').removeAttr('style');                       });
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('ryu-ready').show();
    });

$(this).keydown(function (event) {
   var key = event.which;
   if (key == 88) {  
      $(".ryu-still").hide();
      $(".ryu-cool").show();
   }})   

});


function playHadouken () {
    $('#hadouken-sound')[0].volume=.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}