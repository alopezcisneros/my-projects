$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar-brand').addClass('active');
        } else {
            $('.navbar-brand').removeClass('active');
        }
    });
});
