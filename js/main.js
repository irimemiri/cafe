
// disable :hover if touch devices
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

$(".slider").slick({
  mobileFirst: true,
  infinite: true,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2800,
  speed: 2500,
  pauseOnFocus: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  centerMode: true,
  centerPadding: '20%',
  responsive: [{
    breakpoint: 1025,
    settings: {
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '0%',
    }
  }]
});

// smooth scroll
$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});
