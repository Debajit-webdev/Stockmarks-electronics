// HAMBURGER

$(".hamburger").click(function(){
    $(this).toggleClass("icon");
    $(this).toggleClass("ham-position");
    $(".nav-ul").toggleClass("change-ul");
});

//  CART HOVER


$(".cart-1").click(function(){
    if(alert('Monoprice 10145 5.1 - Home Theater Speaker -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-2").click(function(){
    if(alert('Samsung Galaxy S III (S3) -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-3").click(function(){
    if(alert('Photos of Us Collage -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-4").click(function(){
    if(alert('Smart Accessories -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-5").click(function(){
    if(alert('Photos of Us Collage -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-6").click(function(){
    if(alert('Smart Watch -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-7").click(function(){
    if(alert('Wireless Audio Soundbar -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-8").click(function(){
    if(alert('Headphone -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-9").click(function(){
    if(alert('Harman Kardon BDS 870 -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-10").click(function(){
    if(alert('Harman Kardon BDS 870 -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-11").click(function(){
    if(alert('Samsung Galaxy S III (S3) -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-12").click(function(){
    if(alert('Smart Watch -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-13").click(function(){
    if(alert('Samsung UN28H400 28 - inch LED Monitor -- Added To Cart ')){}
    else window.location.reload(); 
});
$(".cart-14").click(function(){
    if(alert('Asus Zenphone 6 -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-15").click(function(){
    if(alert('Logitech Keyboard -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-16").click(function(){
    if(alert('Wireless Audio Soundbar -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-17").click(function(){
    if(alert('Audio Soundbar -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-18").click(function(){
    if(alert('Asus Zenphone 6 -- Added To Cart ')){}
    else window.location.reload(); 
}); 
$(".cart-19").click(function(){
    if(alert('TP-Link Wireless Router -- Added To Cart ')){}
    else window.location.reload(); 
}); 

// PRODUCT CAROUSEL
$(".p-carousel").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplaySpeed: 600,
    responsive:{
        0:{
            items: 1,
        },
        461:{
            items: 2
        },
        586:{
            items: 3
        },
        831:{
            items: 4
        },
        1071:{
            items: 5
        }
    }
});

// COMPANY CAROUSEL
$(".c-carousel").owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    responsive:{
        0:{
            items: 2,
        },
        461:{
            items: 3,
        },
        751:{
            items: 4,
        },
        916:{
            items: 5,            
        }
    }
});