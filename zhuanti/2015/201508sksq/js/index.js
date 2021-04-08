// JavaScript Document


$(function(){
 $(".top_nav .top_nav_list li:has(div)").hover(function(){
  $(this).children('div').stop(true,true).slideDown(300)
  },function(){
  $(this).children('div').stop(true,true).slideUp(1)
  })
})

$(function(){
 $("#main .floor2 .floor2_1 ul li strong:has('.hover')").hover(function(){
  $(this).children('.hover').stop(true,true).fadeIn(500)
  },function(){
  $(this).children('.hover').stop(true,true).fadeOut(500)
  })
})

$(function(){
 $("#main .floor7 .floor7_1 div a:has('img')").hover(function(){
  $(this).children('img').stop(true,true).fadeOut(500)
  },function(){
  $(this).children('img').stop(true,true).fadeIn(500)
  })
})


$(document).ready(function(){
	var move=$('.floor2_1');		
	var window_w = $(window).width();	
	if(window_w>1000){move.show();}
	$('.down').click( function () {$('html,body').animate({scrollTop: $('.floor8').offset().top + 'px'},'slow');});
		
});


$(document).ready(function(e) {			
	t = $('.top_header').offset().top;
	mh = $('#mian').height();
	fh = $('.top_header').height();
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t){
			$('.top_header').css('display','block');	
		}else{
			$('.top_header').css('display','none');	
		}
	})
});