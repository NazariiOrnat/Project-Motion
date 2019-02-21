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

//$('.owl-carousel').owlCarousel({
////    items: 4,
//    loop:true,
//    margin:0,
//    nav:true,
//    responsive:{
//        0:{
//				items:1
//			},
//        600:{
//				items:2
//			},
//        1000:{
//				items:3
//			},
//        1700:{
//                items:4
//        }
//    }
//})
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







