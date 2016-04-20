$(function() {

  // Smooth scroll links
  var $root = $('html, body');
  $('a[href*="#"]').click(function() {
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


  // Bounce "Learn More" button
  // doBounce($('.arrow-down-btn'), )
  $('.arrow-down-btn').myBounce(10, 200, 5000);


  // Lightbox
  // $('a[data-toggle="lightbox"]', 'click', function(event) {
  //   event.preventDefault();
  //   $(this).ekkoLightbox();
  // });

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    return $(this).ekkoLightbox();
  });

});



/**
 * $.myBounce() bounces the passed element by animating the top margin.
 *
 * Parameters:
 *  - dist    distance to bounce
 *  - speed   speed of animation
 *  - delay   ms to delay between bounces
 */
$.fn.myBounce = function(dist, speed, delay){
  var self = this;
  (function runBounce(){
    self.animate({ marginTop: '-=' + dist }, speed, 'easeOutSine')
    .animate({ marginTop: '+=' + dist }, speed, 'easeInSine', function() {
      $(this).delay(delay);
      runBounce();
    });
  })();
  return this;
};
