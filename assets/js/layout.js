// ----- Layout

// ****새로고침
// history.scrollRestoration = "manual";





// const lenis = new Lenis({
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)





// 모바일 사이즈 푸터 프로그레스바 메뉴버튼 클릭

$('#btnMenu').click(function(){
  $(this).toggleClass('on')
  $('.footer .subbar').toggleClass('on');
})







$(document).mousemove(function(e){
	xVal=e.clientX;
	yVal=e.clientY;

	gsap.to('.mouse',{
		x:xVal,
		y:yVal
	})
	gsap.to('.mouse-mid',0.3,{
		x:xVal,
		y:yVal
	})
	gsap.to('.mouse-guide',1,{
		x:xVal,
		y:yVal
	})
})

m1 = gsap.to('.mouse',0.3,{
	scale:1.5,
	border: '1px solid #fff',
	// 'background-color': 'rgb(179, 4, 4)',
	paused:true,
})


$('.sc-work .work-item').hover(function(){
	m1.play()
},function(){
	m1.reverse()
})
$('button').hover(function(){
	m1.play()
},function(){
	m1.reverse()
})
$('a').hover(function(){
	m1.play()
},function(){
	m1.reverse()
})







// ** header time

const clock = document.querySelector("#time");

function getClock(){
  const d = new Date();
  const h = String(d.getHours()).padStart(2,"0");
  const m = String(d.getMinutes()).padStart(2,"0");
  const s = String(d.getSeconds()).padStart(2,"0");

  // if(h >= 12){
  //   state = "pm"
  // }else{
  //   state = "am"
  // }

  state = (h >= 12)?"PM":"AM";

  clock.innerText = `${h} : ${m}  ${state}`;
}

getClock(); //맨처음에 한번 실행
setInterval(getClock, 1000); //1초 주기로 새로실행









// ** header Scroll

// let lastScroll = 0; //재할당 마지막스크롤값 0
// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();


//   if (scroll > lastScroll) {
//     $('.header').addClass('hide') //사라짐
//   } else {
//     $('.header').removeClass('hide')
//   }

//   lastScroll = scroll //


// })




let lastScroll = 0;

// 함수를 정의하여 스크롤 이벤트를 처리하는 부분
function handleScroll() {
  var scroll = $(window).scrollTop();

  if (scroll > lastScroll) {
    $('.header').addClass('hide');
  } else {
    $('.header').removeClass('hide');
  }

  lastScroll = scroll;
}

// 초기 로드 시 및 창 크기가 768 이상인 경우 스크롤 이벤트를 활성화
if (window.innerWidth > 768) {
  $(window).scroll(handleScroll);

  // 창 크기가 변경될 때마다 스크롤 이벤트를 처리
  $(window).resize(function () {
    if (window.innerWidth <= 768) {
      $(window).off('scroll', handleScroll); // 768 이하인 경우 스크롤 이벤트 비활성화
    } else {
      $(window).on('scroll', handleScroll); // 768 이상인 경우 스크롤 이벤트 활성화
    }
  });
}









//  gsap.from('#progressBar',3,{
//     width:'100%',
//   })
  // gsap.fromTo("#progressBar",{
  //   width:'0%',
  // },{
  //   width:'50%',
  // })

  
  
// ** Footer Progress

gsap.to('#progressBar',{
  scrollTrigger:{
    trigger:".wrapper",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    scrub:1,
  },
  width:'100%',
  ease:'none'
})





// **푸터 2023프로젝트 클릭-> 맨위로
$('#topBtn').click(function(e){
  e.preventDefault();
  window.scrollTo({top:0,behavior:"smooth"})
})