; (function ($) {
    $(function () {

      $("#hamburger").on("click", function () {
        if ($(this).next("#main_menu").hasClass("active")) {
          $(this).next("#main_menu").removeClass("active").slideUp();
          $(this).children("span").removeClass("fa-xmark").addClass("fa-bars");
        } else {
          $("#main_menu").removeClass("active").slideUp();
          $("#hamburger span").removeClass("fa-xmark").addClass("fa-bars");
          $(this).next("#main_menu").addClass("active").slideDown();
          $(this).children("span").removeClass("fa-bars").addClass("fa-xmark");
        }
      });


      $('.testimonial_container').slick({
        dots: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span class="priv_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-left"></i></span>',

        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 1,
              infinite: true,
              dots: true
            }
          },
        ]
      });

      AOS.init({
        duration: 1000
      });

    });
  }(jQuery));


  // Navigation menu ======================

  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      nav.classList.add('active_nav');
    }
    else {
      nav.classList.remove('active_nav');
    }
  })