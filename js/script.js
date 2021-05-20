// loading truoc khi vao
// document.body.classList.add('over')
// window.addEventListener('load',function(){
//   setTimeout(function(){
//     document.getElementById('loading').classList.add('end');
//     // document.getElementById('pentagon').classList.add('active');
//   },3000);
//   setTimeout(function(){
//     document.body.classList.remove('over')
//   },10000);
// })

// loadinh tim va text trc khi vao
document.body.classList.add('over')
window.addEventListener('load',function(){
  setTimeout(function(){
    document.getElementById('loading').classList.add('end');
    // document.getElementById('pentagon').classList.add('active');
  },3500);
  setTimeout(function(){
    document.body.classList.remove('over')
  },4000);
})

//  load popup va overlay 
// khai bao cac hang o trong js. jquery thi chay luon k can khai
const popup=document.querySelector('.popup');
const closepopup=document.querySelector('.popup-close');
const closeoverlay=document.querySelector('.overlay');

$(document).ready(function(){
// window.onload = function(){
  // setTimeout(function() {
  //   // jquery chay luon  cau lenh ngan gon hon java
  //     $('.popup').show();
  //     $('.overlay').show();
  //     // sau 1s tu hien len popup va overlay
  // },1000);
// chay bang java add style vao cho element. ton time chinh sua lai opacity o trong css
  setTimeout(function() {
    popup.style.opacity='1';
    closeoverlay.style.opacity='1';
  },4000);
  //  setTimeout(function() {
  //   //  jquery chay luon cau lenh ngan gon hon java
  //     $('.popup').hide();
  //     $('.overlay').hide();
  //     // sau 4s tu out het tat ca
  // },4000);
// chay bang java add style vao cho element. ton time chinh sua lai opacity o trong css
  setTimeout(function() {
    popup.style.display='none';
    closeoverlay.style.display='none';
  },7000);
});
$('.popup-close').on('click', function () { 
  // e.preventDefault();
$('.popup').css({
    "display":"none"
},);
$('.overlay').css({
    "display":"none"
},);
});
$('.overlay').on('click', function () { 
  // e.preventDefault();
$('.popup').css({
    "display":"none"
},);
$('.overlay').css({
    "display":"none"
},);
});


// quang cao jquery
$(document).ready(function(){
  setInterval(function() {
    $('.quangcao').addClass('active');
  },30000);
  $('.anquangcao').on('click', function () { 
    $('.quangcao').toggleClass('active');
    // $(this).html("mo quang cao");
    
  });
});


// closepopup.addEventListener('click', () => {
//   popup.style.display='none';
//   closeoverlay.style.display='none';
// })
// closeoverlay.addEventListener('click', () => {
//   popup.style.display='none';
//   closeoverlay.style.display='none';
// })

// slide
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //  clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 4,
    },
  }
});

// tab danh sach
$('.tab').on('click', function (e) {
  e.preventDefault();
  $('.tab, .panel').removeClass('active');
  $(this).add('#' + $(this).attr('id').replace(/\s*tab\s*/, 'panel')).addClass('active');
  $(this).focus();
});

// an hien menu bar voi jquery
$('.menu_icon').on('click', function () { 
  $('.menu_icon').toggleClass('active');
  $('#product-list').toggleClass('active');
});

// tab danh sach cua login jquery
$('.dangky').on('click', function (e){
  $('.dangnhap').removeClass('active');
  $('#content-dangnhap').removeClass('active');
  $(this).addClass('active');
  $('#content-dangky').addClass('active');
})
$('.dangnhap').on('click', function (e){
  $('.dangky').removeClass('active');
  $('#content-dangky').removeClass('active');
  $(this).addClass('active');
  $('#content-dangnhap').addClass('active');
  
})


//  tham khao 
//// scroll to top button javascript
// const btnScrollToTop = document.querySelector('#btnScrollToTop');
// console.log(btnScrollToTop);
// btnScrollToTop.addEventListener("click", function() {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     });
// });

//  scroll to top jquery
$('#pagetop').on('click', function () { 
  $('html').animate({scrollTop: 0}, 400);
  // $("html, body").animate({ scrollTop: 0 }, "slow");
});

// hien menu nav stiky neu lon hon 400
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
      // $('.icontopp').fadeIn(600);
    $('#menu-list').addClass('sticky');

  } else {
      // $('.icontopp').fadeOut(600);
    $('#menu-list').removeClass('sticky');

  }
});


//  hien menu nav stiky khi cuon chuot xuong toi HOT jquery
// $(document).scroll(function() {
//   var vitrihot=$('#hot').offset().top;
//   var vitripage=$(this).scrollTop();
//   if (vitripage>=(vitrihot-150)) {
//     $('#menu-list').addClass('sticky');
//   }
//   else{
//     $('#menu-list').removeClass('sticky');
//   }  
// })

//  hien menu stiky khi cuon chuot qua 300px jquery
// $(document).scroll(function() {
//   var vitrihot=$('#hot').offset().top;
//   var vitripage=$(this).scrollTop();
// if (vitripage>=300) {
//   if (vitripage>=(vitrihot-100)) {
//     $('#menu-list').addClass('sticky');
//   }
//   else{
//     $('#menu-list').removeClass('sticky');
//   }  
// })


//// Tab menu
// const tabs = document.querySelectorAll(".tab-item");
// const panes = document.querySelectorAll(".tab-pane");

// tabs.forEach((tab, index) =>{
//     const pane = panes[index];
//     tab.onclick = function() {
//         document.querySelector(".tab-item.active").classList.remove("active");
//         document.querySelector(".tab-pane.active").classList.remove("active");
//         this.classList.add("active");
//         pane.classList.add("active");
//     }
// });


//// NAVBAR MOBILE
// const hamburger = document.querySelector(".hamburger");
// const navMenuMobile = document.querySelector(".nav-mobile");
// hamburger.addEventListener("click", mobileMenu);
// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenuMobile.classList.toggle("active");
//     document.body.classList.toggle("lock-scroll");
// }
// const navMobileLink = document.querySelectorAll(".nav-mobile__link");
// navMobileLink.forEach(e => e.addEventListener("click", closeMenu));
// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenuMobile.classList.remove("active");
//     document.body.classList.remove("lock-scroll");
// }

$('.dark-mode').on('click', function () { 
  $('body').toggleClass('dark-theme');
  // var icondark=document.getElementById('icon-dark');
  
  if ($('body').hasClass('dark-theme')) {
    // java
    // icondark.src = "./picture/sun1.png"
    // jquery
    $(".header__social").css('background-color','rgba(0, 0, 0, 0.8)');
    $(".login-form").css({'background-color':'rgba(0, 0, 0, 0.8)','color':'#fff'});
    $(".service").css({'background-color':'rgba(0, 0, 0, 0.5)','color':'#000'});
    $(".col1").css({'background-color':'rgba(0, 0, 0, 0.3)'});
    $(".copyright").css({'background-color':'rgba(0, 0, 0, 0.8)','color':'#fff'});
    $("#icon-dark").attr("src","./picture/sun1.png");
  }else{
    // java
    // icondark.src = "./picture/moon1.png"
    // jquery
    $("#icon-dark").attr("src","./picture/moon1.png");
  }
  
});


$(function() {
  $('.col1 a img').hover(function(e) {
    $('.info-content1').show();
    // $(".info-content1").css('display', block);

    //.css('top', e.pageY + moveDown)
    //.css('left', e.pageX + moveLeft)
    //.appendTo('body');
  }, function() {
    $('.info-content1').hide();
  });

  $('.col1 a img').mousemove(function(e) {
    $(".info-content1").css('top', e.pageY-910).css('left', e.pageX-190);
  });

});