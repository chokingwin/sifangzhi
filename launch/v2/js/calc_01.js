/**
 * Created by chokingwin on 2016-06-30.
 */

function SItemClick2(obj) {
    var parobj = obj.parentNode.parentNode; //ul
    console.log(parobj.tagName);
    var pars = parobj.childNodes;           //li
    console.log(pars[1].tagName);
    alert(pars.length);
    for (var i = 0; i < pars.length; i++) {
        console.log(pars[i].tagName);
        if (!!pars[i].tagName) { pars[i].firstChild.className = ""; }
    }
    obj.className = "selected";
    obj.blur();
    //$("#" + parobj.lang).val(obj.lang);
    console.log(obj.lang);
}

//宣传单、折页的报价json数据组
var BaojiaJson_XCD = {
    'caizhi':'铜版纸',
    'banshi':'拼版',
    'keshu':'157',
    'chicun':'A3',
    'danshuang':'单面',
    'count':'1000',
    'zheye':'',
    'fumo':'',
    'tsgy':''
};
var allPrice = {
    'jichuBaoJia':0,
    'ptgyBaoJia':{
        'zheye':'',
        'fumo':''
    },
    'tsgyBaoJia':'',
    'allBaoJia':0
};

/*定义铜版纸不同克数的价格表*/
//157克铜板纸
//尺寸从A5到A2
//数量从500到10000
var priceTable_157 = new Array;

priceTable_157['A5'] =  new Array;
priceTable_157['A4'] =  new Array;
priceTable_157['A3'] =  new Array;
priceTable_157['A2'] =  new Array;

priceTable_157['A5']['500'] = 100;
priceTable_157['A5']['1000'] = 115;
priceTable_157['A5']['2000'] = 155;
priceTable_157['A5']['3000'] = 220;
priceTable_157['A5']['5000'] = 290;
priceTable_157['A5']['10000'] = 360;

priceTable_157['A4']['500'] = 115;
priceTable_157['A4']['1000'] = 140;
priceTable_157['A4']['2000'] = 215;
priceTable_157['A4']['3000'] = 280;
priceTable_157['A4']['5000'] = 360;
priceTable_157['A4']['10000'] = 620;

priceTable_157['A3']['500'] = 215;
priceTable_157['A3']['1000'] = 245;
priceTable_157['A3']['2000'] = 370;
priceTable_157['A3']['3000'] = 490;
priceTable_157['A3']['5000'] = 700;
priceTable_157['A3']['10000'] = 1200;

priceTable_157['A2']['500'] = 315;
priceTable_157['A2']['1000'] = 450;
priceTable_157['A2']['2000'] = 800;
priceTable_157['A2']['3000'] = 1000;
priceTable_157['A2']['5000'] = 1300;
priceTable_157['A2']['10000'] = 2180;

//200克铜版纸
var priceTable_200 = new Array;

priceTable_200['A5'] = new Array;
priceTable_200['A4'] = new Array;
priceTable_200['A3'] = new Array;
priceTable_200['A2'] = new Array;

priceTable_200['A5']['500'] = 185;
priceTable_200['A5']['1000'] = 195;
priceTable_200['A5']['2000'] = 250;
priceTable_200['A5']['3000'] = 370;
priceTable_200['A5']['5000'] = 460;
priceTable_200['A5']['10000'] = 670;

priceTable_200['A4']['500'] = 195;
priceTable_200['A4']['1000'] = 245;
priceTable_200['A4']['2000'] = 345;
priceTable_200['A4']['3000'] = 460;
priceTable_200['A4']['5000'] = 670;
priceTable_200['A4']['10000'] = 1100;

priceTable_200['A3']['500'] = 345;
priceTable_200['A3']['1000'] = 435;
priceTable_200['A3']['2000'] = 655;
priceTable_200['A3']['3000'] = 850;
priceTable_200['A3']['5000'] = 1180;
priceTable_200['A3']['10000'] = 2120;

priceTable_200['A2']['500'] = 695;
priceTable_200['A2']['1000'] = 855;
priceTable_200['A2']['2000'] = 1250;
priceTable_200['A2']['3000'] = 1620;
priceTable_200['A2']['5000'] = 2280;
priceTable_200['A2']['10000'] = 4100;

//250克铜版纸
var priceTable_250 = new Array;

priceTable_250['A5'] = new Array;
priceTable_250['A4'] = new Array;
priceTable_250['A3'] = new Array;
priceTable_250['A2'] = new Array;

priceTable_250['A5']['500'] = 205;
priceTable_250['A5']['1000'] = 215;
priceTable_250['A5']['2000'] = 285;
priceTable_250['A5']['3000'] = 420;
priceTable_250['A5']['5000'] = 500;
priceTable_250['A5']['10000'] = 800;

priceTable_250['A4']['500'] = 215;
priceTable_250['A4']['1000'] = 285;
priceTable_250['A4']['2000'] = 400;
priceTable_250['A4']['3000'] = 520;
priceTable_250['A4']['5000'] = 800;
priceTable_250['A4']['10000'] = 1470;

priceTable_250['A3']['500'] = 375;
priceTable_250['A3']['1000'] = 525;
priceTable_250['A3']['2000'] = 730;
priceTable_250['A3']['3000'] = 940;
priceTable_250['A3']['5000'] = 1470;
priceTable_250['A3']['10000'] = 2720;

priceTable_250['A2']['500'] = 715;
priceTable_250['A2']['1000'] = 1000;
priceTable_250['A2']['2000'] = 1470;
priceTable_250['A2']['3000'] = 1820;
priceTable_250['A2']['5000'] = 2730;
priceTable_250['A2']['10000'] = 5420;

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
    }else if(name=='banshi' && value!='拼版'){
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
    BaojiaJson_XCD[name] = value;
    //console.log(BaojiaJson_XCD);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function SItemChange(obj){
    var name = obj.attributes['name'].value;
    BaojiaJson_XCD[name] = obj.value;
    //console.log(BaojiaJson_XCD);

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function displayZheYe(obj){
    var name = obj.attributes['name'].value;
    if(obj.className == "selected") {
        obj.className = "";
        $('#'+name).css('display','none');
        BaojiaJson_XCD[name] = '';
    }else {
        obj.className = "selected";
        $('#'+name).css('display','inline-block');
        BaojiaJson_XCD[name] = $('#'+name+' option:selected').text();
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
        BaojiaJson_XCD[name] = '';
    }else {
        obj.className = "selected";
        $('#'+name).css('display','inline-block');
        BaojiaJson_XCD[name] = $('#'+name+' option:selected').text();
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function selectTsgy(obj){
    var name = obj.attributes['name'].value;
    if(obj.className == 'selected'){
        obj.className = "";
        obj.style.backgroundColor = '#FFFFFF';
        BaojiaJson_XCD['tsgy'] = '';
        allPrice.tsgyBaoJia = '';
    }else {
        obj.className = "selected";
        obj.style.backgroundColor = '#693906';
        BaojiaJson_XCD['tsgy'] = '烫金/烫银/压点线/凹凸/压痕等工艺';
        allPrice.tsgyBaoJia = '这部分需要人工额外报价';
    }

    //动态刷新计价表
    if($('.itemResult').html() != '')
        calc();
}

function calc(){
    console.log(BaojiaJson_XCD);

    //计算基础部分价格
    console.log('克数：'+BaojiaJson_XCD.keshu);
    console.log('尺寸：'+BaojiaJson_XCD.chicun);
    console.log('数量：'+BaojiaJson_XCD.count);
    switch (BaojiaJson_XCD.keshu){
        case '157':
            allPrice.jichuBaoJia = priceTable_157[BaojiaJson_XCD.chicun][BaojiaJson_XCD.count];
            break;
        case '200':
            allPrice.jichuBaoJia = priceTable_200[BaojiaJson_XCD.chicun][BaojiaJson_XCD.count];
            break;
        case '250':
            allPrice.jichuBaoJia = priceTable_250[BaojiaJson_XCD.chicun][BaojiaJson_XCD.count];
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

$(".itemImg").mouseenter(function(){
    $(".img_cover").stop().animate({opacity: "0.5"});
    $(".left_line").stop().animate({opacity: "1",left:"150px"});
    $(".right_line").stop().animate({opacity: "1",right:"150px"});
    $(".img_desc").stop().animate({opacity: "1",top: "0"});
});
$(".itemImg").mouseleave(function(){
    $(".img_cover").stop().animate({opacity: "0"});
    $(".left_line").stop().animate({opacity: "0",left:"100px"});
    $(".right_line").stop().animate({opacity: "0",right:"100px"});
    $(".img_desc").stop().animate({opacity: "0",top: "20px"});
});
