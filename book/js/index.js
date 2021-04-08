// JavaScript Document


$(function(){
 $(".top_nav .top_nav_list li:has(div)").hover(function(){
  $(this).children('div').stop(true,true).slideDown(300)
  },function(){
  $(this).children('div').stop(true,true).slideUp(1)
  })
})

// 倒计时
var interval = 1000; 
function ShowCountDown(year,month,day,divname) 
{ 
var now = new Date(); 
var endDate = new Date(year, month-1, day); 
var leftTime=endDate.getTime()-now.getTime(); 
var leftsecond = parseInt(leftTime/1000); 
//var day1=parseInt(leftsecond/(24*60*60*6)); 
var day1=Math.floor(leftsecond/(60*60*24)); 
var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
var cc = document.getElementById(divname); 
cc.innerHTML ="<span class='day'>"+day1+"</span>"+"<span class='hour'>"+hour+"</span>"+"<span class='minute'>"+minute+"</span>"+"<span class='second'>"+second+"</span>";  
} 
window.setInterval(function(){ShowCountDown(2015,12,31,'time_l');}, interval); 


$(function(){
	
	setInterval(function(){$("#main .time .time_cen .upList_r ul li:first").animate({"margin-top":"-31"},1000,function(){
		$("#main .time .time_cen .upList_r ul li:first").clone().appendTo("#main .time .time_cen .upList_r ul")
		$("#main .time .time_cen .upList_r ul li:first").remove()
		$("#main .time .time_cen .upList_r ul li:last").css("margin-top","0")
	})},2000)
})

$(function(){
	$(window).load(function()  {
		$("#shopCart").height($(window).height());
		$(window).resize(function(){
			$("#shopCart").height($(window).height());
		})
		$("#shopCart .position").height($(window).height());
		$(window).resize(function(){
			$("#shopCart .position").height($(window).height());
		})
		$("#shopCart .liebiao").height($(window).height());
		$(window).resize(function(){
			$("#shopCart .liebiao").height($(window).height());
		})
		$("#shopCart").fadeIn(300)
		$(".hd").height($(window).height());
		$(window).resize(function(){
			$(".hd").height($(window).height());
		})
	});	 
	
})

$(function(){
		$("#shopCart .zhong").toggle(function(){
		$("#shopCart").stop(true,true).animate({"width":"284px"},500)
		},function(){
		$("#shopCart").stop(true,true).animate({"width":"43px"},500)
		})
})

$(function(){
 $(".duibi .c table tr:has(td)").hover(function(){
  $(this).children('td').stop(true,true).addClass("even")
  },function(){
  $(this).children('td').stop(true,true).removeClass("even")
  })
})

$(function(){
	$("#close9").click(function(){
		$(".hd").fadeOut(300)
		$("#blk9").fadeOut(300)
	})
	$("#ele9").click(function(){
		$(".hd").fadeIn(300)
		$("#blk9").fadeIn(300)
	})
	$("#ele9").click(function(){
		$("#di").fadeOut(1)
	})
	$("#ele8").click(function(){
		$("#di").fadeIn(1)
	})
})

$(function (){
	  $(".yuedu .tab ul li").each(function(index){//each变例，每一个a标签
		  $(this).mouseover(function(){//鼠标滑过a的时候
			  $(".yuedu .tabCen").removeClass("dis")//给news添加样式dis
			  $(".yuedu .tabCen:eq("+index+")").addClass("dis")//给对应news的index索引值删除dis样式
			  $(".yuedu .tab ul li").removeClass("hover")//先删除所有的a的样式hover
			  $(this).addClass("hover")//给对应的a添加样式hover
		  })
	  })
})

$(function(){
	var page=1;
	$(".yuedu .left").click(function(){
		$(".yuedu .dis ul li:first").animate({"margin-left":"-143"},300,function(){
			$(".yuedu .dis ul li:first").clone().appendTo(".yuedu .dis ul")
			$(".yuedu .dis ul li:first").remove()
			$(".yuedu .dis ul li:last").css("margin-left","0")
		})
	})//next 按钮
	$(".yuedu .right").click(function(){
		$(".yuedu .dis ul li:last").animate({"margin-left":"-143"},0,function(){
			$(".yuedu .dis ul li:last").clone().prependTo(".yuedu .dis ul")
			$(".yuedu .dis ul li:last").remove()
			$(".yuedu .dis ul li:first").animate({"margin-left":"0"},300)
		})
	})//pre 按钮
	
})



	$(function(){
		//book
		$("#books ul li a").each(function(index){
		  $("#books ul li a:eq("+index+")").click(function(){
			  $("#books ul li .zhe:eq("+index+")").css("display","block");
			  var b=$("#books ul li a h3:eq("+index+")").text();
			  var a=$("#ul").append("<li>"+b+"</li>"); 
			  my_book = $('#book_my_form').val();
			  $('#book_my_form').val(my_book?my_book+","+b:b);
			  //$a.clone().appendTo("#ul");
		  })
		})
		//zip		
		$("#main .book_zip ul li.shu1 .btnCart").each(function(index){
		  $(this).click(function(){
			  $("#main .book_zip ul li .zhe:eq("+index+")").css("display","block");
			  var b2=$("#main .book_zip ul li.shu1 .btnCart .toefl:eq("+index+")").val();
			  var a2=$("#ul").append("<li>"+b2+"</li>"); 
			  my_book = $('#book_my_form').val();
			  $('#book_my_form').val(my_book?my_book+","+b2:b2);
			  //$a2.clone().appendTo("#ul");
		  })
		})
		//删除
		$(".qing").click(function(){
			alert("确认清空吗？");
			location.reload();
			$('#book_my_form').val('');
		})
		//地址
		$("#blk9 .zqdizhi").each(function(index){
		  $(this).click(function(){
				var c=$("#blk9 .zqdizhi:eq("+index+")").val()
				$(".kuaidi2").val(c)
				$("#fenname").text(c)
		  })
		})
		
		
	})