$(document).ready(function () {
  // team carousel
  $(".product_main_group1 .owl-carousel").owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      324: {
        items: 2,
      },
      800: {
        items: 5,
      },
      1100: {
        items: 5,
      },
    },
  });

  $(".product_main_group2 .owl-carousel").owlCarousel({
    loop: true,
    margin: 1,
    autoplay: false,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      324: {
        items: 2,
      },
      600: {
        items: 3
      },
    },
  });

  $(".product_main_group3 .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      324: {
        items: 2,
      },
      400: {
        items: 3,
      },
      550: {
        items: 4,
      },
      680: {
        items: 5,
      },
      1100: {
        items: 7,
      }
    },
  });

  $(".group3_premium .owl-carousel").owlCarousel({
    loop: true,
    margin: 80,
    autoplay: false,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      324: {
        items: 2,
      },
      400: {
        items: 3,
      },
      680: {
        items: 5,
      },
      1000: {
        items: 6,
      }
    },
  });

});


