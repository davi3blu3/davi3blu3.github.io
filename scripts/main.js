$(document).ready(function(){

	$('#change').on('click', function(){
		$('img').unwrap();
		$('h2').hide();
		$('#match').css("height", "500px");
		$('#headline').show('slow');
		$('#tagline').show('slow');
		$('.action-btn').show('slow');
	});


})