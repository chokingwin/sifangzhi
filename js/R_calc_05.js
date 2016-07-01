/**
 * Created by chokingwin on 2016-07-01.
 */

//名片类--名片
//300克经典铜版纸 的报价json数据组
var BaojiaJson_MP_300TBZ = {
    'caizhi':'彩色不过胶',
    'count':2
};

//特种纸 的报价json数据组
var BaojiaJson_MP_TZZ = {
    'caizhi':'布纹纸',
    'count':2
};

//0.32mm厚度普通pvc 的报价json数据组
var BaojiaJson_MP_PTPVC = {
    'caizhi':'透明(单)',
    'count':2
};

//0.38mm厚度高档pvc 的报价json数据组
var BaojiaJson_MP_GDPVC = {
    'caizhi':'透明细磨砂',
    'count':2
};

var allPrice = {
    'type':'300克经典铜版纸',
    'allBaoJia':0
};

/*定义四类（300克经典铜版纸，特种纸，0.32mm厚度普通pvc,0.38mm厚度高档pvc）名片的价格表*/

//300克经典铜版纸
var priceTable_300TBZ = new Array;

priceTable_300TBZ['彩色不过胶'] = new Array;
priceTable_300TBZ['彩色过哑胶'] = new Array;
priceTable_300TBZ['彩色过光胶'] = new Array;

priceTable_300TBZ['彩色不过胶']['1'] = 12;
priceTable_300TBZ['彩色不过胶']['2'] = 8;
priceTable_300TBZ['彩色不过胶']['5'] = 5;
priceTable_300TBZ['彩色不过胶']['10'] = 5;
priceTable_300TBZ['彩色不过胶']['20'] = 3.5;
priceTable_300TBZ['彩色不过胶']['100'] = 2.5;

priceTable_300TBZ['彩色过哑胶']['1'] = 12;
priceTable_300TBZ['彩色过哑胶']['2'] = 8;
priceTable_300TBZ['彩色过哑胶']['5'] = 5;
priceTable_300TBZ['彩色过哑胶']['10'] = 5;
priceTable_300TBZ['彩色过哑胶']['20'] = 3.5;
priceTable_300TBZ['彩色过哑胶']['100'] = 2.7;

priceTable_300TBZ['彩色过光胶']['5'] = 7;
priceTable_300TBZ['彩色过光胶']['10'] = 6;
priceTable_300TBZ['彩色过光胶']['20'] = 5;
priceTable_300TBZ['彩色过光胶']['100'] = 3.5;

//特种纸
var priceTable_TZZ = new Array;
priceTable_TZZ['布纹纸'] = new Array;
priceTable_TZZ['荷兰纸'] = new Array;
priceTable_TZZ['蛋壳白'] = new Array;
priceTable_TZZ['安格纸'] = new Array;
priceTable_TZZ['冰白纸'] = new Array;
priceTable_TZZ['刚古纸'] = new Array;
priceTable_TZZ['合成纸'] = new Array;

priceTable_TZZ['布纹纸']['2'] = 17;
priceTable_TZZ['布纹纸']['5'] = 14;
priceTable_TZZ['布纹纸']['10'] = 12;

priceTable_TZZ['荷兰纸']['2'] = 17;
priceTable_TZZ['荷兰纸']['5'] = 14;
priceTable_TZZ['荷兰纸']['10'] = 12;

priceTable_TZZ['蛋壳白']['2'] = 17;
priceTable_TZZ['蛋壳白']['5'] = 14;
priceTable_TZZ['蛋壳白']['10'] = 12;

priceTable_TZZ['安格纸']['2'] = 17;
priceTable_TZZ['安格纸']['5'] = 14;
priceTable_TZZ['安格纸']['10'] = 12;

priceTable_TZZ['冰白纸']['2'] = 18;
priceTable_TZZ['冰白纸']['5'] = 16;
priceTable_TZZ['冰白纸']['10'] = 13;

priceTable_TZZ['刚古纸']['2'] = 17;
priceTable_TZZ['刚古纸']['5'] = 15;
priceTable_TZZ['刚古纸']['10'] = 13;

priceTable_TZZ['合成纸']['2'] = 20;
priceTable_TZZ['合成纸']['5'] = 16;
priceTable_TZZ['合成纸']['10'] = 13;

//0.32mm厚度普通pvc
var priceTable_PTPVC = new Array;

priceTable_PTPVC['透明(单)'] = new Array;
priceTable_PTPVC['哑光白(单)'] = new Array;
priceTable_PTPVC['哑光白(双)'] = new Array;

priceTable_PTPVC['透明(单)']['2'] = 15;
priceTable_PTPVC['透明(单)']['5'] = 9;

priceTable_PTPVC['哑光白(单)']['2'] = 17.5;
priceTable_PTPVC['哑光白(单)']['5'] = 10;

priceTable_PTPVC['哑光白(双)']['2'] = 17.5;
priceTable_PTPVC['哑光白(双)']['5'] = 10;

//0.38mm厚度高档pvc
var priceTable_GDPVC = new Array;

priceTable_GDPVC['透明细磨砂'] = new Array;
priceTable_GDPVC['透明粗磨砂'] = new Array;
priceTable_GDPVC['透明白墨单面'] = new Array;
priceTable_GDPVC['透明白墨双面'] = new Array;
priceTable_GDPVC['普通哑面'] = new Array;
priceTable_GDPVC['哑面磨砂'] = new Array;
priceTable_GDPVC['闪银名片哑面'] = new Array;
priceTable_GDPVC['闪银名片光面'] = new Array;
priceTable_GDPVC['超高级名片铂金拉丝'] = new Array;
priceTable_GDPVC['超高级名片流光溢彩'] = new Array;

priceTable_GDPVC['透明细磨砂']['2'] = 45;
priceTable_GDPVC['透明细磨砂']['5'] = 55;

priceTable_GDPVC['透明粗磨砂']['2'] = 70;
priceTable_GDPVC['透明粗磨砂']['4'] = 80;

priceTable_GDPVC['透明白墨单面']['5'] = 90;
priceTable_GDPVC['透明白墨双面']['5'] = 100;
priceTable_GDPVC['普通哑面']['5'] = 70;
priceTable_GDPVC['哑面磨砂']['5'] = 95;
priceTable_GDPVC['闪银名片哑面']['5'] = 75;
priceTable_GDPVC['闪银名片光面']['5'] = 85;
priceTable_GDPVC['超高级名片铂金拉丝']['5'] = 160;
priceTable_GDPVC['超高级名片流光溢彩']['5'] = 160;

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
        case '300克经典铜版纸':
            $('.itemOne').hide().eq(0).show();
            break;
        case '特种纸':
            $('.itemOne').hide().eq(1).show();
            break;
        case '0.32mm厚度普通pvc':
            $('.itemOne').hide().eq(2).show();
            break;
        case '0.38mm厚度高档pvc':
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
        case '300克经典铜版纸':
            BaojiaJson_MP_300TBZ.caizhi = value;
            if(value == '彩色过光胶'){
                $('li').eq(7).hide();
                $('li').eq(8).hide();
                BaojiaJson_MP_300TBZ.count = 5;
                $('li').eq(9).children('a').addClass('selected');

            }else{
                $('li').show();
            }
            break;
        case '特种纸':
            BaojiaJson_MP_TZZ.caizhi = value;
            break;
        case '0.32mm厚度普通pvc':
            BaojiaJson_MP_PTPVC.caizhi = value;
            break;
        case '0.38mm厚度高档pvc':
            BaojiaJson_MP_GDPVC.caizhi = value;
            $('li').eq(38).hide();
            $('li').eq(39).hide();
            $('li').eq(40).hide();
            if(value == '透明细磨砂'){
                $('li').eq(38).show();
                $('li').eq(40).show();
            }else if(value == '透明粗磨砂') {
                $('li').eq(38).show();
                $('li').eq(39).show();
            }else{
                $('li').eq(40).show();
                BaojiaJson_MP_GDPVC.count = 5;
                $('li').eq(40).children('a').addClass('selected');
            }
            break;
    }


    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SCountChange(obj){
    var parobj = obj.parentNode.parentNode; //ul
    var pars = parobj.children;            //li
    console.log(pars.length);
    for (var i = 0; i < pars.length; i++) {
        pars[i].firstChild.className = "";
    }
    obj.className = "selected";
    obj.blur();

    //获取 value

    var value = obj.attributes['val'].value;

    switch (allPrice.type){
        case '300克经典铜版纸':
            BaojiaJson_MP_300TBZ.count = value;
            break;
        case '特种纸':
            BaojiaJson_MP_TZZ.count = value;
            break;
        case '0.32mm厚度普通pvc':
            BaojiaJson_MP_PTPVC.count = value;
            break;
        case '0.38mm厚度高档pvc':
            BaojiaJson_MP_GDPVC.count = value;
            break;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}


function calc(){
    console.log(BaojiaJson_MP_300TBZ);
    console.log(BaojiaJson_MP_TZZ);
    console.log(BaojiaJson_MP_PTPVC);
    console.log(BaojiaJson_MP_GDPVC);

    switch (allPrice.type){
        case '300克经典铜版纸':
            allPrice.allBaoJia = priceTable_300TBZ[BaojiaJson_MP_300TBZ.caizhi][BaojiaJson_MP_300TBZ.count] * parseInt(BaojiaJson_MP_300TBZ.count);
            break;
        case '特种纸':
            allPrice.allBaoJia = priceTable_TZZ[BaojiaJson_MP_TZZ.caizhi][BaojiaJson_MP_TZZ.count] * parseInt(BaojiaJson_MP_TZZ.count);
            break;
        case '0.32mm厚度普通pvc':
            allPrice.allBaoJia = priceTable_PTPVC[BaojiaJson_MP_PTPVC.caizhi][BaojiaJson_MP_PTPVC.count] * parseInt(BaojiaJson_MP_PTPVC.count);
            break;
        case '0.38mm厚度高档pvc':
            allPrice.allBaoJia = priceTable_GDPVC[BaojiaJson_MP_GDPVC.caizhi][BaojiaJson_MP_GDPVC.count] * parseInt(BaojiaJson_MP_GDPVC.count);
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
        '<td>种类</td>'+
        '<td>'+ allPrice.type +'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>材质</td>';
    switch (allPrice.type){
        case '300克经典铜版纸':
            html +=
                '<td>'+BaojiaJson_MP_300TBZ.caizhi+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>数量</td>'+
                '<td>'+BaojiaJson_MP_300TBZ.count+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>计算公式</td>'+
                '<td>'+BaojiaJson_MP_300TBZ.count+' * '+priceTable_300TBZ[BaojiaJson_MP_300TBZ.caizhi][BaojiaJson_MP_300TBZ.count]+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>总价</td>'+
                '<td>'+ allPrice.allBaoJia +'</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>';
            break;
        case '特种纸':
            html +=
                '<td>'+BaojiaJson_MP_TZZ.caizhi+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>数量</td>'+
                '<td>'+BaojiaJson_MP_TZZ.count+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>计算公式</td>'+
                '<td>'+BaojiaJson_MP_TZZ.count+' * '+priceTable_TZZ[BaojiaJson_MP_TZZ.caizhi][BaojiaJson_MP_TZZ.count]+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>总价</td>'+
                '<td>'+ allPrice.allBaoJia +'</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>';
            break;
        case '0.32mm厚度普通pvc':
            html +=
                '<td>'+BaojiaJson_MP_PTPVC.caizhi+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>数量</td>'+
                '<td>'+BaojiaJson_MP_PTPVC.count+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>计算公式</td>'+
                '<td>'+BaojiaJson_MP_PTPVC.count+' * '+priceTable_PTPVC[BaojiaJson_MP_PTPVC.caizhi][BaojiaJson_MP_PTPVC.count]+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>总价</td>'+
                '<td>'+ allPrice.allBaoJia +'</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>';
            break;
        case '0.38mm厚度高档pvc':
            html +=
                '<td>'+BaojiaJson_MP_GDPVC.caizhi+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>数量</td>'+
                '<td>'+BaojiaJson_MP_GDPVC.count+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>计算公式</td>'+
                '<td>'+BaojiaJson_MP_GDPVC.count+' * '+priceTable_GDPVC[BaojiaJson_MP_GDPVC.caizhi][BaojiaJson_MP_GDPVC.count]+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>总价</td>'+
                '<td>'+ allPrice.allBaoJia +'</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>';
            break;
    }


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
