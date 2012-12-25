$(document).ready(function() {
// scrollable
	//$('#clients .slider__holder').scrollable({
	//	next:'#clients .slider__next',
	//	prev:'#clients .slider__prev',
	//	circular:true
	//});
	$('#progects .slider__holder').scrollable({
		next:'#progects .slider__next',
		prev:'#progects .slider__prev',
		circular:true
	});


	$('#clients .slider__slides').carouFredSel({
		width: '100%',
		auto: false,
		prev: '#clients .slider__prev',
		next: '#clients .slider__next'
	});

});