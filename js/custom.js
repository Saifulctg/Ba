$(function(){

// ==========header_Fixed code start==========
    var headerOffset = $('#header').offset().top

 $(window).on('scroll', function(){
    var scrollSize = $(window).scrollTop()

    if(scrollSize > headerOffset){
         $('#header').addClass('header_fixed')
    } else{
        $('#header').removeClass('header_fixed')
    }
 })

 // ==========Back To Top button code start==========

 
 $(window).on('scroll', function(){
  var scrollSize = $(window).scrollTop()
     
    if( scrollSize > 800){
        $('.backToTop').fadeIn(500)
    } else{
        $('.backToTop').fadeOut(500)
    }
 })
 $('.backToTop').on('click', function(){
    $('html,body').animate({
        scrollTop:0
    },'1000');
 })

 // ==========scroll smooth code start==========

$("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

   // ==========venobox code start==========

  $('.venobox').venobox({
      spinner:'wave',
      spinColor:'#081845',
      arrowsColor:'#fff',
      closeColor:'red',
      numeratio:true,
      numerationColor:'#fff',
      infinigall:true,
      bgcolor:'#fff',
      border:'5px',
      overlayColor:'rgba(31, 124, 187, 0.9)',
      titleColor:'#ebe315'
  }); 

 // ==========wow code start for animate==========

  new WOW().init();

// ==========slick slider code start==========

  $('.section_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-chevron-left section_arrow_left"></i>',
    nextArrow:'<i class="fas fa-chevron-right section_arrow_right"></i>',
    dots: true,
    dotsClass:'banner_dots',
  });

  // ==========slick slider code start==========

  $('#banner').slick({
    prevArrow:'<i class="fas fa-chevron-left banner_arrow_left"></i>',
    nextArrow:'<i class="fas fa-chevron-right banner_arrow_right"></i>',
  });

  // ==========preloder code start==========

  setTimeout(function(){
    $('body').addClass('loaded');
  }, 2000);




  // ==========counter code start==========

  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });


})
    
