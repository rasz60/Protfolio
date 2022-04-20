$('.list-group-item a').click(function(e) {
	e.preventDefault();
	
	$(this).parent('.list-group-item').siblings('.list-group-item').removeClass('active');
	$(this).parent('.list-group-item').addClass('active');
	
	location.href = $(this).attr('href');
});


$(document).scroll(function(e) {
	var boxHeight = $('div#p2').height();
	var scrollValue = $(document).scrollTop();
	
	var index = Math.ceil(scrollValue / boxHeight) - 1;

	if ( Number(index) < 0 ) {
		index = 0;
	}
	
	var limit = Number(scrollValue) % (Number(boxHeight) * Number(index));

	
	if ( limit > (Number(boxHeight) * 0.4) ) {
	
		$('#menu-list ul.list-group li.list-group-item').removeClass('active');	
		$('#menu-list ul.list-group li.list-group-item').eq(index).addClass('active');
		
	} else if ( isNaN(limit) ) {
		
		$('#menu-list ul.list-group li.list-group-item').removeClass('active');	
		$('#menu-list ul.list-group li.list-group-item').eq(0).addClass('active');
	}
});