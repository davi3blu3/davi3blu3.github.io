$(document).ready(function(){

	// Variables
	var stickyTarget, // scroll point at which header becomes sticky
		matchTarget; // scroll point at which match animation triggered

	// Scroll event listener
	$(window).scroll(function() {

		// updates var if window size changed
		stickyTarget = $('header').position().top;
		matchTarget = $('#btm-spacer').position().top - 185 // adjusted for header height 

		// When bottom of header reaches target point
		if ( $(window).scrollTop() > matchTarget ) {
			// Detect parent element, so unwrap only happens once
			if ( $('.logo').parent().attr('class') === "col-xs-6" ) {
				//test
				console.log("Triggered");
				// trigger Tinder match
				$('.logo').unwrap();
				$('#match').css("height", "100vh");
				$('.caption').hide();
				$('#headline').show('slow');
				$('#tagline').show('slow');
				$('.action-btn').show('slow');
			}
		} else {
			// Revert changes if col div is missing
			if ( $('.logo').parent().attr('class') === "row" ) {

				$('.emma').wrapAll('<div class="col-xs-6">');
				$('.dave').wrapAll('<div class="col-xs-6">');
				$('#match').css("height", "auto");
				$('.caption').show();
				$('#headline').hide();
				$('#tagline').hide();
				$('.action-btn').hide();
			}
		}

	});


	//	console.log( "Window: " + $(window).scrollTop() ); // current scroll position

	//	console.log( "Trigger: " + $('#trigger').position().top ); // target scroll position



})