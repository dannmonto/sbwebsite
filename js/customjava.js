
// ========== Custom options for FancyBox ========= 

// Displays image count top left
$.fancybox.defaults.infobar = true; 

// Displays toolbar (thumbnails, play slideshow..)
$.fancybox.defaults.toolbar = true; 

// Remove focus (selection around images) after clicking
  $.fancybox.defaults.backFocus =false;

// Choose which buttons for toolbar
$.fancybox.defaults.buttons =  [
    //"zoom",
    //"share",
    //"slideShow",
    "fullScreen",
    //"download",
    //"thumbs",
    "close"
  ];
// Simple protect images (right click)
  $.fancybox.defaults.protect = true;

  // No zoom on tap
  $.fancybox.defaults.clickContent = false;

  // On mobile, click outside to close slide
  $.fancybox.defaults.mobile = {
    clickSlide: 'close',
    clickOutside: 'close',
    clickContent: false
  }

// ========== Custom ========= 
