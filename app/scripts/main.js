$(function() {

  // Smooth scroll links
  var $root = $('html, body');
  $('a').click(function() {
    var href = $.attr(this, 'href');

    // Decide where to scroll to
    var top = 0;
    var windowHeight = $(window).height();
    if (href === '#' || typeof $(href).offset() === 'undefined') {
      // Scroll to top
      top = 0;
    }
    else if ($(document).height() - $(href).offset().top < $(window).height()) {
      // Scroll to bottom If the target div is at the end of the page
      top = $(document).height() - $(window).height();
    }
    else {
      // Scroll to div in middle of page
      top = $(href).offset().top;
    }

    $root.animate({
      scrollTop: top
    }, 750, 'easeInOutCubic', function () {
      window.location.hash = href;
    });
    return false;
  });

});
