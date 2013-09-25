
$(document).ready(function() {
	$('.bxSliderLeft').bxSlider({
									     auto: true,
	                     mode: 'fade',
	                     pause: 2000,
					             pager: false
								     });			

	$('.bxSliderRight').bxSlider({
									     auto: true,
					             controls: false,
					             pager: false
								     });			
});

