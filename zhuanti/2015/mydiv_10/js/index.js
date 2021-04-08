// JavaScript Document


$(function(){
 $(".top_nav .top_nav_list li:has(div)").hover(function(){
  $(this).children('div').stop(true,true).slideDown(300)
  },function(){
  $(this).children('div').stop(true,true).slideUp(1)
  })
})
$(function (){
	$("#main .tab ul li").each(function(index){//each变例，每一个a标签
		$(this).click(function(){//鼠标滑过a的时候
			$("#main .tabCen ul li").addClass("dis")//给news添加样式dis
			$("#main .tabCen ul li:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			$("#main .tab ul li").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
	})
})


$(document).ready(function(){
	var move=$('.cenNav');		
	var window_w = $(window).width();	
	if(window_w>1000){move.show();}
	$('.cenNav .n2').click( function () {$('html,body').animate({scrollTop: $('.floor2').offset().top + 'px'},'slow');});
	$('.cenNav .n3').click( function () {$('html,body').animate({scrollTop: $('.floor3').offset().top + 'px'},'slow');});
	$('.cenNav .n4').click( function () {$('html,body').animate({scrollTop: $('.floor4').offset().top + 'px'},'slow');});
	$('.cenNav .n5').click( function () {$('html,body').animate({scrollTop: $('.floor5').offset().top + 'px'},'slow');});
	$('.cenNav .n6').click( function () {$('html,body').animate({scrollTop: $('.floor6').offset().top + 'px'},'slow');});
		
});
