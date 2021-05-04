// loading truoc khi vao
document.body.classList.add('over')
window.addEventListener('load',function(){
  setTimeout(function(){
    document.getElementById('loading').classList.add('end');
    // document.getElementById('pentagon').classList.add('active');
  },100);
  // setTimeout(function(){
  //   document.body.classList.remove('over')
  // },3500);
})

//  load popup va overlay 
const popup=document.querySelector('.popup');
const closepopup=document.querySelector('.popup-close');
const closeoverlay=document.querySelector('.overlay');

window.onload = function(){
  setTimeout(function() {
    popup.style.opacity='1';
    closeoverlay.style.opacity='1';
  },500)
  setTimeout(function() {
    popup.style.display='none';
    closeoverlay.style.display='none';
  },6000)
}

closepopup.addEventListener('click', () => {
  popup.style.display='none';
  closeoverlay.style.display='none';
})
closeoverlay.addEventListener('click', () => {
  popup.style.display='none';
  closeoverlay.style.display='none';
})

// slide
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
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
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});

// tab danh sach
// $('.tab').on('click', function (e) {
//   e.preventDefault();
//   $('.tab, .panel').removeClass('active');
//   $(this).add('#' + $(this).attr('id').replace(/\s*tab\s*/, 'panel')).addClass('active');
//   $(this).focus();
// });