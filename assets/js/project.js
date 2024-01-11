// ** 프로젝트 - Image Slider 1
intro = gsap.timeline({})
intro.from('.sc-work .work-list [data-scroll-work=""]',{
  delay:0.2,
  opacity:0,
  stagger:0.1,
  yPercent:20,
  scrub:1,
},'a')


// intro = gsap.timeline({})
// gsap.from('.sc-work .work-list .work-item [data-scroll-content00=""]',{
//   scrollTrigger:{
//       trigger:'.sc-work .work-list',
//       start:"0% 0%",
//       end:"35% 35%",
//       // markers:true,
//       scrub:1,
//     },
//   yPercent:30,
//   opacity:0,
//   delay:0.2,
//   stagger:0.1
// },'a')
// intro = gsap.timeline({})
// gsap.from('.sc-work .work-list .work-item [data-scroll-content01=""]',{
//   scrollTrigger:{
//       trigger:'.sc-work .work-list',
//       start:"35% 0%",
//       end:"70% 35%",
//       // markers:true,
//       scrub:1,
//     },
//   yPercent:30,
//   opacity:0,
//   delay:0.2,
//   stagger:0.1
// },'a')




// ** 프로젝트 - Title Text
intro = gsap.timeline({})
intro.from('.sc-title [data-scroll-text] span',{
  delay:0.4,
  yPercent:100,
  opacity:0,
  stagger:0.1,
})


// ** 프로젝트 - Title Text Tag

Draggable.create("#Proj-Tag01", {type:"x,y",
	bounds:".sc-title .headline",
	edgeResistance:0.5,
	throwProps:true
});
Draggable.create("#Proj-Tag02", {type:"x,y",
	bounds:".sc-title .headline",
	edgeResistance:0.5,
	throwProps:true
});



// ** 프로젝트 탭 버튼

$('.sc-work .btn-area button').click(function(){

  tabname=$(this).data('tab'); 

  $(this).addClass('on').siblings().removeClass('on');

  $('.work-item').removeClass('on')
  $(tabname).addClass('on');
})

$('.sc-work .btn-area button:first-child').trigger('click')










// ** 어바웃미 - 이력서 

intro = gsap.timeline({})

gsap.from('.sc-resume .swiper-slide > span' ,{
  scrollTrigger:{
      trigger:'.sc-resume',
      start:"00% 20%",
      end:"100% 100%",
      // markers:true,
      // scrub:0,
    },
    yPercent:40,
    opacity:0,
    delay:0.2,
    stagger:0.1
},'a')




// ** 어바웃미 - 이력서 좌우스와이퍼

var swiper = new Swiper("#mySwiper", {
  slidesPerView:'auto',
  spaceBetween: 40,
  freeMode: true,
  
});



// var ww = $(window).width();
// if (ww > 768) {
//   mySwiper = new Swiper(".sc-resume .descktop .swiper", {
//     slidesPerView:'auto',
//     spaceBetween: 40,
//     freeMode: true,
 
//   });
// } else if (ww <= 768) {
//   // swiper 호출 안함
// }






// var ww = $(window).width();
// var mySwiper = undefined;

// function initSwiper() {

//   if (ww > 768 && mySwiper == undefined) {
//     mySwiper = new Swiper("#mySwiper", {
//       slidesPerView:'auto',
//       spaceBetween: 40,
//       freeMode: true,
//     });
//   } else if (ww <= 768 && mySwiper != undefined) {
//     mySwiper.destroy();
//     mySwiper = undefined;
//   }
// }

// initSwiper();

// $(window).on('resize', function () {
//   ww = $(window).width();
//   initSwiper();
// });





// ** 어바웃미 - 자기소개서
intro = gsap.timeline({})
gsap.to('.sc-about .desktop .about-main .about-left img',{
  scrollTrigger:{
      trigger:'.sc-about .desktop .about-main .about-right',
      start:"00% 0%",
      end:"100% 0%",
      // markers:true,
      scrub:1,
    },
  yPercent:0,
  opacity:1,
  delay:0.2,
  stagger:0.1,
  scale: 1.3,
  
},'a')
