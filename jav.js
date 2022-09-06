 var click=document.getElementById('open');
  var show=document.getElementById('show');
  function red(){
    show.style.display="block";
    click.setAttribute('class','fa fa-times fa-3x');
    change.setAttribute('onclick','yellow()');
    click.style.animationName="listo";
    document.documentElement.style.position="fixed";
     document.documentElement.style.width="100%";
     document.querySelector('label').style.color="white";
}
function yellow(){
   show.style.display="none";
    click.setAttribute('class','fa fa-bars-staggered fa-2x');
    change.setAttribute('onclick','red()');
    click.style.animationName="listoo";
    document.documentElement.style.position="";
    document.querySelector('label').style.color="";
}
function scrolla(){
  window.scrollTo(0,0);
}
 var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 8500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });