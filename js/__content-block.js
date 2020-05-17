$(document).ready(function() {
  $('.content__item-phone-slider').slick({
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev"><div class="slider-left-arrow"></div></button>',
    nextArrow: '<button type="button" class="slick-next"><div class="slider-right-arrow"></div></button>',
  });
  $(".content__item-phone-slider").slick('refresh');
  $('.number__input').mask("+7(999)999-99-99");
});

$("#feedbackform__submit").on('click', function() {
    let name = $('.name__input').val();
    let number = $('.number__input').val();
    if (number != "" && name != "") {
        alert('ok');
        // $.ajax(
        //     "/feedback.php",
        //     {
        //         name: name,
        //         number: number,
        //     },
        //     onAjaxSuccess
        // );
        // function onAjaxSuccess(data)
		// {
		// 	console.log(data)
        // }
    } else {
        alert('ne ok');
    }
});