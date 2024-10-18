$(function () {
    $('.btn1')
        .on('mouseenter', function () {
            $('.box1').slideDown(1000);
        })
        .on('mouseleave', function () {
            $('.box1').slideUp(1000);
        });
});

/*$(function () {
    $('.btn1').on('click', function () {
        $('.box1').toggle('slow');
    });
});
/*
$(function () {
    $('.btn2').mouseenter(function () {
        $('.box2').hide();
    });
});

$(function () {
    $('.btn2').mouseleave(function () {
        $('.box2').show();
    });
});*/

$(function () {
    $('.btn2').mouseenter(function () {
        $('.box2').slideToggle(5000);
    });
});

$(function () {
    $('.btn3').click(function () {
        $('.box3').animate(
            {
                width: '+=150px',
                left: 100,
                top: 100,
            },
            1000
        );
    });
});
