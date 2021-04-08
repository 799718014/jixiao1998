$(function(){

	//导航切换效果
	$(".sideNav_bx").hover(function(){
		$(this).find(".sideNav_bx_t").addClass("sideNav_bx_hover");
		$(this).find(".sideNav_sbx").show();
	},function(){
		$(this).find(".sideNav_bx_t").removeClass("sideNav_bx_hover");
		$(this).find(".sideNav_sbx").hide();
	})

	//TAB切换
	$(".in_bx1_l").ontabs(".in_bx1_tit span",".in_bx1_tcon","sel");
	$(".w1200").ontabs(".in_titx1_tab span",".in_bx2_m","sel","mouseover","animate");
	$(".w1200").ontabs(".in_titx1_tab span",".in_djjc_wp","sel","mouseover","animate");
	$(".in_tyzx_wp").ontabs(".in_titx1_tab span",".in_tyzx","sel","mouseover","animate");

	zmn.showPic(".banner",".banner_img"); //焦点banner

	zmn.rollBoxY(".message1",{speed: 500, line: 1, timer: 2000, way: "bottom"}); //捷报

	zmn.setCalendar("#activitytime",activitytimeJson); //日历

	$(".in_bx2_m_ls").each(function(){
		var _this=$(this);
		zmn.rollBoxX(_this,".in_bx2_m_lst","1"); //领书滚动

		//独家教材免费领书
		_this.siblings(".in_bx2_m_btn1").click(function() {
			var sunNum=_this.attr("index");
			if(!sunNum){
				sunNum=0;
			};
			var zmnBook=_this.find(".in_bx2_m_lst").eq(sunNum).find("strong").html();
			$("#zmn_book").val(zmnBook);
			$("#zmn_name,#zmn_tel,#zmn_email").val("");
			$(".pop_form").show(500);
		});
	})
	
	/*表单开始*/
	$(".pop_form .pop_form_close").click(function(){
		$(".pop_form").hide(500);
	})
	$(".pop_form .pop_form_btn").click(function(){
		zmn.formReg("#zmn_from",["zmn_name","zmn_tel","zmn_email"],"submit",function(){
			$("#pop_form").hide(500);
		});
	})
	$("#zmn_email,#zmn_tel").blur(function() {  //失去焦点，
        var zmnStr=$(this).attr("id");
        zmn.formReg("#zmn_from",[zmnStr],"blur");
	}); 
	/*表单结束*/


	$(".in_bx2_r1_lt1").each(function(){
		zmn.setByc($(this),".in_bx2_r1_ltt",".in_bx2_r1_ltb"); //百叶窗
	})

	zmn.rollBoxX($(".in_ppzq_bx"),".piclt","1",false,15);//品牌专区

	$(".in_djjc_bx").each(function(){
		zmn.rollBoxX($(this),".in_djjc_lt","3",false,15);//独家教材
	})


	$(".in_bx2_m_ls").each(function(){

	})
})

var sHover=new sHover("sHoverItem","sIntro");
sHover.set({
 	slideSpeed:5,
 	opacityChange:true,
 	opacity:80
});
$(".sHoverItem").hover(function(){
	$(this).find("h4").hide(500);
},function(){
	$(this).find("h4").show();
})