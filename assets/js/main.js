$(document).ready(function () {
    $(".top-nav").click(function(){
      $('.container-full').css('display', 'none');
      $('.overlay-nav').css('display', 'block');
    });
    $('.on-nav').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');
    });


    $('.on-nav-avatar').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');

      $(".body-avatar").css('display', 'flex');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');

      $('.container-full').css('background-image', "url('assets/images/avatar-bg.png')");
      $('.container-full').css('background-size', "cover");

      $(".nav-private").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $('.nav-avatar').addClass("nav-active");  
    });

    $('.on-nav-private').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');

      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'flex');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');

      $('.container-full').css('background-image', "url('assets/images/private-bg.png')");
      $('.container-full').css('background-size', "cover");

      $(".nav-avatar").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $('.nav-private').addClass("nav-active");  
    });


    $('.on-nav-space').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');

      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'flex');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');

      $('.container-full').css('background-image', "url('assets/images/space-bg.png')");
      $('.container-full').css('background-size', "cover");

      $(".nav-avatar").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $('.nav-space').addClass("nav-active");  
    });

    $('.on-nav-physical').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');

      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'flex');
      $(".body-luxury").css('display', 'none');

      $('.container-full').css('background-image', "url('assets/images/physical-bg.png')");
      $('.container-full').css('background-size', "cover");

      $(".nav-avatar").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $('.nav-physical').addClass("nav-active");  
    });

    $('.on-nav-luxury').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');

      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'flex');

      $('.container-full').css('background-image', "url('assets/images/luxury-bg.png')");
      $('.container-full').css('background-size', "cover");

      $(".nav-avatar").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $('.nav-luxury').addClass("nav-active");  
    });

    $('.mobile-logo').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');
      $(".body-avatar").css('display', 'flex');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-full').css('background-image', "url('assets/images/avatar-bg.png')");
      $('.container-full').css('background-size', "cover");
      
      $(".nav-private").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $('.nav-avatar').addClass("nav-active");  
    });

    $('.logo').click(function(){
      $('.container-full').css('display', 'inherit');
      $('.overlay-nav').css('display', 'none');
      $(".body-avatar").css('display', 'flex');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-full').css('background-image', "url('assets/images/avatar-bg.png')");
      $('.container-full').css('background-size', "cover");
      
      $(".nav-private").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $('.nav-avatar').addClass("nav-active");  
    });
    
    $(".nav-avatar").click(function () {
      $(".body-avatar").css('display', 'flex');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-full').css('background-image', "url('assets/images/avatar-bg.png')");
      $('.container-full').css('background-size', "cover");
      
      $(".nav-private").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");  
    });

    $(".nav-private").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'flex');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-full').css('background-image', "url('assets/images/private-bg.png')");
      $('.container-full').css('background-size', "cover");

      $(".nav-avatar").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");   

    });

    $(".nav-space").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'flex');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-full').css('background-image', "url('assets/images/space-bg.png')");
      $('.container-full').css('background-size', "cover");
      $(".nav-avatar").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");  
      
    });

    $(".nav-physical").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'flex');
      $(".body-luxury").css('display', 'none');
      $('.container-full').css('background-image', "url('assets/images/physical-bg.png')");
      $('.container-full').css('background-size', "cover");
      $(".nav-avatar").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");  
    });

    $(".nav-luxury").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'flex');
      $('.container-full').css('background-image', "url('assets/images/luxury-bg.png')");
      $('.container-full').css('background-size', "cover");
      $(".nav-avatar").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(this).addClass("nav-active");  
    });
  });
