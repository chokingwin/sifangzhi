/**
 * Created by chokingwin on 2016-07-01.
 */

//画册的报价json数据组
var BaojiaJson_HC = {
    'caizhi':'铜版纸',
    'chicun':'A4及以下',
    'keshu':'157',
    'pishu':'8p',
    'count':'500',
    'zhuangbiao':'',
    'fumo':'',
    'tsgy':''
};
var allPrice = {
    'jichuBaoJia':0,
    'ptgyBaoJia':{
        'zhuangbiao':'',
        'fumo':''
    },
    'tsgyBaoJia':'',
    'allBaoJia':0
};

/*定义铜版纸不同克数的价格表*/
//157克铜板纸（整本157克）
//P数从8P到40P
//数量从500到10000
var priceTable_157 = new Array;

priceTable_157['8'] =  new Array;
/*priceTable_157['12'] =  new Array;
priceTable_157['16'] =  new Array;
priceTable_157['20'] =  new Array;
priceTable_157['24'] =  new Array;
priceTable_157['28'] =  new Array;
priceTable_157['32'] =  new Array;
priceTable_157['36'] =  new Array;
priceTable_157['40'] =  new Array;*/

priceTable_157['8']['500'] = 800;
priceTable_157['8']['1000'] = 1040;
priceTable_157['8']['2000'] = 1350;
priceTable_157['8']['3000'] = 1700;
priceTable_157['8']['5000'] = 2350;
priceTable_157['8']['10000'] = 4400;

/*priceTable_157['12']['500'] = 1200;
priceTable_157['12']['1000'] = 1400;
priceTable_157['12']['2000'] = 1950;
priceTable_157['12']['3000'] = 2450;
priceTable_157['12']['5000'] = 3380;
priceTable_157['12']['10000'] = 6380;

priceTable_157['16']['500'] = 1400;
priceTable_157['16']['1000'] = 1650;
priceTable_157['16']['2000'] = 2300;
priceTable_157['16']['3000'] = 2900;
priceTable_157['16']['5000'] = 4100;
priceTable_157['16']['10000'] = 7600;

priceTable_157['20']['500'] = 1750;
priceTable_157['20']['1000'] = 2100;
priceTable_157['20']['2000'] = 2900;
priceTable_157['20']['3000'] = 3650;
priceTable_157['20']['5000'] = 5150;
priceTable_157['20']['10000'] = 9600;

priceTable_157['24']['500'] = 2050;
priceTable_157['24']['1000'] = 2400;
priceTable_157['24']['2000'] = 3250;
priceTable_157['24']['3000'] = 4100;
priceTable_157['24']['5000'] = 6000;
priceTable_157['24']['10000'] = 11300;

priceTable_157['28']['500'] = 2250;
priceTable_157['28']['1000'] = 2700;
priceTable_157['28']['2000'] = 3950;
priceTable_157['28']['3000'] = 4800;
priceTable_157['28']['5000'] = 7000;
priceTable_157['28']['10000'] = 13000;

priceTable_157['32']['500'] = 2600;
priceTable_157['32']['1000'] = 3050;
priceTable_157['32']['2000'] = 4330;
priceTable_157['32']['3000'] = 5300;
priceTable_157['32']['5000'] = 7780;
priceTable_157['32']['10000'] = 14500;

priceTable_157['36']['500'] = 2900;
priceTable_157['36']['1000'] = 3450;
priceTable_157['36']['2000'] = 4620;
priceTable_157['36']['3000'] = 6040;
priceTable_157['36']['5000'] = 8860;
priceTable_157['36']['10000'] = 16400;

priceTable_157['40']['500'] = 3200;
priceTable_157['40']['1000'] = 3700;
priceTable_157['40']['2000'] = 5050;
priceTable_157['40']['3000'] = 6750;
priceTable_157['40']['5000'] = 9750;
priceTable_157['40']['10000'] = 18100;*/

/*
//200克铜版纸（封面200克内157克）
var priceTable_200 = new Array;

priceTable_200['8'] =  new Array;
priceTable_200['12'] =  new Array;
priceTable_200['16'] =  new Array;
priceTable_200['20'] =  new Array;
priceTable_200['24'] =  new Array;
priceTable_200['28'] =  new Array;
priceTable_200['32'] =  new Array;
priceTable_200['36'] =  new Array;
priceTable_200['40'] =  new Array;

priceTable_200['8']['500'] = 1100;
priceTable_200['8']['1000'] = 1300;
priceTable_200['8']['2000'] = 1700;
priceTable_200['8']['3000'] = 2100;
priceTable_200['8']['5000'] = 2900;
priceTable_200['8']['10000'] = 5300;

priceTable_200['12']['500'] = 1600;
priceTable_200['12']['1000'] = 1700;
priceTable_200['12']['2000'] = 2300;
priceTable_200['12']['3000'] = 2900;
priceTable_200['12']['5000'] = 3900;
priceTable_200['12']['10000'] = 7300;

priceTable_200['16']['500'] = 1800;
priceTable_200['16']['1000'] = 1900;
priceTable_200['16']['2000'] = 2650;
priceTable_200['16']['3000'] = 3250;
priceTable_200['16']['5000'] = 4700;
priceTable_200['16']['10000'] = 8500;

priceTable_200['20']['500'] = 1900;
priceTable_200['20']['1000'] = 2300;
priceTable_200['20']['2000'] = 3100;
priceTable_200['20']['3000'] = 3850;
priceTable_200['20']['5000'] = 5600;
priceTable_200['20']['10000'] = 10350;

priceTable_200['24']['500'] = 2200;
priceTable_200['24']['1000'] = 2600;
priceTable_200['24']['2000'] = 3550;
priceTable_200['24']['3000'] = 4350;
priceTable_200['24']['5000'] = 6500;
priceTable_200['24']['10000'] = 12100;

priceTable_200['28']['500'] = 2350;
priceTable_200['28']['1000'] = 2900;
priceTable_200['28']['2000'] = 4000;
priceTable_200['28']['3000'] = 5100;
priceTable_200['28']['5000'] = 7500;
priceTable_200['28']['10000'] = 13700;

priceTable_200['32']['500'] = 2750;
priceTable_200['32']['1000'] = 3200;
priceTable_200['32']['2000'] = 4500;
priceTable_200['32']['3000'] = 5500;
priceTable_200['32']['5000'] = 8200;
priceTable_200['32']['10000'] = 15300;

priceTable_200['36']['500'] = 3050;
priceTable_200['36']['1000'] = 3400;
priceTable_200['36']['2000'] = 4750;
priceTable_200['36']['3000'] = 6400;
priceTable_200['36']['5000'] = 9200;
priceTable_200['36']['10000'] = 17100;

priceTable_200['40']['500'] = 3400;
priceTable_200['40']['1000'] = 3800;
priceTable_200['40']['2000'] = 5200;
priceTable_200['40']['3000'] = 7050;
priceTable_200['40']['5000'] = 10100;
priceTable_200['40']['10000'] = 18900;*/

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

    if(name=='caizhi' && value!='铜版纸'){
        $('#qqLink_01').css(qqLinkStyleShow);
        //隐藏下面的所有tr
        for(var i=1;i<trObj.length;i++){
            trObj[i].style.display = 'none';
        }
        $('.calcBtn').css('display','none');
        if($('.itemResult').html() != '')
            $('.itemResult').css('display','none');
    }else if(name=='chicun' && value!='A4及以下'){
        $('#qqLink_02').css(qqLinkStyleShow);
        //隐藏下面的所有tr
        for(var i=2;i<trObj.length;i++){
            trObj[i].style.display = 'none';
        }
        $('.calcBtn').css('display','none');
        if($('.itemResult').html() != '')
            $('.itemResult').css('display','none');
    }else{
        //var currentQQLink_02 = $('#qqLink_02').css('display');
        //var currentQQLink_01 = $('#qqLink_01').css('display');
        //if( currentQQLink_02 !='block' && currentQQLink_01!='block') {
            $('#qqLink_02').css(qqLinkStyleDefault);
        //}
        $('#qqLink_01').css(qqLinkStyleDefault);
        $('.calcBtn').css('display','block');
        if($('.itemResult').html() != '')
            $('.itemResult').css('display','block');

        for(var i=0;i<trObj.length;i++){
            trObj[i].style.display = 'table-row';
        }
    }
    /**************针对QQ上架按钮链接做的特殊处理********结束*********************/

    //更新报价json数组中对应的name项
    BaojiaJson_HC[name] = value;
    console.log(BaojiaJson_HC);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SItemChange(obj){
    var name = obj.attributes['name'].value;
    BaojiaJson_HC[name] = obj.value;
    console.log(BaojiaJson_HC);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function displayZhuangBiao(obj){
    var name = obj.attributes['name'].value;
    if(obj.className == "selected") {
        obj.className = "";
        $('#'+name).css('display','none');
        BaojiaJson_HC[name] = '';
    }else {
        obj.className = "selected";
        $('#'+name).css('display','inline-block');
        BaojiaJson_HC[name] = $('#'+name+' option:selected').text();
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function displayFuMo(obj){
    var name = obj.attributes['name'].value;

    if(obj.className == "selected") {
        obj.className = "";
        $('#'+name).css('display','none');
        BaojiaJson_HC[name] = '';
    }else {
        obj.className = "selected";
        $('#'+name).css('display','inline-block');
        BaojiaJson_HC[name] = $('#'+name+' option:selected').text();
    }
    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function selectTsgy(obj){
    var name = obj.attributes['name'].value;
    if(obj.className == 'tsgySelect selected'){
        obj.className = "tsgySelect";
        BaojiaJson_HC['tsgy'] = '';
        allPrice.tsgyBaoJia = '';
    }else {
        obj.className = "tsgySelect selected";
        BaojiaJson_HC['tsgy'] = '烫金/烫银/压点线/凹凸/压痕等工艺';
        allPrice.tsgyBaoJia = '这部分需要人工额外报价';
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    console.log(BaojiaJson_HC);

    //计算基础部分价格
    console.log('克数：'+BaojiaJson_HC.keshu);
    console.log('P数：'+BaojiaJson_HC.pishu);
    console.log('数量：'+BaojiaJson_HC.count);
    switch (BaojiaJson_HC.keshu){
        case '157':
            //allPrice.jichuBaoJia = priceTable_157[BaojiaJson_HC.pishu][BaojiaJson_HC.count];
            allPrice.jichuBaoJia = priceTable_157[BaojiaJson_HC.pishu][BaojiaJson_HC.count];
            break;
        case '200':
            //allPrice.jichuBaoJia = priceTable_200[BaojiaJson_HC.pishu][BaojiaJson_HC.count];
            allPrice.jichuBaoJia = priceTable_200[BaojiaJson_HC.pishu][BaojiaJson_HC.count];
            break;
    }

    //清空普通工艺里的 装裱 报价
    allPrice.ptgyBaoJia.zhuangbiao = '';
    //判断普通工艺里的 折页类是否选择
    if(BaojiaJson_HC.zhuangbiao){
        if(BaojiaJson_HC.zhuangbiao == '骑马钉') {
            allPrice.ptgyBaoJia.zhuangbiao = 0;
        }
        else if(BaojiaJson_HC.zhuangbiao == '无线胶装'){
            allPrice.ptgyBaoJia.zhuangbiao = 550;
        }else{
            allPrice.ptgyBaoJia.zhuangbiao = 650;
        }
    }
    //清空普通工艺里的 覆膜 报价
    allPrice.ptgyBaoJia.fumo = '';
    //判断普通工艺里的 覆膜类是否选择
    if(BaojiaJson_HC.fumo){
        switch(BaojiaJson_HC.fumo){
            case '封面封底单面覆光膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_HC.count) * 0.12;
                break;
            case '封面封底双面覆光膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_HC.count) * 0.12 * 2;
                break;
            case '封面封底单面覆哑膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_HC.count) * 0.12;
                break;
            case '封面封底双面覆哑膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_HC.count) * 0.12 * 2;
                break;
        }
    }

    //计算总报价
    allPrice.allBaoJia = allPrice.jichuBaoJia + allPrice.ptgyBaoJia.zhuangbiao + allPrice.ptgyBaoJia.fumo;
    console.log(allPrice);
    console.log('总价格：'+allPrice.allBaoJia);

    showPriceTable();
}

function showPriceTable(){
    var fumo = new Array;
    fumo[''] = 0;
    fumo['封面封底单面覆光膜'] = 1;
    fumo['封面封底双面覆光膜'] = 2;
    fumo['封面封底单面覆哑膜'] = 1;
    fumo['封面封底双面覆哑膜'] = 2;

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
        '<td>'+BaojiaJson_HC.keshu+'克'+BaojiaJson_HC.caizhi+BaojiaJson_HC.chicun+' '+BaojiaJson_HC.count+'本</td>'+
        '<td>'+BaojiaJson_HC.zhuangbiao+' '+ BaojiaJson_HC.fumo +'</td>'+
        '<td>'+BaojiaJson_HC.tsgy+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>价格</td>'+
        '<td>'+allPrice.jichuBaoJia+'</td>'+
        '<td>'+allPrice.ptgyBaoJia.zhuangbiao+' '+allPrice.ptgyBaoJia.fumo+'</td>'+
        '<td>'+allPrice.tsgyBaoJia+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>计算公式</td>';
    if(allPrice.ptgyBaoJia.zheye != '' && allPrice.ptgyBaoJia.fumo != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+allPrice.ptgyBaoJia.zheye+' + '+ '0.12 * '+BaojiaJson_HC.count+' * '+fumo[BaojiaJson_HC.fumo]+' = '+allPrice.allBaoJia+'</td>';
    }else if(allPrice.ptgyBaoJia.zheye != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+allPrice.ptgyBaoJia.zheye+' = '+allPrice.allBaoJia+'</td>';
    }else if(allPrice.ptgyBaoJia.fumo != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+ '0.12 * '+BaojiaJson_HC.count+' * '+fumo[BaojiaJson_HC.fumo]+' = '+allPrice.allBaoJia+'</td>';
    }else {
        html += '<td colspan="3">'+allPrice.jichuBaoJia+'</td>';
    }

    html += '</tr>'+
        '<tr>'+
        '<td colspan="4"><h3 style="float: right;margin-right: 17px;">'+allPrice.allBaoJia+'元</h3><p style="float: right;margin-right: 10px;">总价格 : </p></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'
    ;

    $('.itemResult').append(html);
}

