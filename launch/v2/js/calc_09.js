/**
 * Created by chokingwin on 2016-07-01.
 */

//展架
//X展架&门型展架 的报价json数据组
var BaojiaJson_ZJ_XM = {
    'cailiao':'韩式架(铁杆)',
    'guige':'60*160cm(PVC)',
    'xuangou':'一整套',
    'count':1
};
//易拉宝 的报价json数据组
var BaojiaJson_ZJ_YLB = {
    'cailiao':'普通塑钢',
    'guige':'80*200cm(PVC)',
    'xuangou':'一整套',
    'count':1
};
//拉网展架 的报价json数据组
var BaojiaJson_ZJ_LW = {
    'cailiao':'厚铁杆(优质带螺丝塑料件厚强度大10倍)',
    'geshu':'3',
    'xuangou':'一整套'
};

var allPrice = {
    'type':'X展架&门型展架',
    'allBaoJia':0
};

/*定义三类展架的价格表*/

//X展架&门型展架
var priceTable_ZJ_XM = new Array;
priceTable_ZJ_XM['韩式架(铁杆)'] = new Array;

priceTable_ZJ_XM['韩式架(铁杆)']['60*160cm(PVC)'] = new Array;
priceTable_ZJ_XM['韩式架(铁杆)']['80*180cm(PVC)'] = new Array;

priceTable_ZJ_XM['韩式架(铁杆)']['60*160cm(PVC)']['画幅'] = 28;
priceTable_ZJ_XM['韩式架(铁杆)']['60*160cm(PVC)']['架子'] = 22;
priceTable_ZJ_XM['韩式架(铁杆)']['60*160cm(PVC)']['一整套'] = 45;

priceTable_ZJ_XM['韩式架(铁杆)']['80*180cm(PVC)']['画幅'] = 35;
priceTable_ZJ_XM['韩式架(铁杆)']['80*180cm(PVC)']['架子'] = 25;
priceTable_ZJ_XM['韩式架(铁杆)']['80*180cm(PVC)']['一整套'] = 55;

priceTable_ZJ_XM['美式架(铝合金)'] = new Array;

priceTable_ZJ_XM['美式架(铝合金)']['60*160cm(PVC)'] = new Array;
priceTable_ZJ_XM['美式架(铝合金)']['80*180cm(PVC)'] = new Array;

priceTable_ZJ_XM['美式架(铝合金)']['60*160cm(PVC)']['画幅'] = 28;
priceTable_ZJ_XM['美式架(铝合金)']['60*160cm(PVC)']['架子'] = 32;
priceTable_ZJ_XM['美式架(铝合金)']['60*160cm(PVC)']['一整套'] = 60;

priceTable_ZJ_XM['美式架(铝合金)']['80*180cm(PVC)']['画幅'] = 35;
priceTable_ZJ_XM['美式架(铝合金)']['80*180cm(PVC)']['架子'] = 35;
priceTable_ZJ_XM['美式架(铝合金)']['80*180cm(PVC)']['一整套'] = 70;

priceTable_ZJ_XM['注水式门型展架'] = new Array;

priceTable_ZJ_XM['注水式门型展架']['60*160cm(PVC)'] = new Array;
priceTable_ZJ_XM['注水式门型展架']['80*180cm(PVC)'] = new Array;
priceTable_ZJ_XM['注水式门型展架']['120*200cm(PVC)'] = new Array;

priceTable_ZJ_XM['注水式门型展架']['60*160cm(PVC)']['画幅'] = 28;
priceTable_ZJ_XM['注水式门型展架']['60*160cm(PVC)']['架子'] = 50;
priceTable_ZJ_XM['注水式门型展架']['60*160cm(PVC)']['一整套'] = 78;

priceTable_ZJ_XM['注水式门型展架']['80*180cm(PVC)']['画幅'] = 35;
priceTable_ZJ_XM['注水式门型展架']['80*180cm(PVC)']['架子'] = 55;
priceTable_ZJ_XM['注水式门型展架']['80*180cm(PVC)']['一整套'] = 88;

priceTable_ZJ_XM['注水式门型展架']['120*200cm(PVC)']['画幅'] = 55;
priceTable_ZJ_XM['注水式门型展架']['120*200cm(PVC)']['架子'] = 80;
priceTable_ZJ_XM['注水式门型展架']['120*200cm(PVC)']['一整套'] = 125;


//易拉宝
var priceTable_ZJ_YLB = new Array;
priceTable_ZJ_YLB['普通塑钢'] = new Array;
priceTable_ZJ_YLB['加厚塑钢'] = new Array;
priceTable_ZJ_YLB['铝合金塑钢'] = new Array;

priceTable_ZJ_YLB['普通塑钢']['80*200cm(PVC)'] = new Array;

priceTable_ZJ_YLB['普通塑钢']['80*200cm(PVC)']['画幅'] = 45;
priceTable_ZJ_YLB['普通塑钢']['80*200cm(PVC)']['架子'] = 40;
priceTable_ZJ_YLB['普通塑钢']['80*200cm(PVC)']['一整套'] = 80;

priceTable_ZJ_YLB['加厚塑钢']['80*200cm(PVC)'] = new Array;

priceTable_ZJ_YLB['加厚塑钢']['80*200cm(PVC)']['画幅'] = 45;
priceTable_ZJ_YLB['加厚塑钢']['80*200cm(PVC)']['架子'] = 50;
priceTable_ZJ_YLB['加厚塑钢']['80*200cm(PVC)']['一整套'] = 90;

priceTable_ZJ_YLB['铝合金塑钢']['80*200cm(PVC)'] = new Array;

priceTable_ZJ_YLB['铝合金塑钢']['80*200cm(PVC)']['画幅'] = 45;
priceTable_ZJ_YLB['铝合金塑钢']['80*200cm(PVC)']['架子'] = 60;
priceTable_ZJ_YLB['铝合金塑钢']['80*200cm(PVC)']['一整套'] = 100;


//拉网展架
var priceTable_ZJ_LW = new Array;
priceTable_ZJ_LW['厚铁杆(优质带螺丝塑料件厚强度大10倍)'] = new Array;
priceTable_ZJ_LW['厚铁杆(优质带螺丝塑料件厚强度大10倍)']['画幅'] = 20;
priceTable_ZJ_LW['厚铁杆(优质带螺丝塑料件厚强度大10倍)']['架子'] = 50;

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
        case 'X展架&门型展架':
            $('.itemOne').hide().eq(0).show();
            break;
        case '易拉宝':
            $('.itemOne').hide().eq(1).show();
            break;
        case '拉网展架':
            $('.itemOne').hide().eq(2).show();
            break;
        default :
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
    var name = obj.attributes['name'].value;
    var value = obj.attributes['val'].value;

    switch (type){
        case 'X展架&门型展架':
            BaojiaJson_ZJ_XM[name] = value;
            break;
        case '易拉宝':
            BaojiaJson_ZJ_YLB[name] = value;
            break;
        case '拉网展架':
            BaojiaJson_ZJ_LW[name] = value;
            break;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function inputChange(obj){
    var belong = obj.attributes['belong'].value;
    var name = obj.attributes['name'].value;
    console.log(belong);
    console.log(name);
    switch (belong){
        case 'X展架&门型展架':
            BaojiaJson_ZJ_XM[name] = obj.value;
            break;
        case '易拉宝':
            BaojiaJson_ZJ_YLB[name] = obj.value;
            break;
        case '拉网展架':
            BaojiaJson_ZJ_LW[name] = obj.value;
            break;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    console.log(BaojiaJson_ZJ_XM);
    console.log(BaojiaJson_ZJ_YLB);
    console.log(BaojiaJson_ZJ_LW);

    switch (allPrice.type){
        case 'X展架&门型展架':
            allPrice.allBaoJia = priceTable_ZJ_XM[BaojiaJson_ZJ_XM.cailiao][BaojiaJson_ZJ_XM.guige][BaojiaJson_ZJ_XM.xuangou]* parseInt(BaojiaJson_ZJ_XM.count);
            break;
        case '易拉宝':
            allPrice.allBaoJia = priceTable_ZJ_YLB[BaojiaJson_ZJ_YLB.cailiao][BaojiaJson_ZJ_YLB.guige][BaojiaJson_ZJ_YLB.xuangou]* parseInt(BaojiaJson_ZJ_YLB.count);
            break;
        case '拉网展架':
            if(BaojiaJson_ZJ_LW.xuangou == '一整套')
                allPrice.allBaoJia = (priceTable_ZJ_LW['厚铁杆(优质带螺丝塑料件厚强度大10倍)']['画幅'] + priceTable_ZJ_LW['厚铁杆(优质带螺丝塑料件厚强度大10倍)']['架子'] )*BaojiaJson_ZJ_LW.geshu;
            else if(BaojiaJson_ZJ_LW.xuangou == '画幅')
                allPrice.allBaoJia = priceTable_ZJ_LW['厚铁杆(优质带螺丝塑料件厚强度大10倍)']['画幅'] * BaojiaJson_ZJ_LW.geshu;
            else
                allPrice.allBaoJia = priceTable_ZJ_LW['厚铁杆(优质带螺丝塑料件厚强度大10倍)']['架子'] * BaojiaJson_ZJ_LW.geshu;
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
        '<td>条目</td>';

    switch (allPrice.type){
        case 'X展架&门型展架':
            html += '<td>'+BaojiaJson_ZJ_XM.cailiao+' '+BaojiaJson_ZJ_XM.guige+' '+BaojiaJson_ZJ_XM.xuangou+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>数量</td>'+
                '<td>'+BaojiaJson_ZJ_XM.count+'</td>'+
                '</tr>';
            break;
        case '易拉宝':
            html += '<td>'+BaojiaJson_ZJ_YLB.cailiao+' '+BaojiaJson_ZJ_YLB.guige+' '+BaojiaJson_ZJ_YLB.xuangou+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>数量</td>'+
                '<td>'+BaojiaJson_ZJ_YLB.count+'</td>'+
                '</tr>';
            break;
        case '拉网展架':
            html += '<td>'+BaojiaJson_ZJ_LW.cailiao+' 2.3m * '+BaojiaJson_ZJ_LW.geshu+'格 '+BaojiaJson_ZJ_LW.xuangou+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>数量</td>'+
                '<td>'+BaojiaJson_ZJ_LW.geshu+'</td>'+
                '</tr>';
            break;
    }

    html +=
        '<tr>'+
        '<td colspan="4"><h3 style="float: right;margin-right: 17px;">'+allPrice.allBaoJia+'元</h3><p style="float: right;margin-right: 5px;">总价格 : </p></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'
    ;

    $('.itemResult').append(html);
}
