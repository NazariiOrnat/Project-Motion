$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

  $(".slide-one").owlCarousel({
		items: 4,
        loop:true,
        margin:0,
        nav:true,
//		autoplay:true, //Автозапуск слайдера
//		smartSpeed:1000, //Время движения слайда
//		autoplayTimeout:2000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			},
            1700:{
                items:4
            }
		}
	});


$(".owl-prev > span").empty();
$(".owl-next > span").empty();
// $("ul:empty").text("!");

	$(".slide-two").owlCarousel({
        items: 1,
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
//		autoplay:true, //Автозапуск слайдера
//		smartSpeed:1000, //Время движения слайда
//		autoplayTimeout:1000, //Время смены слайда
	});

var owl = $('.slide-two');
owl.owlCarousel();
// Go to the next item
$('.twitter__owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.twitter__owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

//Top Slider
//
//
//
//
//
//
//
//
function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});









