/**
 * Created by chokingwin on 2016-07-15.
 */

/*$(".tipTab ul li").mouseenter(function(){
    $(this).siblings().removeClass('DetailsTCur').end().addClass('DetailsTCur');
    $('.tipContent div').hide().eq($(this).index()).show();
});*/

$(".tipTab ul li").mouseenter(function(){
    //$(this).siblings().removeClass('DetailsTCur').end().addClass('DetailsTCur');
    //a 标签
    /*$(this).children().css({
        'border-top': '#6A3906 solid 9px',
        'line-height': '51px'
    });*/
    $('.tipContent div').hide().eq($(this).index()).show();
});

$(".tipTab2 a").mouseenter(function(){
    //$(this).siblings().removeClass('top').end().addClass('top');
    //a 标签
    /*$(this).children().css({
     'border-top': '#6A3906 solid 9px',
     'line-height': '51px'
     });*/
    $(this).children().css()
    $(this).css({'z-index':14});
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

/*动态调整iframe高度*/
function iFrameHeight() {
    var ifm= document.getElementById("iframepage");
    var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;
    if(ifm != null && subWeb != null) {
        ifm.height = subWeb.body.scrollHeight;
        ifm.width = '784';
    }
}

/*切换 iframe*/
function SChangeIframe(obj) {
    var parobj = obj.parentNode.parentNode; //ul
    var pars = parobj.children;            //li
    for (var i = 0; i < pars.length; i++) {
        pars[i].firstChild.className = "";
    }
    obj.className = "selected";
    obj.blur();

    //获取 value
    var value = obj.attributes['val'].value;

    $("#iframepage").attr('src',value+'.html');
}

//菜单重定向
function defLocation(page , parameter){
    window.location.href = page+'?parameter='+parameter;
}

var urlGet = function () {
    var aQuery = window.location.href.split("?");//取得Get参数
    var aGET = new Array();
    if (aQuery.length > 1) {
        var aBuf = aQuery[1].split("&");
        for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
            var aTmp = aBuf[i].split("=");//分离key与Value
            aGET[aTmp[0]] = aTmp[1];
        }
    }
    return aGET;
};
