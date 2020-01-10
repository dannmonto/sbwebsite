// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// } 



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// } 

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.nav').fadeOut();
    } else {
      $('.nav').fadeIn();
    }
  });

