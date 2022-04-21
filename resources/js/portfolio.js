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

$(document).ready(function() {
	var width = $(window).width();
	collapse(width);
});

$(window).resize(function() {
	var e_width = $(window).width();
	collapse(e_width);

	console.log(e_width);
})



function collapse (width) {
	if ( width < 740 ) {
		$('#logo img').attr('src', 'resources/images/collapse_logo.png');
		$('#menu-p9-1 a').text('Page 1');
		$('#menu-p9-2 a').text('Page 2');
		$('#menu-p9-3 a').text('Page 3');
		$('#menu-p9-4 a').text('Page 4');
		$('#menu-p9-5 a').text('Page 5');
		$('#menu-p9-6 a').text('Page 6');
		$('#menu-p9-7 a').text('Page 7');
		$('#menu-p9-8 a').text('Page 8');
		$('#menu-p9-9 a').text('Page 9');
		$('#nav').css('width', '150px');
		$('div#content').css('margin-left', '150px');
		
	} else {
		
		$('#logo img').attr('src', 'resources/images/logo.png');
		$('#menu-p9-1 a').text('Page 1 : Index');
		$('#menu-p9-2 a').text('Page 2 : Login');
		$('#menu-p9-3 a').text('Page 3 : Join');
		$('#menu-p9-4 a').text('Page 4 : Feed (Calendar & Map)');
		$('#menu-p9-5 a').text('Page 5 : Feed (Post & UserInfo)');
		$('#menu-p9-6 a').text('Page 6 : Create Plan');
		$('#menu-p9-7 a').text('Page 7 : Modify Plan');
		$('#menu-p9-8 a').text('Page 8 : Create Post');
		$('#menu-p9-9 a').text('Page 9 : Message & Admin');
		$('#nav').css('width', '300px');
		$('div#content').css('margin-left', '300px');
	}
}
