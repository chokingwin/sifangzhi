/**
 * Created by chokingwin on 2016-07-15.
 */

/*$(".tipTab ul li").mouseenter(function(){
    $(this).siblings().removeClass('DetailsTCur').end().addClass('DetailsTCur');
    $('.tipContent div').hide().eq($(this).index()).show();
});*/

$(".tipTab ul li").mouseenter(function(){
    $(this).siblings().removeClass('DetailsTCur').end().addClass('DetailsTCur');
    //a ±Í«©
    $(this).children().css({
        'border-top': '#6A3906 solid 9px',
        'line-height': '51px'
    });
    $('.tipContent div').hide().eq($(this).index()).show();
});

$(".itemImg").mouseenter(function(){
    $(".img_cover").stop().animate({opacity: "0.5"});
    $(".left_line").stop().animate({opacity: "1",left:"150px"});
    $(".right_line").stop().animate({opacity: "1",right:"150px"});
    $(".img_desc").stop().animate({opacity: "1",top: "0"});
});
$(".itemImg").mouseleave(function(){
    $(".img_cover").stop().animate({opacity: "0"});
    $(".left_line").stop().animate({opacity: "0",left:"100px"});
    $(".right_line").stop().animate({opacity: "0",right:"100px"});
    $(".img_desc").stop().animate({opacity: "0",top: "20px"});
});