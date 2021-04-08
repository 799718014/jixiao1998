$(function(){

	/*页头JS 开始*/
	zmn.rollBoxY(".header_rli",{speed: 500, line: 2, timer: 2000, way: "top"});
	$(".top_dq_wp").mouseover(function(){
		var _this=$(this);
		$(".public_top").css({
			"margin-bottom": "45px"
		});
		_this.css("color","#ff5400");
		_this.find('.top_dq').show();
		
	}).mouseout(function(){
		var _this=$(this);
		$(".public_top").css({
			"margin-bottom": "15px"
		});
		_this.css("color","");
		_this.find('.top_dq').hide();
		
	});
	/*页头JS 结束*/

	/* TQ点击事件 */
	$(".tqbtn,.a_kefu").click(function(){
		TQKF.kefuimg.Distrabute()
	})

	/* 弹窗口广告 */
	zmn.indexAD({
		"imgUrl":"jz/21499.html",
		"imgSrc":"images/20151218/ad.jpg",  //imgSrc是图片地址
		"width":"1200",  //图片宽度
		"height":"500",  //图片高度
		"startTime":"2015-12-11 9:00:00",  //广告开始时间
		"endTime":"2015-12-19 23:59:59",  //广告结束时间
		"source":"index",
		"invalid":true //广告是否有效
	});


	/*页尾JS 开始*/
	//页尾微信弹出效果
	var wxhoverTimer=null;
	$(".wxhover").hover(function(){
		clearTimeout(wxhoverTimer);
		$(".foot_wp1").slideDown(1000);
	},function(){
		wxhoverTimer=setTimeout(function(){
			$(".foot_wp1").hide();
		},3000);
		
	})
	$(".foot_wp1").hover(function(){
		clearTimeout(wxhoverTimer);
		$(".foot_wp1").show();
	},function(){
		$(".foot_wp1").hide();
	})

	$(".float_tq_right").hover(function(){
		$(this).find(".tq_right_x").show();
	},function(){
		$(this).find(".tq_right_x").hide();
	})
	$(".float_wx_right").hover(function(){
		$(this).find("p").show();
	},function(){
		$(this).find("p").hide();
	})
	/*页尾JS 结束*/

})



//右侧导航
window.onload=window.onresize=window.onscroll=function(){
	srollSlideBox($(".float_right"),190,190,"right");
	srollSlideBox($(".float_ad_left"),190,190,"left");
}
function srollSlideBox(OBJ,initHeight,maxHeight,direction){
	var O=OBJ;
	var ww1=$(window).width(),bw1=$(".w1200").width(),ow1=O.width();
	var t1=parseFloat(O.css("top"));
	var sh1=$(document).scrollTop();

	//left值
	if(direction=="left"){
		O.w1=(ww1-bw1)/2-ow1-15;
	}else if(direction=="right"){
		if(ww1 >  bw1 + 2*ow1){
			O.w1=(ww1+bw1)/2+15;
		}else{
			O.w1=ww1-ow1;
		}
	}
	O.css("left",O.w1).show();

	if(sh1>=maxHeight){
		O.css({
			"position":"fixed",
			"top":0
		});
	}else{
		O.css({
			"position":"absolute",
			"top":initHeight
		});
	}
}