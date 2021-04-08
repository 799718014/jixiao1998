// JavaScript Document


$(function(){
 $(".top_nav .top_nav_list li:has(div)").hover(function(){
  $(this).children('div').stop(true,true).slideDown(300)
  },function(){
  $(this).children('div').stop(true,true).slideUp(1)
  })
})

$(function (){
	  $("#main .hd ul li:nth-child(2n)").addClass("right")
})

$(document).ready(function(){
	var move=$('#banner');		
	var window_w = $(window).width();	
	if(window_w>1000){move.show();}
	$('.bao').click( function () {$('html,body').animate({scrollTop: $('#fangshi').offset().top + 'px'},'slow');});
		
});
$(document).ready(function(){
	var move=$('#main');		
	var window_w = $(window).width();	
	if(window_w>1000){move.show();}
	$('.bao').click( function () {$('html,body').animate({scrollTop: $('#fangshi').offset().top + 'px'},'slow');});
		
});