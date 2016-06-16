/**
 * Created by chokingwin on 2016-06-16.
 */


//高级原浆纸无碳联单 的报价json数据组
var BaojiaJson_LD = {
    'type':'不带牛皮纸封面、自带复写功能，如送货单、收据',
    'liandan':'两联',
    'chichun':'正64开',
    'count':'400',
    'liushuihao':'',
    'yzd':''
};
var allPrice = {
    'jichuBaoJia':0,
    'ptgyBaoJia':{
        'liushuihao':'',
        'yzd':''
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

}

function selectPtgy(obj){
    var name = obj.attributes['name'].value;
    if(obj.checked){
        BaojiaJson_LD[name] = name;
    }else {
        BaojiaJson_LD[name] = '';
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    console.log(BaojiaJson_LD);

    switch (BaojiaJson_LD.type){
        case '不带牛皮纸封面、自带复写功能，如送货单、收据':
            allPrice.jichuBaoJia = priceTable_LD_BDNP[BaojiaJson_LD.liandan][BaojiaJson_LD.chicun] + BaojiaJson_LD.liushuihao*0.05;
            break;
        case '带牛皮纸封面、自带复写功能，如送货单、收据':
            allPrice.jichuBaoJia = priceTable_LD_BDNP[BaojiaJson_LD.liandan][BaojiaJson_LD.chicun];
            break;
    }

    //清空普通工艺里的 折页 报价
    allPrice.ptgyBaoJia.zheye = '';
    //判断普通工艺里的 折页类是否选择
    if(BaojiaJson_XCD.zheye){
        if(BaojiaJson_XCD.count <= 3000) {
            allPrice.ptgyBaoJia.zheye = 80;
        }
        else if(BaojiaJson_XCD.count == 5000){
            allPrice.ptgyBaoJia.zheye = 100;
        }else{
            allPrice.ptgyBaoJia.zheye = 120;
        }
    }
    //清空普通工艺里的 覆膜 报价
    allPrice.ptgyBaoJia.fumo = '';
    //判断普通工艺里的 覆膜类是否选择
    if(BaojiaJson_XCD.fumo){
        switch(BaojiaJson_XCD.fumo){
            case '单面覆光膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_XCD.count) * 0.12;
                break;
            case '双面覆光膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_XCD.count) * 0.12 * 2;
                break;
            case '单面覆哑膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_XCD.count) * 0.12;
                break;
            case '双面覆哑膜':
                allPrice.ptgyBaoJia.fumo = parseInt(BaojiaJson_XCD.count) * 0.12 * 2;
                break;
        }
    }

    //计算总报价
    allPrice.allBaoJia = allPrice.jichuBaoJia + allPrice.ptgyBaoJia.zheye + allPrice.ptgyBaoJia.fumo;
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
