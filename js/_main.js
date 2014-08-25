// Off Canvas Sliding

$(document).ready(function(){
	$('.js-menu-trigger').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu').toggleClass('is-visible');
		$('.js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead').toggleClass('slide');
		$('#page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
	$('.js-menu-screen').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu').toggleClass('is-visible');
		$('.js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead').toggleClass('slide');
		$('#page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

WebFontConfig = {
custom: {
    families: ['Nanum Gothic'],
    urls: ['http://fonts.googleapis.com/earlyaccess/nanumgothic.css']
}
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();

$('a').on('touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});
