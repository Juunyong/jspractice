$(function () {
    $('.btn1').on('click', function () {
        $('.box1').toggle('slow');
    });
});

$(function () {
    $('.btn2').mouseenter(function () {
        $('.box2').hide();
    });
});

$(function () {
    $('.btn2').mouseleave(function () {
        $('.box2').show();
    });
});
