$(document).ready(function() {
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	$('.about__info').on('click', '.info', function() {
        $(this).toggleClass('text_red').siblings('.info__text').slideToggle(0);
        $(this).find('i').toggleClass('fa-minus-circle').toggleClass('fa-plus-circle');
	});
});