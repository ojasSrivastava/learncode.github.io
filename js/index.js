
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.item').addClass("stickyitem")
        }
        else {
            $('.navbar').removeClass("sticky");
            $('.item').removeClass("stickyitem");
        }
    });
});

$(document).ready(function () {
    $('.burgur').click(function () {
        $('.navbar').toggleClass('resnavbar')
        $('.item').toggleClass('resitem')
        $('.navlist').toggleClass('resnavlist')
        $('.btnyt').toggleClass('resbtnyt')
    })
    $('.item').click(function () {
        $('.navbar').removeClass('resnavbar')
        $('.item').removeClass('resitem')
        $('.navlist').removeClass('resnavlist')
        $('.btnyt').removeClass('resbtnyt')
    })
})