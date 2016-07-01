/**
 * Created by chokingwin on 2016-07-01.
 */


//卡片的报价json数据组
var BaojiaJson_KP = {
    'type':'普通会员卡/优惠卡',
    'count':'500',
    'tsgy':''
};
var allPrice = {
    'jichuBaoJia':0,
    'tsgyBaoJia':'',
    'allBaoJia':0
};

/*定义PVC卡片的价格表*/

var priceTable_KP = new Array;

priceTable_KP['500'] = 140;
priceTable_KP['3000'] = 0.18;
priceTable_KP['5000'] = 0.17;
priceTable_KP['10000'] = 0.155;

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

    if(name=='type' && value!='普通会员卡/优惠卡'){
        $('#qqLink_01').css(qqLinkStyleShow);
        //隐藏下面的所有tr
        for(var i=1;i<trObj.length;i++){
            trObj[i].style.display = 'none';
        }
        $('.calcBtn').css('display','none');
    }else{
        $('#qqLink_01').css(qqLinkStyleDefault);
        $('.calcBtn').css('display','block');

        for(var i=0;i<trObj.length;i++){
            trObj[i].style.display = 'table-row';
        }
    }
    /**************针对QQ上架按钮链接做的特殊处理********结束*********************/

    //更新报价json数组中对应的name项
    BaojiaJson_KP['type'] = value;

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SCountChange(obj){
    $('a').eq(3).removeClass('selected');
    $('a').eq(4).removeClass('selected');
    $('a').eq(5).removeClass('selected');
    $('a').eq(6).removeClass('selected');

    obj.className = "selected";
    obj.blur();

    var value = obj.attributes['val'].value;

    if(value != '500'){
        $('.detailNumSpan').show();
        $('.detailNum').show();
        $('.detailNum').val(value);
        BaojiaJson_KP.count = value;
    }else{
        $('.detailNumSpan').show();
        $('.detailNum').hide();
        BaojiaJson_KP.count = '500';
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}
function inputChange(obj){
    BaojiaJson_KP.count = obj.value;
}

function selectTsgy(obj){
    var name = obj.attributes['name'].value;
    if(obj.className == 'selected'){
        obj.className = "";
        obj.style.backgroundColor = '#FFFFFF';
        BaojiaJson_KP['tsgy'] = '';
        allPrice.tsgyBaoJia = '';
    }else {
        obj.className = "selected";
        obj.style.backgroundColor = '#693906';
        BaojiaJson_KP['tsgy'] = '磁条/烫金等需联系人工报价';
        allPrice.tsgyBaoJia = '这部分需要人工额外报价';
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc() {
    console.log(BaojiaJson_KP);

    if (BaojiaJson_KP.count == '500') {
        allPrice.jichuBaoJia = priceTable_KP['500'];
    }else if(BaojiaJson_KP.count >= 1000 && BaojiaJson_KP.count <= 3000){
        allPrice.jichuBaoJia = priceTable_KP['3000'] * parseInt(BaojiaJson_KP.count);
    }else if(BaojiaJson_KP.count > 3000 && BaojiaJson_KP.count <= 5000) {
        allPrice.jichuBaoJia = priceTable_KP['5000'] * parseInt(BaojiaJson_KP.count);
    }else if(BaojiaJson_KP.count > 5000 && BaojiaJson_KP.count <= 10000) {
        allPrice.jichuBaoJia = priceTable_KP['10000'] * parseInt(BaojiaJson_KP.count);
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
        '<td> </td>'+
        '<td>基础部分</td>'+
        '<td>特殊工艺</td>'+
        '</tr>'+
        '<tr>'+
        '<td>条目</td>'+
        '<td>'+BaojiaJson_KP.type+'</td>'+
        '<td>'+BaojiaJson_KP.tsgy+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>价格</td>'+
        '<td>'+allPrice.jichuBaoJia+'</td>'+
        '<td>'+allPrice.tsgyBaoJia+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td colspan="4"><h3 style="float: right;margin-right: 17px;">'+allPrice.allBaoJia+'元</h3><p style="float: right;margin-right: 5px;">总价格 : </p></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'
    ;

    $('.itemResult').append(html);
}


$(".tipTab ul li").mouseenter(function(){
    $(this).siblings().removeClass('DetailsTCur').end().addClass('DetailsTCur');
    //a 标签
    $(this).children().css({
        'border-top': '#6A3906 solid 9px',
        'line-height': '51px'
    });
    $('.tipContent div').hide().eq($(this).index()).show();
});
