$(function() {
  $('.menu__choise').flexslider({
    namespace: "slider-",
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    directionNav: false,
    slideshow: false,
    selector: ".slides > .menu__items > li",
    itemWidth: 100,
    itemMargin: 20,
    asNavFor: '#content',
  });
  
  $('#content').flexslider({
    namespace: "slider-",
    animation: "slide",
    controlNav: false,
    directionNav: false,
    animationLoop: false,
    slideshow: false,
    pauseOnHover: true,
    sync: ".menu__choise"
  });
});
