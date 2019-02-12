$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        1700:{
            items:4
        }
    }
})
$(".owl-prev > span").empty();
$(".owl-next > span").empty();
// $("ul:empty").text("!");