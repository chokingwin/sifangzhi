/**
 * Created by chokingwin on 2016-06-17.
 */

//纪念册 的报价json数据组
var BaojiaJson_JNC = {
    'caizhi':'蝴蝶装白卡',
    'guige':'A4',
    'pishu':'20',
    'count':'1'
};
var allPrice = {
    'jichuBaoJia':0,
    'allBaoJia':0
};

/*定义 纪念册 的价格表*/

var priceTable_JNC = new Array;

priceTable_JNC['蝴蝶装白卡'] =  new Array;

priceTable_JNC['蝴蝶装白卡']['20'] = new Array;
priceTable_JNC['蝴蝶装白卡']['24'] = new Array;
priceTable_JNC['蝴蝶装白卡']['28'] = new Array;
priceTable_JNC['蝴蝶装白卡']['32'] = new Array;

priceTable_JNC['蝴蝶装白卡']['20']['10'] = 44;
priceTable_JNC['蝴蝶装白卡']['20']['20'] = 39;
priceTable_JNC['蝴蝶装白卡']['20']['21'] = 35;

priceTable_JNC['蝴蝶装白卡']['24']['10'] = 46;
priceTable_JNC['蝴蝶装白卡']['24']['20'] = 41;
priceTable_JNC['蝴蝶装白卡']['24']['21'] = 37;

priceTable_JNC['蝴蝶装白卡']['28']['10'] = 49;
priceTable_JNC['蝴蝶装白卡']['28']['20'] = 43;
priceTable_JNC['蝴蝶装白卡']['28']['21'] = 39;

priceTable_JNC['蝴蝶装白卡']['32']['10'] = 51;
priceTable_JNC['蝴蝶装白卡']['32']['20'] = 45;
priceTable_JNC['蝴蝶装白卡']['32']['21'] = 41;


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

    /**************针对QQ上架按钮链接做的特殊处理*******开始**********************/
    var qqLinkStyleDefault = {
        'border': 'none',
        'display': 'none'
    };
    var qqLinkStyleShow = {
        'border': 'none',
        'display': 'block'
    };
    //找出tbody中的所有tr
    var trObj = obj.parentNode.parentNode.parentNode.parentNode.parentNode.children;

    if(name=='caizhi' && value!='蝴蝶装白卡'){
        $('#qqLink_01').css(qqLinkStyleShow);
        //隐藏下面的所有tr
        for(var i=1;i<trObj.length;i++){
            trObj[i].style.display = 'none';
        }
        $('.calcBtn').css('display','none');
    }else if(name=='guige' && value!='A4'){
        $('#qqLink_02').css(qqLinkStyleShow);
        //隐藏下面的所有tr
        for(var i=2;i<trObj.length;i++){
            trObj[i].style.display = 'none';
        }
        $('.calcBtn').css('display','none');
    }else{
        //var currentQQLink_02 = $('#qqLink_02').css('display');
        //var currentQQLink_01 = $('#qqLink_01').css('display');
        //if( currentQQLink_02 !='block' && currentQQLink_01!='block') {
        $('#qqLink_02').css(qqLinkStyleDefault);
        //}
        $('#qqLink_01').css(qqLinkStyleDefault);
        $('.calcBtn').css('display','block');

        for(var i=0;i<trObj.length;i++){
            trObj[i].style.display = 'table-row';
        }
    }
    /**************针对QQ上架按钮链接做的特殊处理********结束*********************/

    //更新报价json数组中对应的name项
    BaojiaJson_JNC[name] = value;
    //console.log(BaojiaJson_JNC);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SItemChange(obj){
    var name = obj.attributes['name'].value;
    BaojiaJson_JNC[name] = obj.value;
    //console.log(BaojiaJson_JNC);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function inputChange(obj){
    BaojiaJson_JNC.count = obj.value;
}

function calc(){
    console.log(BaojiaJson_JNC);
    if( BaojiaJson_JNC.count>=1 && BaojiaJson_JNC.count<=10 ){
        allPrice.jichuBaoJia = priceTable_JNC['蝴蝶装白卡'][BaojiaJson_JNC.pishu]['10'] * BaojiaJson_JNC.count;
    }else if( BaojiaJson_JNC.count>=11 && BaojiaJson_JNC.count<=20 ){
        allPrice.jichuBaoJia = priceTable_JNC['蝴蝶装白卡'][BaojiaJson_JNC.pishu]['20'] * BaojiaJson_JNC.count;
    }else{
        allPrice.jichuBaoJia = priceTable_JNC['蝴蝶装白卡'][BaojiaJson_JNC.pishu]['21'] * BaojiaJson_JNC.count;
    }


    //计算总报价
    allPrice.allBaoJia = allPrice.jichuBaoJia;
    console.log(allPrice);
    console.log('总价格：'+allPrice.allBaoJia);

    showPriceTable();
}

function showPriceTable(){

    $('.itemResult').html('');

    var html = '<div class="resultTitle">报价结果如下</div>'+
        '<div class="resultTable">'+
        '<table>'+
        '<tbody>'+
        '<tr>'+
        '<td>材质</td>'+
        '<td>'+ BaojiaJson_JNC.caizhi +'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>规格</td>'+
        '<td>'+BaojiaJson_JNC.guige+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>P数</td>'+
        '<td>'+BaojiaJson_JNC.pishu+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>数量</td>'+
        '<td>'+BaojiaJson_JNC.count+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>计算公式</td>';

    if( BaojiaJson_JNC.count>=1 && BaojiaJson_JNC.count<=10 ){
        html += '<td>'+BaojiaJson_JNC.count+' * '+priceTable_JNC['蝴蝶装白卡'][BaojiaJson_JNC.pishu]['10']+'</td>';
    }else if( BaojiaJson_JNC.count>=11 && BaojiaJson_JNC.count<=20 ){
        html += '<td>'+BaojiaJson_JNC.count+' * '+priceTable_JNC['蝴蝶装白卡'][BaojiaJson_JNC.pishu]['20']+'</td>';
    }else{
        html += '<td>'+BaojiaJson_JNC.count+' * '+priceTable_JNC['蝴蝶装白卡'][BaojiaJson_JNC.pishu]['21']+'</td>';
    }

    html+=
        '</tr>'+
        '<tr>'+
        '<td>总价</td>'+
        '<td>'+ allPrice.allBaoJia +'</td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>';

    $('.itemResult').append(html);
}


$(".tipTab ul li").mouseenter(function(){
    $(this).siblings().removeClass('DetailsTCur').end().addClass('DetailsTCur');
    $('.tipContent div').hide().eq($(this).index()).show();
});
