
document.addEventListener('DOMContentLoaded', function(){


//нопка перехода____________________________________________________________________//

const downButton = document.querySelector(".start__down-button");

downButton.addEventListener("click", () => {
  const el = document.getElementById('el');
  video.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
})

//слайдер____________________________________________________________________//

  var swiper = new Swiper(".first-swiper", {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        loopedSlides: 7,
      });

  var swiper2 = new Swiper(".second-swiper", {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 7,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 7,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

//открытие большого слайдера____________________________________________________________________//

swiper.controller.control = swiper2;
swiper2.controller.control = swiper;

const sliderBig = document.querySelector(".first-swiper");
const slide = document.getElementsByClassName("smoll-slide");

for (var i = 0; i < slide.length; i++) {
  slide[i].onclick = function(){
    sliderBig.classList.add("open");
  };
}

//видео____________________________________________________________________//

var playButton = document.querySelector(".video__play-button");
var video = document.getElementById("videoPlayer");
// Event listener for the play/pause button
video.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
     playButton.style.display = "block";
  }
});

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.style.display = "none";
  } else {

    video.pause();
     playButton.style.display = "block";
  }
});

//360 анимация___________________________________________________________________//

var rotateStickyBox = document.querySelector(".rotate-image__sticky-box");
rotateImg = document.querySelectorAll(".rotate-image__sticky-box img");

window.addEventListener('scroll', roteteImg)
function roteteImg() {
    var rotateToTop = rotateStickyBox.offsetTop;
    console.log(rotateToTop);
    if(rotateToTop < 14){ rotateImg[0].classList.add("active-img") }else{rotateImg[0].classList.remove("active-img")}
    if(rotateToTop > 14 && rotateToTop <= 28){ rotateImg[1].classList.add("active-img") }else{rotateImg[1].classList.remove("active-img")}
    if(rotateToTop > 28 && rotateToTop <= 42){ rotateImg[2].classList.add("active-img") }else{rotateImg[2].classList.remove("active-img")}
    if(rotateToTop > 42 && rotateToTop <= 56){ rotateImg[3].classList.add("active-img") }else{rotateImg[3].classList.remove("active-img")}
    if(rotateToTop > 56 && rotateToTop <= 70){ rotateImg[4].classList.add("active-img") }else{rotateImg[4].classList.remove("active-img")}
    if(rotateToTop > 70 && rotateToTop <= 84){ rotateImg[5].classList.add("active-img") }else{rotateImg[5].classList.remove("active-img")}
    if(rotateToTop > 84 && rotateToTop <= 98){ rotateImg[6].classList.add("active-img") }else{rotateImg[6].classList.remove("active-img")}
    if(rotateToTop > 98 && rotateToTop <= 112){ rotateImg[7].classList.add("active-img") }else{rotateImg[7].classList.remove("active-img")}
    if(rotateToTop > 112 && rotateToTop <= 126){ rotateImg[8].classList.add("active-img") }else{rotateImg[8].classList.remove("active-img")}
    if(rotateToTop > 126 && rotateToTop <= 140){ rotateImg[9].classList.add("active-img") }else{rotateImg[9].classList.remove("active-img")}
    if(rotateToTop > 140 && rotateToTop <= 154){ rotateImg[10].classList.add("active-img") }else{rotateImg[10].classList.remove("active-img")}
    if(rotateToTop > 154 && rotateToTop <= 168){ rotateImg[11].classList.add("active-img") }else{rotateImg[11].classList.remove("active-img")}
    if(rotateToTop > 168 && rotateToTop <= 182){ rotateImg[12].classList.add("active-img") }else{rotateImg[12].classList.remove("active-img")}
    if(rotateToTop > 182 && rotateToTop <= 196){ rotateImg[13].classList.add("active-img") }else{rotateImg[13].classList.remove("active-img")}
    if(rotateToTop > 196 && rotateToTop <= 210){ rotateImg[14].classList.add("active-img") }else{rotateImg[14].classList.remove("active-img")}
    if(rotateToTop > 210 && rotateToTop <= 224){ rotateImg[15].classList.add("active-img") }else{rotateImg[15].classList.remove("active-img")}
    if(rotateToTop > 224 && rotateToTop <= 238){ rotateImg[16].classList.add("active-img") }else{rotateImg[16].classList.remove("active-img")}
    if(rotateToTop > 238 && rotateToTop <= 252){ rotateImg[17].classList.add("active-img") }else{rotateImg[17].classList.remove("active-img")}
    if(rotateToTop > 252 && rotateToTop <= 266){ rotateImg[18].classList.add("active-img") }else{rotateImg[18].classList.remove("active-img")}
    if(rotateToTop > 266 && rotateToTop <= 280){ rotateImg[19].classList.add("active-img") }else{rotateImg[19].classList.remove("active-img")}
    if(rotateToTop > 280 && rotateToTop <= 294){ rotateImg[20].classList.add("active-img") }else{rotateImg[20].classList.remove("active-img")}
    if(rotateToTop > 294 && rotateToTop <= 308){ rotateImg[21].classList.add("active-img") }else{rotateImg[21].classList.remove("active-img")}
    if(rotateToTop > 308 && rotateToTop <= 322){ rotateImg[22].classList.add("active-img") }else{rotateImg[22].classList.remove("active-img")}
    if(rotateToTop > 322 && rotateToTop <= 336){ rotateImg[23].classList.add("active-img") }else{rotateImg[23].classList.remove("active-img")}
    if(rotateToTop > 336 && rotateToTop <= 350){ rotateImg[24].classList.add("active-img") }else{rotateImg[24].classList.remove("active-img")}
    if(rotateToTop > 350 && rotateToTop <= 364){ rotateImg[25].classList.add("active-img") }else{rotateImg[25].classList.remove("active-img")}
    if(rotateToTop > 364 && rotateToTop <= 378){ rotateImg[26].classList.add("active-img") }else{rotateImg[26].classList.remove("active-img")}
    if(rotateToTop > 378 && rotateToTop <= 392){ rotateImg[27].classList.add("active-img") }else{rotateImg[27].classList.remove("active-img")}
    if(rotateToTop > 392 && rotateToTop <= 406){ rotateImg[28].classList.add("active-img") }else{rotateImg[28].classList.remove("active-img")}
    if(rotateToTop > 406 && rotateToTop <= 420){ rotateImg[29].classList.add("active-img") }else{rotateImg[29].classList.remove("active-img")}
    if(rotateToTop > 420 && rotateToTop <= 434){ rotateImg[30].classList.add("active-img") }else{rotateImg[30].classList.remove("active-img")}
    if(rotateToTop > 434 && rotateToTop <= 448){ rotateImg[31].classList.add("active-img") }else{rotateImg[31].classList.remove("active-img")}
    if(rotateToTop > 448 && rotateToTop <= 462){ rotateImg[32].classList.add("active-img") }else{rotateImg[32].classList.remove("active-img")}
    if(rotateToTop > 462 && rotateToTop <= 476){ rotateImg[33].classList.add("active-img") }else{rotateImg[33].classList.remove("active-img")}
    if(rotateToTop > 476 && rotateToTop <= 490){ rotateImg[34].classList.add("active-img") }else{rotateImg[34].classList.remove("active-img")}
    if(rotateToTop > 490 && rotateToTop <= 504){ rotateImg[35].classList.add("active-img") }else{rotateImg[35].classList.remove("active-img")}
    if(rotateToTop > 504 && rotateToTop <= 518){ rotateImg[36].classList.add("active-img") }else{rotateImg[36].classList.remove("active-img")}
    if(rotateToTop > 518 && rotateToTop <= 532){ rotateImg[37].classList.add("active-img") }else{rotateImg[37].classList.remove("active-img")}
    if(rotateToTop > 532 && rotateToTop <= 546){ rotateImg[38].classList.add("active-img") }else{rotateImg[38].classList.remove("active-img")}
    if(rotateToTop > 546 && rotateToTop){ rotateImg[39].classList.add("active-img") }else{rotateImg[39].classList.remove("active-img")}
  }

//видео360____________________________________________________________________//


var video360 = document.getElementById("video360");
var video360Block = document.querySelector(".rotate360");

window.addEventListener('scroll', Video360Play)

function Video360Play() {
  var Play360Distance = video360Block.getBoundingClientRect().top;
  if(Play360Distance < 100){
    video360.play();
  }
}

//появляющиеся изображения с разрешением____________________________________________________________________//
const rowText = document.querySelector(".row-text__row");

window.addEventListener('scroll', onWindowScroll)
function onWindowScroll() {
  var distanceToTop = rowText.getBoundingClientRect().top;
  if(distanceToTop < 900){
    document.querySelector(".row-text__shadow-block-one").classList.add("active");
  }
  else{
    document.querySelector(".row-text__shadow-block-one").classList.remove("active");
  }
  if(distanceToTop < 700){
    document.querySelector(".row-text__shadow-block-two").classList.add("active");
  }
  else{
    document.querySelector(".row-text__shadow-block-two").classList.remove("active");
  }
    if(distanceToTop < 500){
    document.querySelector(".row-text__shadow-block-three").classList.add("active");
  }
  else{
    document.querySelector(".row-text__shadow-block-three").classList.remove("active");
  }
}
//короткое видео____________________________________________________________________//

var videoSmall = document.getElementById("videoSmall");
var videoSmallBlock = document.getElementById("videoSmallBlock");
let n = 0;

window.addEventListener('scroll', VideoAutoPlay)
function VideoAutoPlay() {
  var PlayDistance = videoSmallBlock.getBoundingClientRect().top;
  if(PlayDistance < 100 && n!=1){
    videoSmall.play();
    n= n + 1;
  }
}


//блок презентация____________________________________________________________________//


const blocksBody = document.querySelector(".presentation__body");
const statickBlock = document.querySelector(".presentation__statick-block");


window.addEventListener('scroll', onWindowScrollTwo)
function onWindowScrollTwo() {
    if(statickBlock.offsetTop < 700){
      document.getElementById("frameless").classList.add("active-block");
    }
    else{
      document.getElementById("frameless").classList.remove("active-block");
    }
    if(statickBlock.offsetTop < 1700 && statickBlock.offsetTop > 700){
      document.getElementById("edges").classList.add("active-block");
    }
    else{
      document.getElementById("edges").classList.remove("active-block");
    }
    if( statickBlock.offsetTop > 1700){
      document.getElementById("ips").classList.add("active-block");
    }
    else{
      document.getElementById("ips").classList.remove("active-block");
    }
}

//блок c выезжающими модулями____________________________________________________________________//

const outgoingBlocks = document.querySelector(".outgoing-blocks");
const shadowImg = document.querySelector(".outgoing-blocks__shadow-img");
const rightBlock = document.querySelector(".outgoing-blocks__right");
const leftBlock = document.querySelector(".outgoing-blocks__left");


window.addEventListener('scroll', shadowBlock)
function shadowBlock() {
  var distanceToBottom =  outgoingBlocks.offsetHeight + outgoingBlocks.getBoundingClientRect().top;
  var clientHight = document.documentElement.clientHeight;
  distanceToBottom = Math.round(distanceToBottom);
  if( clientHight == distanceToBottom || clientHight == distanceToBottom - 1 ||  clientHight == distanceToBottom + 1 ){
    rightBlock.classList.add("active-block");
    leftBlock.classList.add("active-block");
      setTimeout(function(){
        shadowImg.classList.add("active-block");
    }, 2000);
  }
}


})

