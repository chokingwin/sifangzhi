/**
 * Created by chokingwin on 2016-07-01.
 */

//不干胶的报价json数据组
var BaojiaJson_BGJ = {
    'caizhi':'铜版纸彩色不干胶（不过膜）',
    'chicun':'90x54mm',
    'count':'1000',
    'tsgy':''
};
var allPrice = {
    'jichuBaoJia':0,
    'tsgyBaoJia':'',
    'allBaoJia':0
};

/*定义 材质 的价格表*/
//铜版纸彩色不干胶（不过膜）
//尺寸从 90x54mm 到 420x570mm
//数量从500到10000
var priceTable_BGM = new Array;

priceTable_BGM['90x54mm'] =  new Array;
priceTable_BGM['90x140mm'] =  new Array;
priceTable_BGM['140x210mm'] =  new Array;
priceTable_BGM['210x285mm'] =  new Array;
priceTable_BGM['420x285mm'] =  new Array;
priceTable_BGM['420x570mm'] =  new Array;

priceTable_BGM['90x54mm']['500'] = 65;
priceTable_BGM['90x54mm']['1000'] = 75;
priceTable_BGM['90x54mm']['2000'] = 105;
priceTable_BGM['90x54mm']['3000'] = 170;
priceTable_BGM['90x54mm']['5000'] = 220;
priceTable_BGM['90x54mm']['10000'] = 320;

priceTable_BGM['90x140mm']['500'] = 105;
priceTable_BGM['90x140mm']['1000'] = 125;
priceTable_BGM['90x140mm']['2000'] = 175;
priceTable_BGM['90x140mm']['3000'] = 250;
priceTable_BGM['90x140mm']['5000'] = 370;
priceTable_BGM['90x140mm']['10000'] = 560;

priceTable_BGM['140x210mm']['500'] = 175;
priceTable_BGM['140x210mm']['1000'] = 215;
priceTable_BGM['140x210mm']['2000'] = 315;
priceTable_BGM['140x210mm']['3000'] = 400;
priceTable_BGM['140x210mm']['5000'] = 610;
priceTable_BGM['140x210mm']['10000'] = 1000;

priceTable_BGM['210x285mm']['500'] = 255;
priceTable_BGM['210x285mm']['1000'] = 345;
priceTable_BGM['210x285mm']['2000'] = 515;
priceTable_BGM['210x285mm']['3000'] = 700;
priceTable_BGM['210x285mm']['5000'] = 1070;
priceTable_BGM['210x285mm']['10000'] = 1900;

priceTable_BGM['420x285mm']['500'] = 455;
priceTable_BGM['420x285mm']['1000'] = 600;
priceTable_BGM['420x285mm']['2000'] = 945;
priceTable_BGM['420x285mm']['3000'] = 1300;
priceTable_BGM['420x285mm']['5000'] = 2100;
priceTable_BGM['420x285mm']['10000'] = 3800;

priceTable_BGM['420x570mm']['500'] = 810;
priceTable_BGM['420x570mm']['1000'] = 1150;
priceTable_BGM['420x570mm']['2000'] = 1800;
priceTable_BGM['420x570mm']['3000'] = 2500;
priceTable_BGM['420x570mm']['5000'] = 4000;
priceTable_BGM['420x570mm']['10000'] = 7500;

//铜版纸彩色特光不干胶（过光膜）
var priceTable_GGM = new Array;

priceTable_GGM['90x54mm'] =  new Array;
priceTable_GGM['90x140mm'] =  new Array;
priceTable_GGM['140x210mm'] =  new Array;
priceTable_GGM['210x285mm'] =  new Array;
priceTable_GGM['420x285mm'] =  new Array;
priceTable_GGM['420x570mm'] =  new Array;

priceTable_GGM['90x54mm']['500'] = 95;
priceTable_GGM['90x54mm']['1000'] = 105;
priceTable_GGM['90x54mm']['2000'] = 145;
priceTable_GGM['90x54mm']['3000'] = 210;
priceTable_GGM['90x54mm']['5000'] = 270;
priceTable_GGM['90x54mm']['10000'] = 390;

priceTable_GGM['90x140mm']['500'] = 165;
priceTable_GGM['90x140mm']['1000'] = 195;
priceTable_GGM['90x140mm']['2000'] = 245;
priceTable_GGM['90x140mm']['3000'] = 300;
priceTable_GGM['90x140mm']['5000'] = 420;
priceTable_GGM['90x140mm']['10000'] = 690;

priceTable_GGM['140x210mm']['500'] = 235;
priceTable_GGM['140x210mm']['1000'] = 265;
priceTable_GGM['140x210mm']['2000'] = 385;
priceTable_GGM['140x210mm']['3000'] = 530;
priceTable_GGM['140x210mm']['5000'] = 730;
priceTable_GGM['140x210mm']['10000'] = 1300;

priceTable_GGM['210x285mm']['500'] = 330;
priceTable_GGM['210x285mm']['1000'] = 480;
priceTable_GGM['210x285mm']['2000'] = 700;
priceTable_GGM['210x285mm']['3000'] = 910;
priceTable_GGM['210x285mm']['5000'] = 1400;
priceTable_GGM['210x285mm']['10000'] = 2550;

priceTable_GGM['420x285mm']['500'] = 600;
priceTable_GGM['420x285mm']['1000'] = 840;
priceTable_GGM['420x285mm']['2000'] = 1350;
priceTable_GGM['420x285mm']['3000'] = 1700;
priceTable_GGM['420x285mm']['5000'] = 2850;
priceTable_GGM['420x285mm']['10000'] = 5250;

priceTable_GGM['420x570mm']['500'] = 1200;
priceTable_GGM['420x570mm']['1000'] = 1600;
priceTable_GGM['420x570mm']['2000'] = 2650;
priceTable_GGM['420x570mm']['3000'] = 3600;
priceTable_GGM['420x570mm']['5000'] = 5450;
priceTable_GGM['420x570mm']['10000'] = 9950;


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

    //更新报价json数组中对应的name项
    BaojiaJson_BGJ[name] = value;
    //console.log(BaojiaJson_BGJ);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SItemChange(obj){
    var name = obj.attributes['name'].value;
    BaojiaJson_BGJ[name] = obj.value;
    //console.log(BaojiaJson_BGj);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function selectTsgy(obj){
    var name = obj.attributes['name'].value;
    if(obj.className == 'tsgySelect selected'){
        obj.className = "tsgySelect";
        BaojiaJson_BGJ['tsgy'] = '';
        allPrice.tsgyBaoJia = '';
    }else {
        obj.className = "tsgySelect selected";
        BaojiaJson_BGJ['tsgy'] = '特殊形状';
        allPrice.tsgyBaoJia = '这部分需要人工额外报价';
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    console.log(BaojiaJson_BGJ);

    //计算基础部分价格
    console.log('材质：'+BaojiaJson_BGJ.caizhi);
    console.log('尺寸：'+BaojiaJson_BGJ.chicun);
    console.log('数量：'+BaojiaJson_BGJ.count);
    switch (BaojiaJson_BGJ.caizhi){
        case '铜版纸彩色不干胶（不过膜）':
            allPrice.jichuBaoJia = priceTable_BGM[BaojiaJson_BGJ.chicun][BaojiaJson_BGJ.count];
            break;
        case '铜版纸彩色特光不干胶（过光膜）':
            allPrice.jichuBaoJia = priceTable_GGM[BaojiaJson_BGJ.chicun][BaojiaJson_BGJ.count];
            break;
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
        '<td>'+BaojiaJson_BGJ.caizhi+BaojiaJson_BGJ.chicun+' '+BaojiaJson_BGJ.count+'张</td>'+
        '<td>'+BaojiaJson_BGJ.tsgy+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>价格</td>'+
        '<td>'+allPrice.jichuBaoJia+'</td>'+
        '<td>'+allPrice.tsgyBaoJia+'</td>'+
        '</tr>';

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
