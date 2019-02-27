$('#pitch').delay(85).fadeIn(1500);

$('.funFacts').delay(85).fadeIn(1500);

(function($) {
  $(function() {
    $('.toggleOverlay').click(function() {
      $('aside').toggleClass('open');
    });
  });
})(jQuery);