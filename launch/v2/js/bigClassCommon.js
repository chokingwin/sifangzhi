/**
 * Created by chokingwin on 2016-07-15.
 */


$(function(){

    // 获取GET参数里的parameter
    var GET = urlGet(); //获取URL的parameter参数
    var parameter = GET['parameter']; //取得 parameter 的值

    //重新选择分类 并 选择 iframe
    $("a").attr('class','');
    $("a[val='"+parameter+"']").attr('class','selected');

    if(parameter.substr(0,15) == 'contactCustomer')
        $("#iframepage").attr('src',parameter.substr(0,15)+'.html');
    else
        $("#iframepage").attr('src',parameter+'.html');

});



