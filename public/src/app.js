$(document).ready(function() {

  // Navbar active
  $('.nav a').on('click', function(){
    $('.nav').find('.active').removeClass('active');
    $(this).parent().addClass('active');
  });

  // Sticky navigation
  $('.section-about').waypoint(function(direction) {
    if (direction === 'down') {
      $('#navigation').addClass('sticky-navigation');
    } else {
      $('#navigation').removeClass('sticky-navigation');
    }
  }, {
    offset: '50px;'
  });

  // Navbar link path
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Video popup
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  // Animations
  $('.section-about').waypoint(function() {
    $('.about-info-box').addClass('animated fadeIn');
  }, {
    offset: '50%;'
  });

  /*$('.section-portfolio').waypoint(function() {
    $('.portfolio-img').addClass('animated fadeInUp');
  }, {
    offset: '80%;'
  });*/

  $('.section-portfolio').waypoint(function() {
    $('.portfolio-item').addClass('animated fadeInUp');
  }, {
    offset: '80%;'
  });

});
