$(function () {
$('.hover_text').hide();
  $('.img01').hover(
    function() {
    $('.hover01').show();
  },
   function() {
    $('.hover_text').hide();
  });


  $('.hover_text02').hide();
  $('.img02').hover(
    function() {
    $('.hover02').show();
  },
   function() {
    $('.hover_text02').hide();
  });


  $('.hover_text03').hide();
  $('.img03').hover(
    function() {
    $('.hover03').show();
  },
   function() {
    $('.hover_text03').hide();
  });


  $('.hover_text04').hide();
  $('.img04').hover(
    function() {
    $('.hover04').show();
  },
   function() {
    $('.hover_text04').hide();
  });


    $('.hover_text05').hide();
  $('.img05').hover(
    function() {
    $('.hover05').show();
  },
   function() {
    $('.hover_text05').hide();
  });

      $('.hover_text06').hide();
  $('.img06').hover(
    function() {
    $('.hover06').show();
  },
   function() {
    $('.hover_text06').hide();
  });

      $('.hover_text07').hide();
  $('.img07').hover(
    function() {
    $('.hover07').show();
  },
   function() {
    $('.hover_text07').hide();
  });


// // 1st carousel, main
// $('.carousel-main').flickity();
// // 2nd carousel, navigation
// $('.carousel-nav').flickity({
//   asNavFor: '.carousel-main',
//   contain: true,
//   pageDots: false
// });

  // // items
  // $(".item-list").flickity({
  //   cellAlign: 'center',
  //   contain: true,
  //   percentPosition: true,
  //   imagesLoaded: true,
  //   autoPlay: true,
  //   prevNextButtons: false
  // });




  // $('.btn').on('click');

  // $('a[href*="#"]:not([href="#"])').click(function () {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top - 78
  //       }, 500);
  //       return false;
  //     }
  //   }
  // });
  // $('.logo').click(function () {
  //   $('html,body').animate({
  //     scrollTop: 0
  //   }, 1000);
  // });
  // $('.about-scroll').click(function () {
  //   $('html,body').animate({
  //     scrollTop: 400
  //   }, 1000);
  // });






  // // cart button
  // var $cartTotal = 0;
  // $('.counter').hide();
  // $('.button').on('click', function (event) {
  //   event.preventDefault();
  //   $cartTotal++;
  //   $('.counter').text($cartTotal).show();
  //   console.log('.counter');
  // });


  // // email button: '#submit=button ID'
  // $('#submit').on('click', function (event) {
  //   event.preventDefault();
  //   var userEmail = $('input:text').val();
  //   if (userEmail != '') {
  //     var valid = validateEmail(userEmail);
  //     if (valid) {
  //       alert("Thanks for subscribing!");
  //     } else {
  //       alert("Please include an '@' in email address. " + userEmail + " is missing an '@'.");
  //     }
  //   } else {
  //     alert("Please submit a valid email address.");
  //   }
  // });

  // //email
  // function validateEmail(email) {
  //   var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return pattern.test(email);
  // }
});