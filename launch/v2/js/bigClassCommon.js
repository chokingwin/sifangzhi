/**
 * Created by chokingwin on 2016-07-15.
 */


$(function(){

    // ��ȡGET�������parameter
    var GET = urlGet(); //��ȡURL��parameter����
    var parameter = GET['parameter']; //ȡ�� parameter ��ֵ

    //����ѡ����� �� ѡ�� iframe
    $("a").attr('class','');
    console.log(parameter);
    $("a[val='"+parameter+"']").attr('class','selected');

    $("#iframepage").attr('src',parameter+'.html');

});



