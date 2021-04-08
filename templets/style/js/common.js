//--------tab 选项卡
/*
说明：
tab选项块父级元素：.tab_hd
tab内容块父级元素：.tab_bd
当前选项卡addclass：current
*/
$(function(){
    function tabs(tabTit,on,tabCon){
	$(tabCon).each(function(){
	  $(this).children().eq(0).show();
	  });
	$(tabTit).each(function(){
	  $(this).children().eq(0).addClass(on);
	  });
     $(tabTit).children().hover(function(){
        $(this).addClass(on).siblings().removeClass(on);
         var index = $(tabTit).children().index(this);
         $(tabCon).children().eq(index).show().siblings().hide();
    });
     }
  tabs(".tab-hd","current",".tab-bd");
   });

   
 /*
 sidebar
 */  
function sidebarShow(kay){
	var $mainBox = $('#side_bar');//变量初始化
	var $keyBox = $('#side_bar_title');
	var $listBox = $('#side_bar_list');
	var oldHeight = $listBox.height();
	var oldWidth = $listBox.width();
	if(kay=="yes"){
		$listBox.css({"display":"block"});//初始化list为height:0状态
	}else{
		$listBox.css({"height":"0px","overflow":"hidden","display":"block"});//初始化list为height:0状态
		$keyBox.addClass("hide");//初始化title按钮为隐藏状态
		$mainBox.mouseover(function(){//mouseover方法
		$(this).find($listBox).stop(true,false).animate({"height":oldHeight+"px"},500);//stop()停止当前动画。加载下面新的动画
		$(this).find($keyBox).removeClass("hide");
	});
	
	$mainBox.mouseleave(function(){//mouseleave方法
		$(this).find($listBox).stop(true,false).animate({"height":"0px"},500);
		$(this).find($keyBox).addClass("hide");
	});
	}
}
   
 
/*
SearchBox
*/
$(function(){
//输入清空与默认值
	var shuru = $("form.search input.shuru");
	shuru.val("请输入搜索内容");
	shuru.focus(function(){
		if(shuru.val() == "请输入搜索内容"){
		$(this).val("");
		}
	});
	shuru.blur(function(){
		if(shuru.val()==""){
			$(this).val("请输入搜索内容");
		}
	});
	
//表单提交验证
$("form.search").submit(function(){
if(shuru.val()=="请输入搜索内容" || shuru.val()==""){
  alert("请输入搜索内容!");
   return false;
  }
if(shuru.val().length<2){
  alert("请输入两个汉字以上的搜索内容!");
   return false;
  }
});
})

/*top_nav*/
$(function(){
 $(".top_nav .top_nav_list li:has(div)").hover(function(){
  $(this).children('div').stop(true,true).slideDown(300)
  },function(){
  $(this).children('div').stop(true,true).slideUp(1)
  })
})

$(function(){
	$(".teachers_list_one_tags:odd").addClass("teacher_last")
})

$(function(){
 $("ul.nav li:has(div)").hover(function(){
  $(this).children('div').stop(true,true).slideDown(300)
  $(this).addClass("hover")
  },function(){
  $(this).children('div').stop(true,true).slideUp(1)
  $(this).removeClass("hover")
  })
})