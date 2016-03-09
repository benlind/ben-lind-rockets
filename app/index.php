<!doctype html>
<html lang="">
<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ben Lind | Professional Web Design</title>

  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <!-- Place favicon.ico in the root directory -->

  <!-- build:css styles/vendor.css -->
  <!-- bower:css -->
  <!-- endbower -->
  <!-- endbuild -->

  <!-- build:css styles/main.css -->
  <link rel="stylesheet" href="/.tmp/styles/main.css">
  <!-- endbuild -->

</head>
<body>
  <!--[if lt IE 10]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a href="#" class="navbar-brand">Ben Lind</a>
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse" id="navbar-main">

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </div>
  </div>

  <section class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-lg-offset-1 col-sm-6">
          <h1 class="script countdown"><img src="images/countdown.png" alt="" /><em>Blast off!</em></h1>
          <p>
            I create <span class="text-danger">powerful</span>, <span class="text-warning">beautiful</span><br>
            websites with a <em class="text-primary"><strong>kick.</strong></em>
          </p>
        </div>
        <div class="col-lg-7 col-sm-6 rocket-image">
          <img class="img-responsive" src="images/rocket-illustration@2x.png" alt="" />
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <section>
      <h1 class="text-center section-title">My Skills</h1>
      <div class="row vertical-center">
        <div class="col-sm-5">
          <h2 class="relative"><img class="icon-bg-left" src="images/icon-bg-wordpress.png" alt="" />Blog Design</h2>
          <p><img class="img-responsive visible-xs-block" src="images/skills/wordpress.png" alt="Wordpress" /></p>
          <p>If you want a killer blog, there is no better blog manager than <a href="http://wordpress.org/">Wordpress</a>. Wordpress is fast and flexible, and it makes managing posts, comments, and pages amazingly easy.</p>
          <p>Also, if you have something special in mind for your blog, it offers a wide array of plugins that you can choose from to extend its capabilities.</p>
        </div>
        <div class="col-sm-7 hidden-xs">
          <img class="img-responsive" src="images/skills/wordpress.png" alt="Wordpress" />
        </div>
      </div>

      <div class="row vertical-center buffer-top">
        <div class="col-sm-7 hidden-xs">
          <img class="img-responsive" src="images/skills/cms.png" alt="Drupal" />
        </div>
        <div class="col-sm-5">
          <h2 class="relative"><img class="icon-bg-right" src="images/icon-bg-drupal.png" alt="" />Easily Update Content</h2>
          <p><img class="img-responsive visible-xs-block" src="images/skills/cms.png" alt="Drupal" /></p>
          <p>The easiest way to keep your website's content up to date is to use a Content Management System (CMS). A CMS lets you control the content of your site's pages by logging into an admin panel.</p>
          <p>I have experience working with many popular Content Management Systems, including <a href="http://wordpress.org/">Wordpress</a>, <a href="https://drupal.org/">Drupal</a>, and <a href="http://www.silverstripe.org/">SilverStripe</a>, and I will recommend a CMS to fit your website's specific needs.</p>
        </div>
      </div>

      <div class="panel panel-default buffer-top">
        <div class="panel-body">
          <div class="row">
            <div class="col-sm-4">
              <h2><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>E-Commerce</h2>
              <p>With the power of e-Commerce platforms like <a href="http://www.x-cart.com/">X-Cart</a>, <a href="http://www.shopify.com/">Shopify</a>, and <a href="https://www.woothemes.com/woocommerce/">WooCommerce</a>, you can easily sell and manage products on your website. Whether you want a full-fledged web store or just a simple Buy with PayPal button, there is a platform to suit your needs.</p>
            </div>

            <div class="col-sm-4">
              <h2><span class="glyphicon glyphicon-resize-full" aria-hidden="true"></span>Responsive Design</h2>
              <p>I use responsive design techniques to ensure that your website to looks good on every device. Whether visitors view your site on their phone, tablet, or desktop computer, they will see a polished, bulletproof design that maintains the feel of your brand.</p>
            </div>

            <div class="col-sm-4">
              <h2><span class="glyphicon glyphicon-text-size" aria-hidden="true"></span>Custom Fonts</span></h2>
              <p>The web used to be a place where you could only use a handful of fonts to style your text. However, with the advent of services like <a href="https://typekit.com/">Typekit</a> and <a href="http://www.google.com/fonts">Google Fonts</a>, you can now choose from hundreds of beautiful fonts to personalize your type.</p>
            </div>
          </div>
        </div> <!-- /panel-body -->
      </div> <!-- /panel -->
    </section>

    <section>
      <h1 class="text-center section-title">Contact Me</h1>
    </section>
  </div>

  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
  <script>
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='https://www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-XXXXX-X');ga('send','pageview');
  </script>

  <!-- build:js scripts/vendor.js -->
  <!-- bower:js -->
  <script src="/bower_components/jquery/dist/jquery.js"></script>
  <!-- endbower -->
  <!-- endbuild -->

  <!-- build:js scripts/plugins.js -->
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js"></script>
  <script src="/bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js"></script>
  <!-- endbuild -->

  <!-- build:js scripts/main.js -->
  <script src="scripts/main.js"></script>
  <!-- endbuild -->
</body>
</html>
