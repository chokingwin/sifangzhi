/**
 * Created by chokingwin on 2016-067-01.
 */

//亚克力水晶字
//亚克力水晶字 的报价json数据组
var BaojiaJson_YKL = {
    'houdu':'5+3',
    'chicun':5,
    'count':4
};
var allPrice = {
    'allBaoJia':0
};

/*定义 亚克力水晶字 的价格表*/

//横幅
var priceTable_YKL = new Array;
priceTable_YKL['5'] = new Array;
priceTable_YKL['11'] = new Array;
priceTable_YKL['20'] = new Array;
priceTable_YKL['26'] = new Array;
priceTable_YKL['31'] = new Array;
priceTable_YKL['36'] = new Array;
priceTable_YKL['41'] = new Array;
priceTable_YKL['51'] = new Array;
priceTable_YKL['61'] = new Array;
priceTable_YKL['71'] = new Array;

priceTable_YKL['5']['5+3'] = 0.7;
priceTable_YKL['5']['8+3'] = 0.8;
priceTable_YKL['5']['10+3'] = 1;
priceTable_YKL['5']['12+3'] = 1.2;
priceTable_YKL['5']['15+3'] = 1.5;
priceTable_YKL['5']['18+3'] = 1.9;
priceTable_YKL['5']['20+3'] = 2.2;

priceTable_YKL['11']['5+3'] = 0.8;
priceTable_YKL['11']['8+3'] = 0.95;
priceTable_YKL['11']['10+3'] = 1.2;
priceTable_YKL['11']['12+3'] = 1.45;
priceTable_YKL['11']['15+3'] = 2.1;
priceTable_YKL['11']['18+3'] = 2.4;
priceTable_YKL['11']['20+3'] = 2.6;

priceTable_YKL['20']['5+3'] = 0.95;
priceTable_YKL['20']['8+3'] = 1.4;
priceTable_YKL['20']['10+3'] = 1.65;
priceTable_YKL['20']['12+3'] = 2.1;
priceTable_YKL['20']['15+3'] = 2.65;
priceTable_YKL['20']['18+3'] = 3.1;
priceTable_YKL['20']['20+3'] = 3.85;

priceTable_YKL['26']['5+3'] = 1.25;
priceTable_YKL['26']['8+3'] = 1.65;
priceTable_YKL['26']['10+3'] = 2.1;
priceTable_YKL['26']['12+3'] = 2.65;
priceTable_YKL['26']['15+3'] = 2.95;
priceTable_YKL['26']['18+3'] = 3.95;
priceTable_YKL['26']['20+3'] = 4.6;

priceTable_YKL['31']['5+3'] = 1.45;
priceTable_YKL['31']['8+3'] = 2.1;
priceTable_YKL['31']['10+3'] = 2.65;
priceTable_YKL['31']['12+3'] = 3.75;
priceTable_YKL['31']['15+3'] = 4.25;
priceTable_YKL['31']['18+3'] = 5.15;
priceTable_YKL['31']['20+3'] = 6.15;

priceTable_YKL['36']['5+3'] = 1.85;
priceTable_YKL['36']['8+3'] = 2.6;
priceTable_YKL['36']['10+3'] = 3.35;
priceTable_YKL['36']['12+3'] = 3.95;
priceTable_YKL['36']['15+3'] = 4.85;
priceTable_YKL['36']['18+3'] = 5.65;
priceTable_YKL['36']['20+3'] = 6.7;

priceTable_YKL['41']['5+3'] = 2.5;
priceTable_YKL['41']['8+3'] = 3.25;
priceTable_YKL['41']['10+3'] = 4;
priceTable_YKL['41']['12+3'] = 5.1;
priceTable_YKL['41']['15+3'] = 6.15;
priceTable_YKL['41']['18+3'] = 7.65;
priceTable_YKL['41']['20+3'] = 8.5;

priceTable_YKL['51']['5+3'] = 3.25;
priceTable_YKL['51']['8+3'] = 3.75;
priceTable_YKL['51']['10+3'] = 5.1;
priceTable_YKL['51']['12+3'] = 6.15;
priceTable_YKL['51']['15+3'] = 7.1;
priceTable_YKL['51']['18+3'] = 8.1;
priceTable_YKL['51']['20+3'] = 9.7;

priceTable_YKL['61']['5+3'] = 3.6;
priceTable_YKL['61']['8+3'] = 4.85;
priceTable_YKL['61']['10+3'] = 5.3;
priceTable_YKL['61']['12+3'] = 7.1;
priceTable_YKL['61']['15+3'] = 8.1;
priceTable_YKL['61']['18+3'] = 9.15;
priceTable_YKL['61']['20+3'] = 11.6;

priceTable_YKL['71']['5+3'] = 4.1;
priceTable_YKL['71']['8+3'] = 4.85;
priceTable_YKL['71']['10+3'] = 6.2;
priceTable_YKL['71']['12+3'] = 11;
priceTable_YKL['71']['15+3'] = 11.5;
priceTable_YKL['71']['18+3'] = 12.5;
priceTable_YKL['71']['20+3'] = 14;



function SItemClick(obj){
    var parobj = obj.parentNode.parentNode; //ul
    var pars = parobj.children;            //li
    for (var i = 0; i < pars.length; i++) {
        pars[i].firstChild.className = "";
    }
    obj.className = "selected";
    obj.blur();

    //获取 name 和 value
    var name = obj.attributes['name'].value;
    var value = obj.attributes['val'].value;

    BaojiaJson_YKL[name] = value;

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function inputChange(obj){
    var name = obj.attributes['name'].value;

    BaojiaJson_YKL[name] = obj.value;

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    console.log(BaojiaJson_YKL);

    if(BaojiaJson_YKL.chicun>=5 && BaojiaJson_YKL.chicun<=10)
        allPrice.allBaoJia = priceTable_YKL['5'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=11 && BaojiaJson_YKL.chicun<=19)
        allPrice.allBaoJia = priceTable_YKL['11'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=20 && BaojiaJson_YKL.chicun<=25)
        allPrice.allBaoJia = priceTable_YKL['20'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=26 && BaojiaJson_YKL.chicun<=30)
        allPrice.allBaoJia = priceTable_YKL['26'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=31 && BaojiaJson_YKL.chicun<=35)
        allPrice.allBaoJia = priceTable_YKL['31'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=36 && BaojiaJson_YKL.chicun<=40)
        allPrice.allBaoJia = priceTable_YKL['36'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=41 && BaojiaJson_YKL.chicun<=50)
        allPrice.allBaoJia = priceTable_YKL['41'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=51 && BaojiaJson_YKL.chicun<=60)
        allPrice.allBaoJia = priceTable_YKL['51'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else if(BaojiaJson_YKL.chicun>=61 && BaojiaJson_YKL.chicun<=70)
        allPrice.allBaoJia = priceTable_YKL['61'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;
    else
        allPrice.allBaoJia = priceTable_YKL['71'][BaojiaJson_YKL.houdu] * BaojiaJson_YKL.chicun * BaojiaJson_YKL.count;

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
        '<td>厚度</td>'+
        '<td>'+ BaojiaJson_YKL.houdu +'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>最长边尺寸</td>'+
        '<td>'+BaojiaJson_YKL.chicun+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>字的个数</td>'+
        '<td>'+BaojiaJson_YKL.count+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>总价格</td>'+
        '<td>'+allPrice.allBaoJia+'</td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'
    ;

    $('.itemResult').append(html);
}
