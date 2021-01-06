var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($) {
  "use strict";
  $(document).ready(function(){
		  $(".cb-top-search-btn").click(function(){
				  $('.cb-top-search-form').toggle();
		  });
		  $('.cb-slider ul').bxSlider({
				  auto: cleanblogVars.slider_options.auto,
				  mode: cleanblogVars.slider_options.mode,
				  speed: cleanblogVars.slider_options.speed,
				  pause: cleanblogVars.slider_options.pause, 
				  easing:'ease-in-out',
				  autoControls: false,
				  controls: cleanblogVars.slider_options.controls,
				  pager: cleanblogVars.slider_options.controls,		
		  });
		  $('.cb-metro-slider ul').bxSlider({
				  auto: cleanblogVars.slider_options.auto,
				  mode: cleanblogVars.slider_options.mode,
				  speed: cleanblogVars.slider_options.speed,
				  pause: cleanblogVars.slider_options.pause, 
				  easing:'ease-in-out',
				  autoControls: false,
				  controls: cleanblogVars.slider_options.controls,
				  pager: cleanblogVars.slider_options.controls,		
		  });
		  if ((cleanblogVars.slider_options.type == "carousel") || (cleanblogVars.slider_options.type == "carousel2") || (cleanblogVars.slider_options.type == "modern_carousel")){
		  $('.owl-carousel.cb-carousel').owlCarousel({
				  loop:true,
				  margin:10,
				  nav:cleanblogVars.slider_options.controls,
				  autoplay: cleanblogVars.slider_options.auto,
				  autoplayTimeout: cleanblogVars.slider_options.pause,
				  smartSpeed: cleanblogVars.slider_options.speed, 
				  navText: [' ',' '],
				  responsive:{
					  0:{
						  items:1
					  },
					  600:{
						  items:2
					  },
					  992:{
						  items:3
					  }
				  }
			  });
			  $('.owl-carousel.cb-modern-carousel').owlCarousel({
				  loop:true,
				  margin:10,
				  center: true,
				  items:3,
				  nav:cleanblogVars.slider_options.controls,
				  autoplay: cleanblogVars.slider_options.auto,
				  autoplayTimeout: cleanblogVars.slider_options.pause,
				  smartSpeed: cleanblogVars.slider_options.speed, 
				  navText: [' ',' '],
				  responsive:{
					  0:{
						  items:1
					  },
					  600:{
						  items:2
					  },
					  992:{
						  items:2
					  }
				  }
			  });
		  $('.owl-carousel.cb-carousel2').owlCarousel({
				  loop:true,
				  margin:10,
				  nav:cleanblogVars.slider_options.controls,
				  autoplay: cleanblogVars.slider_options.auto,
				  autoplayTimeout: cleanblogVars.slider_options.pause,
				  smartSpeed: cleanblogVars.slider_options.speed, 
				  navText: [' ',' '],
				  responsive:{
					  0:{
						  items:1
					  },
					  600:{
						  items:2
					  }
				  }
			  });
		  }
		  $('.widget-nav-tabs a').click(function (e) {
				  e.preventDefault();
				  $(this).tab('show');
		  });
		  $('.cb-menu-toggle').click( function(e) {
				  e.preventDefault();
				  $(this).toggleClass('cb-open-menu');
				  $('body').toggleClass('mobile-menu-open');
				  $('.cb-nav ul.menu').toggleClass('cb-show-menu');
		  });
		  
  });
  })(jQuery);

}
/*
     FILE ARCHIVED ON 15:16:15 Jan 22, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:59:35 Jan 06, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 576.394
  exclusion.robots: 0.142
  exclusion.robots.policy: 0.129
  RedisCDXSource: 9.119
  esindex: 0.014
  LoadShardBlock: 543.659 (3)
  PetaboxLoader3.datanode: 624.775 (5)
  CDXLines.iter: 20.047 (3)
  PetaboxLoader3.resolve: 111.595 (3)
  load_resource: 292.012 (2)
*/