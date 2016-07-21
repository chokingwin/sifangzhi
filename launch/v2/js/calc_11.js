/**
 * Created by chokingwin on 2016-07-18.
 */

//设计 的报价json数据组
var BaojiaJson_SJ_CZ = {
    'createLevel':'中级设计师'
};
var BaojiaJson_SJ_HZ = {
    'createLevel':'中级设计师'
};
var BaojiaJson_SJ_GG = {
    'createLevel':'中级设计师'
};
var BaojiaJson_SJ_HC = {
    'createLevel':'中级设计师'
};
var BaojiaJson_SJ_MP = {
    'createLevel':'中级设计师'
};
var allPrice = {
    'type':'传单/折页类',
    'allBaoJia':0
};

/*定义各类设计的价格表*/

//传单/折页类
var priceTable_SJ_CZ = new Array;
priceTable_SJ_CZ['中级设计师'] = 55;
priceTable_SJ_CZ['高级设计师'] = 80;
priceTable_SJ_CZ['设计总监'] = 150;

//海报/展架类
var priceTable_SJ_HZ = new Array;
priceTable_SJ_HZ['中级设计师'] = 80;
priceTable_SJ_HZ['高级设计师'] = 110;
priceTable_SJ_HZ['设计总监'] = 250;

//大型户外广告类
var priceTable_SJ_GG = new Array;
priceTable_SJ_GG['高级设计师'] = 250;
priceTable_SJ_GG['设计总监'] = 400;

//画册/菜单类
var priceTable_SJ_HC = new Array;
priceTable_SJ_HC['中级设计师'] = 25;
priceTable_SJ_HC['高级设计师'] = 40;
priceTable_SJ_HC['设计总监'] = 80;

//名片类
var priceTable_SJ_MP = new Array;
priceTable_SJ_MP['中级设计师'] = 25;
priceTable_SJ_MP['高级设计师'] = 40;
priceTable_SJ_MP['设计总监'] = 100;

/*切换 itemOne*/
function SItemClick(obj) {
    var parobj = obj.parentNode.parentNode; //ul
    var pars = parobj.children;            //li
    for (var i = 0; i < pars.length; i++) {
        pars[i].firstChild.className = "";
    }
    obj.className = "selected";
    obj.blur();

    //获取name 和 value
    var name = obj.attributes['name'].value;
    var value = obj.attributes['val'].value;

    if(value == '其他设计')
        $('.itemOne').hide().eq(1).show();
    else
        $('.itemOne').hide().eq(0).show();

    allPrice.type = value;

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SItemOneClick(obj){
    var parobj = obj.parentNode.parentNode; //ul
    var pars = parobj.children;            //li
    for (var i = 0; i < pars.length; i++) {
        pars[i].firstChild.className = "";
    }
    obj.className = "selected";
    obj.blur();

    //获取name 和 value
    var name = obj.attributes['name'].value;
    var value = obj.attributes['val'].value;

    switch (allPrice.type){
        case '传单/折页类':
            BaojiaJson_SJ_CZ.createLevel = value;
            break;
        case '海报/展架类':
            BaojiaJson_SJ_HZ.createLevel = value;
            break;
        case '大型户外广告类':
            BaojiaJson_SJ_GG.createLevel = value;
            break;
        case '画册/菜单类':
            BaojiaJson_SJ_XC.createLevel = value;
            break;
        case '名片类':
            BaojiaJson_SJ_MP.createLevel = value;
            break;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){

    switch (allPrice.type){
        case '传单/折页类':
            allPrice.allBaoJia = priceTable_SJ_CZ[BaojiaJson_SJ_CZ.createLevel];
            break;
        case '海报/展架类':
            allPrice.allBaoJia = priceTable_SJ_HZ[BaojiaJson_SJ_HZ.createLevel];
            break;
        case '大型户外广告类':
            allPrice.allBaoJia = priceTable_SJ_GG[BaojiaJson_SJ_GG.createLevel];
            break;
        case '画册/菜单类':
            allPrice.allBaoJia = priceTable_SJ_HC[BaojiaJson_SJ_HC.createLevel];
            break;
        case '名片类':
            allPrice.allBaoJia = priceTable_SJ_MP[BaojiaJson_SJ_MP.createLevel];
            break;
    }
    console.log(allPrice);

    showPriceTable();
}

function showPriceTable(){

    $('.itemResult').html('');

    var html = '<div class="resultTitle">报价结果如下</div>'+
        '<div class="resultTable">'+
        '<table>'+
        '<tbody>'+
        '<tr>'+
        '<td colspan="5">'+ allPrice.type +'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>报价/元</td><td>修改次数</td><td>设计时间</td><td>方案数量</td><td>创作等级</td>'
        '</tr>';

    html +=
        '<tr>'+
        '<td>'+allPrice.allBaoJia+'/元</td>'+
        '<td>5次</td>';


    switch (allPrice.type){
        case '传单/折页类':
            html +=
                '<td>2</td>'+
                '<td>1</td>'+
                '<td>'+BaojiaJson_SJ_CZ.createLevel+'</td>'
            ;
            break;
        case '海报/展架类':
            html +=
                '<td>3</td>'+
                '<td>1</td>'+
                '<td>'+BaojiaJson_SJ_HZ.createLevel+'</td>'
            ;
            break;
        case '大型户外广告类':
            html +=
                '<td>4</td>'+
                '<td>1</td>'+
                '<td>'+BaojiaJson_SJ_GG.createLevel+'</td>'
            ;
            break;
        case '画册/菜单类':
            html +=
                '<td>不定</td>'+
                '<td>1</td>'+
                '<td>'+BaojiaJson_SJ_HC.createLevel+'</td>'
            ;
            break;
        case '名片类':
            html +=
                '<td>2</td>'+
                '<td>1</td>'+
                '<td>'+BaojiaJson_SJ_MP.createLevel+'</td>'
            ;
            break;
    }

    html +=
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'
    ;

    $('.itemResult').append(html);
    $('.confirm').show();
}

function confirmOrder(){
    var html =
        '<div class="resultTable">'+
        '<table>'+
        '<tbody>'+
        '<tr>'+
        '<td>姓名</td>'+
        '<td>黄先生</td>'+
        '</tr>'+
        '<tr>'+
        '<td>电话</td>'+
        '<td>15622288780</td>'+
        '</tr>'+
        '<tr>'+
        '<td>QQ</td>'+
        '<td>2227936863</td>'+
        '</tr>'+
        '<tr>'+
        '<td>微信</td>'+
        '<td>Herry0509</td>'+
        '</tr>'+
        '<tr>'+
        '<td>邮箱</td>'+
        '<td>2227936863@qq.com</td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'
    ;

    $('.confirmResult').append(html);
}
