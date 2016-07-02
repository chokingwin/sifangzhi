/**
 * Created by chokingwin on 2016-07-01.
 */

//高级原浆纸无碳联单 的报价json数据组
var BaojiaJson_LD = {
    'type':'不带牛皮纸封面、自带复写功能，如送货单、收据',
    'liandan':'两联',
    'chicun':'正64开',
    'count':'400',
    'liushuihao':'',
    'yzd':''
};
var allPrice = {
    'jichuBaoJia':0,
    'ptgyBaoJia':{
        'liushuihao':0,
        'yzd':0
    },
    'allBaoJia':0
};

/*定义 高级原浆纸无碳联单 的价格表*/

//不带牛皮纸封面
var priceTable_LD_BDNP = new Array;

priceTable_LD_BDNP['两联'] =  new Array;
priceTable_LD_BDNP['三联'] =  new Array;
priceTable_LD_BDNP['四联'] =  new Array;

priceTable_LD_BDNP['两联']['正64开'] = 0.95;
priceTable_LD_BDNP['两联']['正48开'] = 1.2;
priceTable_LD_BDNP['两联']['正32开'] = 1.45;
priceTable_LD_BDNP['两联']['正16开'] = 2.75;
priceTable_LD_BDNP['两联']['大64开'] = 1.15;
priceTable_LD_BDNP['两联']['大48开'] = 1.35;
priceTable_LD_BDNP['两联']['大32开'] = 1.8;
priceTable_LD_BDNP['两联']['大16开'] = 3.35;

priceTable_LD_BDNP['三联']['正64开'] = 1.05;
priceTable_LD_BDNP['三联']['正48开'] = 1.3;
priceTable_LD_BDNP['三联']['正32开'] = 1.55;
priceTable_LD_BDNP['三联']['正16开'] = 3;
priceTable_LD_BDNP['三联']['大64开'] = 1.25;
priceTable_LD_BDNP['三联']['大48开'] = 1.5;
priceTable_LD_BDNP['三联']['大32开'] = 1.9;
priceTable_LD_BDNP['三联']['大16开'] = 3.55;

priceTable_LD_BDNP['四联']['正64开'] = 1.1;
priceTable_LD_BDNP['四联']['正48开'] = 1.35;
priceTable_LD_BDNP['四联']['正32开'] = 1.7;
priceTable_LD_BDNP['四联']['正16开'] = 3.1;
priceTable_LD_BDNP['四联']['大64开'] = 1.3;
priceTable_LD_BDNP['四联']['大48开'] = 1.65;
priceTable_LD_BDNP['四联']['大32开'] = 2.1;
priceTable_LD_BDNP['四联']['大16开'] = 3.7;

//带牛皮纸封面
var priceTable_LD_DNP = new Array;

priceTable_LD_DNP['两联'] =  new Array;
priceTable_LD_DNP['三联'] =  new Array;
priceTable_LD_DNP['四联'] =  new Array;

priceTable_LD_DNP['两联']['正64开'] = 1.05;
priceTable_LD_DNP['两联']['正48开'] = 1.3;
priceTable_LD_DNP['两联']['正32开'] = 1.55;
priceTable_LD_DNP['两联']['正16开'] = 2.85;
priceTable_LD_DNP['两联']['大64开'] = 1.25;
priceTable_LD_DNP['两联']['大48开'] = 1.45;
priceTable_LD_DNP['两联']['大32开'] = 1.9;
priceTable_LD_DNP['两联']['大16开'] = 3.45;

priceTable_LD_DNP['三联']['正64开'] = 1.15;
priceTable_LD_DNP['三联']['正48开'] = 1.4;
priceTable_LD_DNP['三联']['正32开'] = 1.65;
priceTable_LD_DNP['三联']['正16开'] = 3.1;
priceTable_LD_DNP['三联']['大64开'] = 1.35;
priceTable_LD_DNP['三联']['大48开'] = 1.6;
priceTable_LD_DNP['三联']['大32开'] = 2;
priceTable_LD_DNP['三联']['大16开'] = 3.65;

priceTable_LD_DNP['四联']['正64开'] = 1.2;
priceTable_LD_DNP['四联']['正48开'] = 1.45;
priceTable_LD_DNP['四联']['正32开'] = 1.8;
priceTable_LD_DNP['四联']['正16开'] = 3.2;
priceTable_LD_DNP['四联']['大64开'] = 1.4;
priceTable_LD_DNP['四联']['大48开'] = 1.75;
priceTable_LD_DNP['四联']['大32开'] = 2.2;
priceTable_LD_DNP['四联']['大16开'] = 3.8;


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
    BaojiaJson_LD[name] = value;
    //console.log(BaojiaJson_LD);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SItemChange(obj){
    var name = obj.attributes['name'].value;
    BaojiaJson_LD[name] = obj.value;
    //console.log(BaojiaJson_LD);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function inputChange(obj){
    BaojiaJson_LD.count = obj.value;
}

function selectPtgy(obj){
    var name = obj.attributes['name'].value;
    var value = obj.attributes['val'].value;

    if(obj.className == 'selected'){
        obj.className = "";
        obj.style.backgroundColor = '#FFFFFF';
        BaojiaJson_LD[name] = '';
    }else {
        obj.className = "selected";
        obj.style.backgroundColor = '#693906';
        BaojiaJson_LD[name] = value;
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    var yzd = new Array;

    yzd['正64开'] = 0.05;
    yzd['正48开'] = 0.05;
    yzd['正32开'] = 0.1;
    yzd['正16开'] = 0.1;
    yzd['大64开'] = 0.05;
    yzd['大48开'] = 0.05;
    yzd['大32开'] = 0.1;
    yzd['大16开'] = 0.1;

    var liushuihao = new Array;
    liushuihao['加流水号'] = 0.05;
    liushuihao[''] = 0;

    var yzd = new Array;
    yzd['加硬质垫'] = 0.05;
    yzd[''] = 0;

    console.log(BaojiaJson_LD);

    switch (BaojiaJson_LD.type){
        case '不带牛皮纸封面、自带复写功能，如送货单、收据':
            allPrice.jichuBaoJia = priceTable_LD_BDNP[BaojiaJson_LD.liandan][BaojiaJson_LD.chicun] * BaojiaJson_LD.count;
            break;
        case '带牛皮纸封面、自带复写功能，如送货单、收据':
            allPrice.jichuBaoJia = priceTable_LD_DNP[BaojiaJson_LD.liandan][BaojiaJson_LD.chicun] * BaojiaJson_LD.count;
            break;
    }

    //计算普通工艺
    allPrice.ptgyBaoJia.liushuihao = liushuihao[BaojiaJson_LD.liushuihao] * BaojiaJson_LD.count;
    allPrice.ptgyBaoJia.yzd = yzd[BaojiaJson_LD.yzd] * BaojiaJson_LD.count;

    //计算总报价
    allPrice.allBaoJia = allPrice.jichuBaoJia + allPrice.ptgyBaoJia.liushuihao + allPrice.ptgyBaoJia.yzd;
    console.log(allPrice);
    console.log('总价格：'+allPrice.allBaoJia);

    showPriceTable();
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
        '<td colspan="2">普通工艺</td>'+
        '</tr>'+
        '<tr>'+
        '<td>条目</td>'+
        '<td>'+BaojiaJson_LD.liandan+' '+BaojiaJson_LD.chicun+' '+BaojiaJson_LD.type+'</td>'+
        '<td>'+BaojiaJson_LD.liushuihao+'</td>'+
        '<td>'+BaojiaJson_LD.yzd+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>价格</td>'+
        '<td>'+allPrice.jichuBaoJia+'</td>'+
        '<td>'+allPrice.ptgyBaoJia.liushuihao+'</td>'+
        '<td>'+allPrice.ptgyBaoJia.yzd+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>计算公式</td>';
    if(allPrice.ptgyBaoJia.liushuihao != '' && allPrice.ptgyBaoJia.yzd != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+allPrice.ptgyBaoJia.liushuihao+' + '+allPrice.ptgyBaoJia.yzd+' = '+allPrice.allBaoJia+'</td>';
    }else if(allPrice.ptgyBaoJia.liushuihao != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+allPrice.ptgyBaoJia.liushuihao+' = '+allPrice.allBaoJia+'</td>';
    }else if(allPrice.ptgyBaoJia.yzd != ''){
        html += '<td colspan="3">'+allPrice.jichuBaoJia+' + '+allPrice.ptgyBaoJia.yzd+' = '+allPrice.allBaoJia+'</td>';
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
