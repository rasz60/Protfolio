$('.list-group-item a').click(function(e) {
	e.preventDefault();
	
	$(this).parent('.list-group-item').siblings('.list-group-item').removeClass('active');
	$(this).parent('.list-group-item').addClass('active');
	
	location.href = $(this).attr('href');
});


$(document).scroll(function() {
	var boxHeight = $('div#p2').height();
	var scrollValue = $(document).scrollTop();
	var s_width = $(window).width();
	
	scrolling(boxHeight, scrollValue, s_width);
});

$(document).ready(function() {
	var width = $(window).width();
	
	if( width < 1000 ) {
		alert('작은 화면에서는 정상적으로 작동하지 않을 수 있습니다.\n많은 양해 부탁드리겠습니다.');
	}

	collapse(width);
});

$(window).resize(function() {
	var e_width = $(window).width();
	collapse(e_width);
	
})

function collapse (width) {
	
	if ( width < 1000 ) {
		$('#logo img').attr('src', 'resources/images/collapse_logo.png');
		$('#menu-p9-1 a').text('Pages');
		$('#menu-p9-2').addClass('d-none');
		$('#menu-p9-3').addClass('d-none');
		$('#menu-p9-4').addClass('d-none');
		$('#menu-p9-5').addClass('d-none');
		$('#menu-p9-6').addClass('d-none');
		$('#menu-p9-7').addClass('d-none');
		$('#menu-p9-8').addClass('d-none');
		$('#menu-p9-9').addClass('d-none');
		$('#nav').css('width', '150px');
		$('.list-group-item').css('padding', '0.4rem 1.25rem');
		$('div#content').css('margin-left', '150px');
		
	} else {
		
		$('#logo img').attr('src', 'resources/images/logo.png');
		$('#menu-p9-1 a').text('Page 1 : Index');
		$('#menu-p9-2').removeClass('d-none');
		$('#menu-p9-3').removeClass('d-none');
		$('#menu-p9-4').removeClass('d-none');
		$('#menu-p9-5').removeClass('d-none');
		$('#menu-p9-6').removeClass('d-none');
		$('#menu-p9-7').removeClass('d-none');
		$('#menu-p9-8').removeClass('d-none');
		$('#menu-p9-9').removeClass('d-none');
		$('#nav').css('width', '300px');
		$('.list-group-item').css('padding', '0.75rem 1.25rem');
		$('div#content').css('margin-left', '300px');
	}
}

function scrolling(boxHeight, scrollValue , s_width) {

	var index = Math.ceil(scrollValue / boxHeight) - 1;
	
	if ( Number(index) < 0 ) {
		index = 0;
	} 
	
	if ( s_width < 1000 && Number(index) > 7) {
		index = 7;
	}

	var limit = Number(scrollValue) % (Number(boxHeight) * Number(index));

	if ( Number(limit) > Number(boxHeight)*0.4 ) {
		
		$('#menu-list ul.list-group li.list-group-item').removeClass('active');	
		$('#menu-list ul.list-group li.list-group-item').eq(index).addClass('active');
			
	} else if ( isNaN(limit) ) {
			
		$('#menu-list ul.list-group li.list-group-item').removeClass('active');	
		$('#menu-list ul.list-group li.list-group-item').eq(0).addClass('active');
			
	}
}
