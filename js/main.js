// window screen
$(document).ready(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});


// icontop
let Scroll = $("header a").offset().top;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop >= Scroll) {
    
    $("#iconTop").fadeIn(500);
  } else {
    
    $("#iconTop").fadeOut(500);
  }
});

$("#iconTop").click(function () {
  $("body,html").animate({ scrollTop: "0px" }, { queue: true, duration: 2000 });
});

$(".nav-link").click(function () {
  let href = $(this).attr("href");
  $(this).addClass("active");
  $(this).parent().siblings().find(".nav-link").removeClass("active");
  let aboutScroll = $(href).offset().top;
  $("body,html").animate(
    { scrollTop: aboutScroll  },
    { queue: true, duration: 2000 }
  );
});


// owl coursel

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:2000,
  touchDrag:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})

// navlink active
let navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


// scroll recels animation
let sr = ScrollReveal({
  origin:'top',
  distance:'80px',
  duration:2000,
  reset:true,
});


// scroll home
sr.reveal('.home .caption',{
  delay:400,
  origin:'left',
})

sr.reveal('.home img',
{
  delay:400,
  origin:'right',
})

// scroll share
sr.reveal('.Share .caption',
{
  origin:'right',
  delay:500

})
sr.reveal('.Share img',
{
  origin:'left',
  delay:500

})

// Scroll Decoration
sr.reveal('.Decoration h2  ',
{
  origin:'top',
  delay:500

})
sr.reveal('.Decoration  ',
{
  origin:'top',
  delay:500

})

// scroll Accessory
sr.reveal('.Accessory h2  ',
{
  origin:'top',
  delay:500

})
sr.reveal('.Accessory  ',
{
  origin:'top',
  delay:500

})

//scroll contact


sr.reveal('.contact img  ',
{
  origin:'right',
  delay:500

})
sr.reveal('.contact .caption  ',
{
  origin:'left',
  delay:500

})

