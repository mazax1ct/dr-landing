function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

var targetElement = document.querySelector(".main-menu");

$(document).ready(function() {
  //открытие/закрытие главного меню
  $(".js-menu-opener").click(function() {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("is-open");
    $(".main-menu-block").toggleClass("is-open");
    if($(this).hasClass('is-active')) {
      bodyScrollLock.disableBodyScroll(targetElement);
    } else {
      bodyScrollLock.enableBodyScroll(targetElement);
    }
    return false;
  });

  // дропдаун у главного меню
  if(isTouchDevice()===true) {
    $('.root-link').click(function(){
      if(!$(this).parent().hasClass('is-hover')){
        var sub = $(this).next('.main-menu__dropdown');
        if(sub.is(':visible')){
          $('.main-menu__dropdown').removeClass('open');
          return true;
        } else {
          $('.main-menu__dropdown').removeClass('open');
          sub.addClass('open');
          return false;
        }
      }
    });
  } else {
    $('.root').hover(
      function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeIn(200);
      }, function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeOut(200);
      }
    );
  }

  //аккордеон
  $('.js-accordion-title').click(function() {
    $('.accordion__body[data-target=' + $(this).attr('data-link') + ']').slideToggle();
    return false;
  });

  if($('body').width() < 768){
    if($('.js-list-5').length) {
      $('.js-list-5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
        mobileFirst: true
      });
    }
  }

  //слайдер игр в блоке выбора конфигурации по fps
  $('.js-fps-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button class="slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__svg" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
    nextArrow: '<button class="slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__svg" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

  $(".js-game").click(function() {
    $(".js-game").removeClass('is-active');
    $(this).addClass('is-active');
  });
});
