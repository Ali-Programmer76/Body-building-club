$(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    navbarSticky();
    $(window).on("scroll",function(){
        navbarSticky();
    });
    new WOW().init();
    $("[data-toggle=tooltip]").tooltip();
});
function navbarSticky(){
    if($(window).scrollTop()){
        $("nav.navbar").addClass("fixed-top");
    }else{
        $("nav.navbar").removeClass("fixed-top");
    }
};