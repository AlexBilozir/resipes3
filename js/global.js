$(document).ready(function() {
 
  $("#slider").owlCarousel({
 
      navigation : false,
      slideSpeed : 100,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true,
      pagination: false,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});