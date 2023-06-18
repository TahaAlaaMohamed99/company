
$('#slider-Projects').slick({
	arrows:true,
        infinite:true,
        slidesToShow:1,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
       dots: true,
       prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
	customPaging : function(slider, i) {
       /* ADDING CUSTOM PAGING
        Example
        return  return '<li>Something you want to insert</li>';
*/
    },
});
$('#slider-New').slick({
	arrows:true,
        infinite:true,
        slidesToShow:1,
        accessibility:true,
        autoplay:false,
        autoplaySpeed:3000,
       dots: true,
       prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
	customPaging : function(slider, i) {
       /* ADDING CUSTOM PAGING
        Example
        return  return '<li>Something you want to insert</li>';
*/
    },
});
$('#slider-News').slick({
	arrows:true,
        infinite:true,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
       dots: true,
        slidesToShow:4,
        slidesToScroll:1,

  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow:3,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
	customPaging : function(slider, i) {
       /* ADDING CUSTOM PAGING
        Example
        return  return '<li>Something you want to insert</li>';
*/
    },
});
$('.slider-Transportation').slick({
	arrows:true,
        infinite:true,
        slidesToShow:1,
        /*
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
        */
	prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
	customPaging : function(slider, i) {
       /* ADDING CUSTOM PAGING
        Example
        return  return '<li>Something you want to insert</li>';
*/
    },
});
$('.slider-trans').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.nav-trans',
});
$('.nav-trans').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-trans',
  focusOnSelect: true,
  prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
$('.slider-Build').slick({
	arrows:true,
        infinite:true,
        slidesToShow:1,
        dots: true,
	prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
	customPaging : function(slider, i) {
       /* ADDING CUSTOM PAGING
        Example
        return  return '<li>Something you want to insert</li>';
*/
    },
});
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
$('.slider-PROJE').slick({
	arrows:true,
        infinite:true,
        slidesToShow:1,
        dots: true,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
	prevArrow:false,
  nextArrow:false,
	customPaging : function(slider, i) {
       /* ADDING CUSTOM PAGING
        Example
        return  return '<li>Something you want to insert</li>';
*/
    },
});

$('.slider').slick({
	arrows:true,
        infinite:true,
        slidesToShow:6,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
	prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
	customPaging : function(slider, i) {
       /* ADDING CUSTOM PAGING
        Example
        return  return '<li>Something you want to insert</li>';
*/
    },
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 5,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('color-change');
    } else {
      $('.navbar').removeClass('color-change');
    }
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.nav-links').addClass('change');
    } else {
      $('.nav-links').removeClass('change');
    }
  });
  const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggleopen");
});
$(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active-link");
      $(this).addClass("active-link");
  });
  });
