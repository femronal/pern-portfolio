$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // ! UP SLIDER
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    // ! MENU NAVBAR TOGGLER

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });

    // ! TYPING ANIMATOR
    var typed = new Typed(".typing", {
        strings: ["Full-Stack Engineer", "Cyber-Security Expert"],
        typeSpeed: 110,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Full-Stack Engineer", "Cyber-Security Expert"],
        typeSpeed: 110,
        backSpeed: 60,
        loop: true
    })


    // ! OWL CAROUSEL SCRIPT
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
});