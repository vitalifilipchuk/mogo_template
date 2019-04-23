$( document ).ready(function() {
	$(window).scroll(function(){
	  	var header = $('header'), scroll = $(window).scrollTop();

	  	if (scroll >= 100) header.addClass('fixed-header');
	  	else header.removeClass('fixed-header');
	});
    $('.counter').counterUp({
	    time: 1500
	});
	$(".owl-carousel").owlCarousel({
	  	items:1,
	  	loop:true,
	  	dots: false,
	  	center: true,
	  	nav: true,
	  	navText : ['<img src="images/ARROW_RIGHT.png" alt="">','<img src="images/ARROW_RIGHT.png" alt="">']
	});
	$(".mobile-menu-icon").click(function() {
		var x = document.getElementById("myTopnav");
		if (x.className === "navbar") {
			x.className += " mobile-nav";
		} else {
			x.className = "navbar";
		}
	});
});
function myMap() {
	var mapProp= {
	  center:new google.maps.LatLng(51.508742,-0.120850),
	  zoom:8,
	  scrollwheel: false,
	  mapTypeId: 'terrain'
	};
	var map = new google.maps.Map(document.getElementById("googlemap"),mapProp);
}
function myFunction() {
  
}