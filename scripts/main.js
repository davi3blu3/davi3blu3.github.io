$(document).ready(function(){

	// Variables
	var targetScroll = $('#btm-spacer').position().top - 185 // - 185 (header height) 
	console.log(targetScroll);
	// Scroll event listener
	$(window).scroll(function() {
		// When bottom of header reaches target point
		if ( $(window).scrollTop() > targetScroll ) {
			// Detect parent element, so unwrap only happens once
			if ( $('img').parent().attr('class') === "col-xs-6" ) {
				// trigger Tinder match
				$('img').unwrap();
				$('#match').css("height", "100vh");
				$('h2').hide();
				$('#headline').show('slow');
				$('#tagline').show('slow');
				$('.action-btn').show('slow');
			}
		} else {
			// Revert changes if col div is missing
			if ( $('img').parent().attr('class') === "row" ) {

				$('.emma').wrapAll('<div class="col-xs-6">');
				$('.dave').wrapAll('<div class="col-xs-6">');
				$('#match').css("height", "auto");
				$('h2').show();
				$('#headline').hide();
				$('#tagline').hide();
				$('.action-btn').hide();
			}
		}

	});


	//	console.log( "Window: " + $(window).scrollTop() ); // current scroll position

	//	console.log( "Trigger: " + $('#trigger').position().top ); // target scroll position



})