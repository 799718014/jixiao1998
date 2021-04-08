$(function(){

	$(".right_book .la").click(function(){
		$(".right_book .tabs_con1").animate({top:'-176px'},300);
	})
	$(".right_book .chong").click(function(){
		$(".right_book .tabs_con1").animate({top:'0'},300);
	})
	
})



//首页下拉大广告
function indexAD(){
	//判断时间点*/
	if(!compareTime("2015-11-13 23:59:59")){
		return false;
	}

	var adStr=$("<style>"
				+".index_ad{position:relative;width:1000px;margin:0 auto;}"
				+".index_close{position:absolute;z-index:10;right:10px;top:10px;display:none;}"
				+".index_adx{z-index:8;display:none;}"
				+".index_ads{position:relative;left:0;top:0;z-index:12;display:none;}"
				+"</style>"
				+"<div class='index_ad'>"
					+"<a class='index_close' href='javascript:;'><img src='../../../../../templets/style/images/index/close.png' width='12' height='12'></a>"
					+"<a class='index_adx' href='../../../../../zhuanti/2015/mlczgh2015/default.htm'><img src='../../../../../templets/style/images/index/adx.jpg' width='100%'></a>"
					+"<a class='index_ads' href='../../../../../zhuanti/2015/mlczgh2015/default.htm'><img src='../../../../../templets/style/images/index/ads.jpg' width='100%'></a>"
				+"</div>")

	$(".head_map").after(adStr);
	adStr.find(".index_ads").show();
	var index_t=setTimeout(function(){
		adStr.find(".index_ads").slideUp(function(){
			adStr.find(".index_adx").show();
			adStr.find(".index_close").show();
		});
		
	
	},5000);

	adStr.find(".index_close").click(function() {
		adStr.remove();
	});
	
}
//定时器
function compareTime(d){
	var d1=new Date();
	var d2=new Date(d.replace(/-/g,"../../../../../default.htm"));
	if(d1>d2){
		return false;
	}else{
		return true;
	}
}

//赠书表单验证
$(function(){
	$fm = $("#index_book");
	$fm.submit(function(){
		if($fm.find("input[name='name']").val() ==""){
			alert("请填写您的姓名");
			return false;
		}
		if($fm.find("input[name='tel']").val().length !=11){
			alert("请填正确的手机号码");
			return false;
		}
		return true;
	});
	
})

$(function (){
	  $(".liuxue_tab ul li").each(function(index){//each变例，每一个a标签
		  $(this).mouseover(function(){//鼠标滑过a的时候
			  $(".liuxue_tabCen .floor_tab_box").addClass("dis")//给news添加样式dis
			  $(".liuxue_tabCen .floor_tab_box:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			  $(".liuxue_tab ul li").removeClass("hover")//先删除所有的a的样式hover
			  $(this).addClass("hover")//给对应的a添加样式hover
		  })
	  })
	  
	  $(".liuxue_paiming_tab ul li").each(function(index){//each变例，每一个a标签
		  $(this).mouseover(function(){//鼠标滑过a的时候
			  $(".liuxue_paiming_tabCen .tabs_con").addClass("dis")//给news添加样式dis
			  $(".liuxue_paiming_tabCen .tabs_con:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			  $(".liuxue_paiming_tab ul li").removeClass("hover")//先删除所有的a的样式hover
			  $(this).addClass("hover")//给对应的a添加样式hover
		  })
	  })
	  
	  $(".peixun_tab ul li").each(function(index){//each变例，每一个a标签
		  $(this).mouseover(function(){//鼠标滑过a的时候
			  $(".peixun_tabCen .floor_tab_box").addClass("dis")//给news添加样式dis
			  $(".peixun_tabCen .floor_tab_box:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			  $(".peixun_tab ul li").removeClass("hover")//先删除所有的a的样式hover
			  $(this).addClass("hover")//给对应的a添加样式hover
		  })
	  })
	  
	  $(".book_tab ul li").each(function(index){//each变例，每一个a标签
		  $(this).mouseover(function(){//鼠标滑过a的时候
			  $(".book_tabCen .floor_tab_box").addClass("dis")//给news添加样式dis
			  $(".book_tabCen .floor_tab_box:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			  $(".book_tab ul li").removeClass("hover")//先删除所有的a的样式hover
			  $(this).addClass("hover")//给对应的a添加样式hover
		  })
	  })
})
