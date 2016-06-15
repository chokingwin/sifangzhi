/**
 * Created by chokingwin on 2016-06-15.
 */

//喷绘
//横幅的报价json数据组
var BaojiaJson_PH_HF = {
    'guige':'70',
    'mishu':0
};
//普通背胶海报的报价json数据组
var BaojiaJson_PH_HB = {
    'guige':'A2',
    'count':0
};
//520灯布的报价json数据组
var BaojiaJson_PH_DB = {
    'chicun':{
        'width':0,
        'height':0
    }
};
//KT板的报价json数据组
var BaojiaJson_PH_KT = {
    'chicun':{
        'width':0,
        'height':0
    }
};

var allPrice = {
    'type':'横幅',
    'allBaoJia':0
};

/*定义四类喷绘的价格表*/

//横幅
var priceTable_HF = new Array;
priceTable_HF['70'] = 5;
priceTable_HF['80'] = 5.5;
priceTable_HF['90'] = 6.5;
priceTable_HF['100'] = 7.5;

//海报
var priceTable_HB = new Array;
priceTable_HB['A2'] = 4.5;
priceTable_HB['A1'] = 8;
priceTable_HB['A0'] = 15;

//灯布
var priceTable_DB = 9;

//KT板
var priceTable_KT = 30;

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

    switch (value){
        case '横幅':
            $('.itemOne').hide().eq(0).show();
            break;
        case '普通背胶海报':
            $('.itemOne').hide().eq(1).show();
            break;
        case '520灯布喷绘':
            $('.itemOne').hide().eq(2).show();
            break;
        case 'KT板':
            $('.itemOne').hide().eq(3).show();
            break;
    }

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

    //获取type 和 name 和 value
    var type = obj.attributes['type'].value;
    var value = obj.attributes['val'].value;

    switch (type){
        case '横幅':
            BaojiaJson_PH_HF.guige = value;
            break;
        case '普通背胶海报':
            BaojiaJson_PH_HB.guige = value;
            break;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function inputChange(obj){
    var belong = obj.attributes['belong'].value;

    if(belong == '横幅'){
        BaojiaJson_PH_HF.mishu = obj.value;
    }else{
        BaojiaJson_PH_HB.count = obj.value;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function inputChange2(obj){
    var belong = obj.attributes['belong'].value;
    var name = obj.attributes['name'].value;

    if(belong == '520灯布喷绘'){
        BaojiaJson_PH_DB['chicun'][name] = obj.value;

    }else{
        BaojiaJson_PH_KT['chicun'][name] = obj.value;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    console.log(BaojiaJson_PH_HF);
    console.log(BaojiaJson_PH_HB);
    console.log(BaojiaJson_PH_DB);
    console.log(BaojiaJson_PH_KT);

    switch (allPrice.type){
        case '横幅':
            allPrice.allBaoJia = priceTable_HF[BaojiaJson_PH_HF.guige]* parseFloat(BaojiaJson_PH_HF.mishu);
            break;
        case '普通背胶海报':
            allPrice.allBaoJia = priceTable_HB[BaojiaJson_PH_HB.guige]* parseInt(BaojiaJson_PH_HB.count);
            break;
        case '520灯布喷绘':
            allPrice.allBaoJia = priceTable_DB * BaojiaJson_PH_DB.chicun.width * BaojiaJson_PH_DB.chicun.height;
            break;
        case 'KT板':
            allPrice.allBaoJia = priceTable_KT * BaojiaJson_PH_KT.chicun.width * BaojiaJson_PH_KT.chicun.height;
            break;
    }
    console.log(allPrice);

    //showPriceTable();
}

function showPriceTable(){
    var fumo = new Array;
    fumo[''] = 0;
    fumo['单面覆光膜'] = 1;
    fumo['双面覆光膜'] = 2;
    fumo['单面覆哑膜'] = 1;
    fumo['双面覆哑膜'] = 2;

    $('.itemResult').html('');

    var html = '<div class="resultTitle">报价结果如下</div>'+
        '<div class="resultTable">'+
        '<table>'+
        '<tbody>'+
        '<tr>'+
        '<td> </td>'+
        '<td>基础部分</td>'+
        '<td>普通工艺</td>'+
        '<td>特殊工艺</td>'+
        '</tr>'+
        '<tr>'+
        '<td>条目</td>'+
        '<td>'+BaojiaJson_XCD.banshi+BaojiaJson_XCD.keshu+'克'+BaojiaJson_XCD.caizhi+BaojiaJson_XCD.chicun+' '+BaojiaJson_XCD.count+'张</td>'+
        '<td>'+BaojiaJson_XCD.zheye+' '+ BaojiaJson_XCD.fumo +'</td>'+
        '<td>'+BaojiaJson_XCD.tsgy+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>价格</td>'+
        '<td>'+allPrice.jichuBaoJia+'</td>'+
        '<td>'+allPrice.ptgyBaoJia.zheye+' '+allPrice.ptgyBaoJia.fumo+'</td>'+
        '<td>'+allPrice.tsgyBaoJia+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>计算公式</td>';
    if(allPrice.ptgyBaoJia.zheye != '' && allPrice.ptgyBaoJia.fumo != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+allPrice.ptgyBaoJia.zheye+' + '+ '0.12 * '+BaojiaJson_XCD.count+' * '+fumo[BaojiaJson_XCD.fumo]+' = '+allPrice.allBaoJia+'</td>';
    }else if(allPrice.ptgyBaoJia.zheye != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+allPrice.ptgyBaoJia.zheye+' = '+allPrice.allBaoJia+'</td>';
    }else if(allPrice.ptgyBaoJia.fumo != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+ '0.12 * '+BaojiaJson_XCD.count+' * '+fumo[BaojiaJson_XCD.fumo]+' = '+allPrice.allBaoJia+'</td>';
    }else {
        html += '<td colspan="3">'+allPrice.jichuBaoJia+'</td>';
    }

    html += '</tr>'+
        '<tr>'+
        '<td colspan="4"><h3 style="float: right">'+allPrice.allBaoJia+'</h3><p style="float: right;margin-right: 10px;">总价格:</p></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'
    ;

    $('.itemResult').append(html);
}


$(".tipTab ul li").mouseenter(function(){
    $(this).siblings().removeClass('DetailsTCur').end().addClass('DetailsTCur');
    $('.tipContent div').hide().eq($(this).index()).show();
});
