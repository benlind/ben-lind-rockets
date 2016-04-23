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
  $('.arrow-down-btn').myBounce(7, 200, 5000);


  // Lightbox
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    return $(this).ekkoLightbox();
  });


  // Highlight nav links and animate on scroll
  var $pageSections = $('.container section');
  var $navLIs = $('.navbar .navbar-nav li');

  var $rocketDividers = $('.section-title');
  var rocketDividerInitPos = $('.rocket-divider img').first().css('margin-left');
  var rocketDividerEndPos = '0%';

  $(window).on('scroll', function() {
    // Remove highlight when above first div
    if ($(window).scrollTop() < $pageSections.first().offset().top) {
      $navLIs.removeClass('active');
    }

    // Highlight the nav link for the current section
    $pageSections.each(function() {
      if ($(this).isInView()) {
        var id = $(this).attr('id');

        $navLIs.removeClass('active');
        $navLIs.find('a[href="#'+ id +'"]').parent().addClass('active');
      }
    });

    // Animate rocket dividers
    $rocketDividers.each(function() {
      var $rocket = $(this).parent().find('.rocket-divider');
      if ($(this).isInView(0)) {
        // Animate heading
        if (!$rocket.hasClass('animation-finished') &&
            !$rocket.hasClass('animating')) {
          // ...has not already been animated, so animate
          $rocket.addClass('animating');
          $rocket.find('img').animate({ 'margin-left': rocketDividerEndPos },
              1000, function () {
            $rocket.removeClass('animating').addClass('animation-finished');
          });

          // // OLD CODE for flares
          // $sectionTitle.addClass('animating');
          // $sectionTitle.find('.heading-flare-left').myFlickerInOut();
          // $sectionTitle.find('.heading-flare-right').myFlickerInOut(function() {
          //   $sectionTitle.removeClass('animating').addClass('animation-finished');
          // });
        }
      }
      else {
        // NOTE: uncomment the following lines to re-run the rocket animation
        // every time it comes back into view.

        // // No longer in view, so reset
        // animation $rocket.removeClass('animation-finished');
        // $rocket.find('img').css('margin-left', rocketDividerInitPos);
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
 * $.myBounce() bounces the target element by animating the top margin.
 *
 * Parameters:
 *  - dist    distance to bounce
 *  - speed   speed of animation
 *  - delay   ms to delay between bounces
 */
$.fn.myBounce = function(dist, speed, delay) {
  var self = this;
  (function runBounce(){
    self.animate({ marginTop: '-=' + dist, marginBottom: '+=' + dist }, speed, 'easeOutSine')
    .animate({ marginTop: '+=' + dist, marginBottom: '-=' + dist }, speed + 150, 'easeOutBounce', function() {
      $(this).delay(delay);
      runBounce();
    });
  })();
  return this;
};


/**
 * $.myFlickerInOut() randomly flickers the target element by animating its
 * opacity. In the beginning it animates to 100% opacity, and at the end it
 * animates to 0%.
 *
 * Parameters:
 *  - callback    function called when flickering ends
 */
$.fn.myFlickerInOut = function(callback) {
  var numFlickers = 7;    // number of times to flicker in or out
  var inOutSpeed = 400;   // speed of initial and last f0ad4e
  var flickerSpeed = 100; // speed of individual flickers
  var maxOpacity = 100;   // max value for random opacities
  var minOpacity = 50;


  // Choose random opacities to animate through
  var opacities = [];
  while (opacities.length < numFlickers) {
    opacities.push((Math.floor(Math.random() * (maxOpacity - minOpacity + 1))
                    + minOpacity) / 100);
  }

  $(this).animate({ opacity: 1 }, inOutSpeed);

  // Animate through opacities
  opacities.forEach(function(opacity) {
    $(this).animate({ opacity: opacity }, flickerSpeed);
  }, this);

  $(this).animate({ opacity: 0 }, inOutSpeed);

  // Callback when animations are complete
  $(this).promise().done(function() {
    typeof callback === 'function' && callback();
  });
}


/**
 * $.isInView() returns true if the target element is currently displayed in the
 * browser viewport.
 *
 * Parameters:
 *  - offsetTop   How far above the target element should the window scroll be
 *                for the element to be considered "in view"?
 *                (default is 30% of window height)
 */
$.fn.isInView = function(offsetTop) {
  if (typeof offsetTop === 'undefined') {
    // offsetTop defaults to 30% of window height
    offsetTop = -$(window).height() * .4;
  }
  var windowHeight = $(window).height();
  var windowTop = $(window).scrollTop();
  var windowBottom = windowTop + windowHeight;

  var elHeight = $(this).height();
  var elTop = $(this).offset().top;
  var elBottom = elTop + elHeight;

  if ((windowTop <= elBottom) &&
      (windowBottom >= elTop - offsetTop)) {
    return true;
  }
  return false;
}
