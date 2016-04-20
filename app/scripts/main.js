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
  $('.arrow-down-btn').myBounce(10, 200, 5000);


  // Lightbox
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    return $(this).ekkoLightbox();
  });


  // Highlight nav links on scroll
  var $pageSections = $('.container section');
  var $navLIs = $('.navbar .navbar-nav li');

  $(window).on('scroll', function() {
    // Remove highlight when above first div
    if ($(window).scrollTop() < $pageSections.first().offset().top) {
      $navLIs.removeClass('active');
    }

    // Highlight the nav link for the current section
    $pageSections.each(function() {
      if($(window).scrollTop() + 25 >= $(this).offset().top) {
        // console.log($(window).scrollTop() + ' >= ' + $(this).offset().top);
        var id = $(this).attr('id');
        $navLIs.removeClass('active');
        $navLIs.find('a[href="#'+ id +'"]').parent().addClass('active');
      }
    });

    // If at bottom, highlight last link
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $navLIs.removeClass('active');
      $navLIs.find('a[href="#'+ $pageSections.last().attr('id') +'"]')
        .parent().addClass('active');
    }
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
