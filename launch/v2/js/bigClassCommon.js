/**
 * Created by chokingwin on 2016-07-15.
 */


$(function(){

    // ��ȡGET�������parameter
    var GET = urlGet(); //��ȡURL��parameter����
    var parameter = GET['parameter']; //ȡ�� parameter ��ֵ

    //����ѡ����� �� ѡ�� iframe
    $("a").attr('class','');
    $("a[val='"+parameter+"']").attr('class','selected');

    if(parameter.substr(0,15) == 'contactCustomer')
        $("#iframepage").attr('src',parameter.substr(0,15)+'.html');
    else
        $("#iframepage").attr('src',parameter+'.html');

});



