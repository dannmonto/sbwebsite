
// Custom options for FancyBox 

$.fancybox.defaults.infobar = true; // Displays image count top left
$.fancybox.defaults.toolbar = true; // Displays toolbar (thumbnails, play slideshow..)
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