// JavaScript Document


$(function(){
 $(".top_nav .top_nav_list li:has(div)").hover(function(){
  $(this).children('div').stop(true,true).slideDown(300)
  },function(){
  $(this).children('div').stop(true,true).slideUp(1)
  })
})
$(function (){
	$("#main .floor2 .tab ul li").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候
			$("#main .floor2 .tabCen ul li").addClass("dis")//给news添加样式dis
			$("#main .floor2 .tabCen ul li:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			$("#main .floor2 .tab ul li").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
	})
})

$(function (){
	$("#main .floor4 .tab ul .TT").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候
			$("#main .floor4 .tabCen ul li").addClass("dis")//给news添加样式dis
			$("#main .floor4 .tabCen ul li:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			$("#main .floor4 .tab ul .TT").removeClass("hover")//先删除所有的a的样式hover
			$("#main .floor4 .tab ul .TT:eq("+index+")").addClass("hover")//给对应的a添加样式hover
		})
	})
})
$(function (){
	$("#main .floor10 .tab ul li").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候
			$("#main .floor10 .tabCen ul li").addClass("dis")//给news添加样式dis
			$("#main .floor10 .tabCen ul li:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			$("#main .floor10 .tab ul li").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
	})
})

$(document).ready(function(){
	var move=$('.floor2_1');		
	var window_w = $(window).width();	
	if(window_w>1000){move.show();}
	$('.down').click( function () {$('html,body').animate({scrollTop: $('.floor8').offset().top + 'px'},'slow');});
		
});


