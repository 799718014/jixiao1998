/*
 * Copyright 2015, VKO v1.0
 * @author lianghaibin
 */
//匿名函数
(function(){

	window['zmn'] = {}; //注册命名空间 'zmn' 到window对象上   

	//注册表单
	zmn.formReg=function(formID,regArr,blur,fn){ 

		if(regArr.length<=0){
			return false;
		}

		var Mreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-]){2,3}/; 
		var Treg = /^(13[0-9]{9})|(15[0-9]{9})|(18[0-9]{9})|(177[0-9]{8})|(147[0-9]{8})$/; 
		var creg = /^[1-9][0-9]{5}$/;

		var nullMsg={"zmn_name":"请填写用户名！","zmn_tel":"请填写电话！","zmn_book":"请填写书名！","zmn_code":"请填写邮编！","zmn_email":"请填写邮箱！"}
		var strMsg="";
		for(i=0;i<regArr.length;i++){
			strMsg=$("#"+regArr[i]).val();
			if(!$.trim(strMsg)){
				alert(nullMsg[regArr[i]]);
				return false;
			}else{
				if(!Mreg.test(strMsg) && regArr[i]=="zmn_email"){
					alert("请填写正确的电子邮箱！");
					return false;
				}
				if(!Treg.test(strMsg) && regArr[i]=="zmn_tel"){
					alert("请填写正确的手机号码！");
					return false;
				}
				if(!creg.test(strMsg) && regArr[i]=="zmn_code"){
					alert("请填写正确的邮政编码！");
					return false;
				}
			}
			
		}

		var timer = new Date();
		$("#zmn_time").val(timer);


		if(blur!="blur"){
			$(formID).submit();
			if(!fn){
				fn();
			}
		}
	}

	//Y切屏滚动效果
	zmn.rollBoxY=function(box,rollArr){
		var box=$(box);

		//函数参数的属性值
		var rollArr={
			speed : rollArr.speed || 500, //speed滚动速度
            line : rollArr.line || 2, //line每次滚动个数
            timer : rollArr.timer || 3000, //滚动间隔
            way : rollArr.way || "top" //滚动方向
		};

		//少于滚动个数，停止滚动
		if(box.children().size()<=rollArr.line){
			return false;
		}

		//初始子元素外包
		var boxChilden=$(box.html());
		box.children().wrapAll("<div class='box_wp' style='position:relative;'></div>");
		var box_wp=$(".box_wp",box).append(boxChilden);



		var initTop=box_wp.height()/2;
		
		if(rollArr.way=="bottom"){ //如果向下滚动，初始外包top

			box_wp.css("top",-initTop);
		}else{
			box_wp.css("top",0);
		}


		rollBoxMove();

        //运动框架
		function rollBoxMove(){
			var nowTop=parseFloat(box_wp.css("top"));  //读取内容现高度
			var iTarget=iTargetFn(rollArr.way); //得到目标值
			clearInterval(rollArr.rollBoxTimer1);

			rollArr.rollBoxTimer1=setInterval(function(){
				box_wp.animate({
					"top":iTarget
				},rollArr.speed,function(){
					var size=box_wp.children().size();
					nowTop=parseFloat(box_wp.css("top")); 
					//判断制作无缝效果
					if(rollArr.way=="bottom" && nowTop >= box.height()-initTop){
						var list=box_wp.children().slice(size/2,size);
						box_wp.prepend(list).css("top",nowTop-initTop);
					}else if(rollArr.way=="top" && nowTop <= -initTop){
						var list=box_wp.children().slice(0,size/2);
						box_wp.append(list).css("top",0);
					}
					iTarget=iTargetFn(rollArr.way);
				});
			},rollArr.timer)
		}

		box.hover(function(){
			clearInterval(rollArr.rollBoxTimer1);
		},function(){
			rollBoxMove();
		})

		function iTargetFn(way){
			var h1=box_wp.children().innerHeight();
			var nowTop=parseFloat(box_wp.css("top"));
			if(way=="bottom"){
				return nowTop+h1*rollArr.line;
			}else{
				return nowTop-h1*rollArr.line;
			}
		}
	}


	//x切屏滚动效果
	zmn.rollBoxX=function(box,bCld,line,auto,marginWidth){
		var box=box,bCld=box.find(bCld);
		var widC=bCld.innerWidth(); //单个子块宽度
		var widF=box.innerWidth(); //外包BOX的宽度
		var heiF=box.innerHeight(); //外包BOX的高度
		var minSize=parseInt(widF/widC); //能看到的子集个数
		var marW=marginWidth || (widF%widC)/minSize; //子集元素间距
		var size=bCld.size(); //子集个数
		
		//定义子元素间距
		bCld.css({ 
			"margin-right":marW
		})

		//当少于一屏时，不滚动
		if(bCld.size()<=minSize){
			return false;
		}
		
		//初始子元素外包
		var boxChilden=$(box.html());
		box.children().wrapAll("<div class='box_wp' style='position:relative;'></div>");
        box.after("<a class='rollleft' href='javascript:;' target='_self'></a><a class='rollright' href='javascript:;' target='_self'></a>")
		var box_wp=$(".box_wp",box).append(boxChilden);
		var initLeft=(widC+marW)*size;
		var iTarget=0;
		box_wp.css({
			"width":initLeft*2,
			"height":heiF,
			"left":-initLeft
		})
		
		if(auto){
			rollBoxLMove("right");
		}
		

		//运动框架
		function rollBoxLMove(way){
			var nowLeft=parseFloat(box_wp.css("left"));  //读取内容现高度
			
			clearInterval(box.rollBoxTimer2);

			box.rollBoxTimer2=setInterval(function(){
				iTarget=iTargetLFn(way); //得到目标值

				box_wp.animate({
					"left":iTarget
				},200,function(){
					nowLeft=parseFloat(box_wp.css("left"));
					//判断制作无缝效果
					if(way=="left" && nowLeft <= -initLeft){
						var list=box_wp.children().slice(0,size);
						box_wp.prepend(list).css("left",nowLeft+initLeft);
					}else if(way=="right" && nowLeft >= box.width()-initLeft){
						var list=box_wp.children().slice(size,size*2);
						box_wp.append(list).css("left",nowLeft-initLeft);

					}
				});
			},3000);

			//移上去停止
			box.hover(function(){
				clearInterval(box.rollBoxTimer2);
			},function(){
				rollBoxLMove("right");
			})
			$(".rollleft,.rollright").hover(function(){
				clearInterval(box.rollBoxTimer2);
			},function(){
				rollBoxLMove("right");
			})
		}

		//左右点击事件
		$(".rollleft").bind("click",function(){
			var _this=$(this);
			rollHand(_this,"left");
		})
		$(".rollright").bind("click",function(){
			var _this=$(this);
			rollHand(_this,"right");
		})

		function rollHand(dom,handWay){ //手动点击效果
			var djcs=parseInt(dom.attr("djcs"));
			var list=null;
			iTarget=iTargetLFn(handWay); //得到目标值
			if(!djcs || djcs==0){
				dom.attr("djcs","1");
				box_wp.animate({
					"left":iTarget
				},200,function(){
					nowLeft=parseFloat(box_wp.css("left"));
					if(line==1){
						box.attr("index",(Math.abs(nowLeft/widC))%size);
					}
					if(handWay=="left" && nowLeft <= -initLeft){
						list=box_wp.children().slice(0,size);
						box_wp.prepend(list).css("left",nowLeft+initLeft);
					}else if(handWay=="right" && nowLeft >= box.width()-initLeft){
						list=box_wp.children().slice(size,size*2);
						box_wp.append(list).css("left",nowLeft-initLeft);

					}
					dom.attr("djcs","0");
				});
			}
		}


		function iTargetLFn(way){
			var nowLeft=parseFloat(box_wp.css("left"));
			if(way=="left"){
				return nowLeft-(widC+marW)*line;
			}else{
				return nowLeft+(widC+marW)*line;
			}
		}


	}

	//文字上下滚动
	zmn.rollText=function(txt,speed,way){
		var txt=$(txt);
		//初始子元素外包
        txt.children().wrapAll("<div class='txt_bx'></div>");
        var initH1=$(".txt_bx",txt).height();
        //子高度小于父级，停止效果
		if($(".txt_bx",txt).height() < txt.height() ){
			return false;
		}
	    txt.append(txt.html()).children().wrapAll("<div class='txt_wp' style='position:relative;'></div>");
		var txt_wp=$(".txt_wp",txt); 

		
		if(way=="bottom"){ //如果向下滚动，初始外包top
			txt_wp.css("top",-initH1);
		}
		
		rollTextMove();

        //运动框架
		function rollTextMove(){
			clearInterval(txt.rollTxtTimer1);
			var nowTop=0;
			txt.rollTxtTimer1=setInterval(function(){
				nowTop=parseFloat(txt_wp.css("top"));  //读取内容现高度
				//判断制作无缝效果
				if(way=="bottom" && nowTop >= txt.height()-initH1){
					var list2=txt_wp.children().slice(1);
					txt_wp.prepend(list2).css("top",nowTop-initH1);
					return false;
				}else if(way=="top" && nowTop <= -initH1){
					var list2=txt_wp.children().slice(0).attr("a","s");
					txt_wp.append(list2).css("top",0);
					return false;
				}

				if(way=="bottom"){
					txt_wp.css("top",nowTop+speed);
				}else{
					txt_wp.css("top",nowTop-speed);
				}
				
			},30);
		}
		txt.hover(function(){
			clearInterval(txt.rollTxtTimer1);
		},function(){
			rollTextMove();
		})
	}


	//焦点图显隐效果
	zmn.showPic=function(O,oCld){
		var O=$(O),oCld=$(oCld);


		oCld.css({//初始图片样式
			"z-index":10,
			"opacity":0
		}).eq(0).css({	
			"z-index":11,
			"opacity":1
		})

		O.append("<div class='dian'></div><a class='dian_arr1' href='javascript:;' target='_self'></a><a class='dian_arr2' href='javascript:;' target='_self'></a>");

		var dian=$(".dian",O);

		oCld.each(function(){
			var i=$(this).index();
			if(i==0){
				dian.append($("<span class='dsel'></span>"));
			}else{
				dian.append($("<span></span>"));
			}
		});
		
		dian.find("span").bind("click mouseover",function(){

			var _index=$(this).index(), bIndex=dian.find("span").index($(".dsel",dian));
			if(_index==bIndex){
				return false;
			}
			$(this).addClass("dsel").siblings("span").removeClass("dsel");
			
			oCld.eq(bIndex).css("z-index",10);
			oCld.eq(_index).css("z-index",11);

			oCld.eq(bIndex).animate({
				"opacity":0
			},1000);
			oCld.eq(_index).animate({
				"opacity":1
			},1000);
		})

		$(".dian_arr1",O).bind("click",function(){
			O.num = dian.find("span").index($(".dsel",O));
			O.num--;
			if(O.num<0){
				O.num=dian.find("span").size()-1;
			}
			dian.find("span").eq(O.num).click();
		});
		$(".dian_arr2",O).bind("click",function(){
			O.num = dian.find("span").index($(".dsel",O));
			O.num++;
			if(O.num>=dian.find("span").size()){
				O.num=0;
			}
			dian.find("span").eq(O.num).click();
		});

		
		O.showpicInt = null;
		O.hover(function(){
			clearInterval(O.showpicInt);
		},function(){
			O.showpicInt = setInterval(function(){
				O.num = dian.find("span").index($(".dsel",O));
				O.num++;
				if(O.num>=dian.find("span").size()){
					O.num=0;
				}
				dian.find("span").eq(O.num).click();
				
			},5000);
		}).mouseout();
	}

	//日历效果
	zmn.setCalendar=function(place,dateArr){
		var place=$(place);
		var mydate=new Date();
		var nowYear=mydate.getFullYear(),nowMonth=mydate.getMonth()+1,nowDate=mydate.getDate(); //当天是哪年，哪月，哪日
		var nowMonthStr="";
		switch(nowMonth){
			case 1:
			 	nowMonthStr="<strong>1/</strong>January";
			  	break;
			case 2:
			  	nowMonthStr="<strong>2/</strong>February";
			  	break;
			case 3:
			 	nowMonthStr="<strong>3/</strong>March";
			  	break;
			case 4:
			  	nowMonthStr="<strong>4/</strong>April";
			  	break;
			case 5:
			 	nowMonthStr="<strong>5>_3C/strongMay";
			  	break;
			case 6:
			  	nowMonthStr="<strong>6/</strong>June";
			  	break;
			case 7:
			 	nowMonthStr="<strong>7/</strong>July";
			  	break;
			case 8:
			  	nowMonthStr="<strong>8/</strong>August";
			  	break;
			case 9:
			 	nowMonthStr="<strong>9/</strong>September ";
			  	break;
			case 10:
			  	nowMonthStr="<strong>10/</strong>October ";
			  	break;
			case 11:
			 	nowMonthStr="<strong>11/</strong>November";
			  	break;
			case 12:
			  	nowMonthStr="<strong>12/</strong>December";
			  	break;
		}

		var dateTitle="<div class='calendar_top'>"+ nowMonthStr +"</div>" //日历标题
		var weekBox="<ul class='weekbox fc'><li>Sun</li><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li></ul>"  //星期提示排列
		var dateList="<ul class='datelist fc'>"+ makeCalendar(nowYear,nowMonth,nowDate) +"</ul>" //日期排列
		
		

		place.append(dateTitle).append(weekBox).append(dateList);

		$(".datelist li").slice(0,7).css("z-index","10");
		$(".datelist li").slice(7,14).css("z-index","9");
		$(".datelist li").slice(14,21).css("z-index","8");
		$(".datelist li").slice(21,28).css("z-index","7");
		$(".datelist li").slice(28,35).css("z-index","6");
		
		function makeCalendar(y,m,d){
			var dateLi="";
			
			var wF=setDay(y,m,1); //某月第一天是周几
			var wL=setDay(y,m,maxDay(y,m)); //某月最后一天是周几
			var lM=(m > 1)?(m-1):12; //上个月是几月
			var lY=(m > 1)?y:(y-1); //上个月是哪年
			var lMD=maxDay(lY,lM);  //上个月有多少天
			
			for(i=0;i<=(wF-1);i++){ //上月余白的日期
				dateLi=dateLi + "<li></li>";
			}

			var stateDay="";
			for(j=1;j<=maxDay(y,m);j++){  //本月的日期
				stateDay=0;
				if(dateArr[j]){
					if(dateArr[j].state==1){
						stateDay="stateDay1";
					}else if(dateArr[j].state==2){
						stateDay="stateDay2";
					}else if(dateArr[j].state==3){
						stateDay="stateDay3";
					}
				}
				if(j==d){
					dateLi=dateLi + "<li class='day " + stateDay + "' style='color:red;' day='" + j + "' state='" + stateDay + "'>" + j + "</li>";
				}else{
					dateLi=dateLi + "<li class='day " + stateDay + "' day='" + j + "' state='" + stateDay + "'>" + j + "</li>";
				}
			}
			for(k=1;k<=(6-wL);k++){  //下月余白的日期
				dateLi=dateLi + "<li></li>";
			}

			return dateLi;
		}
		$(".stateDay1,.stateDay2,.stateDay3",place).hover(function(){
			var _ind = (parseInt($(".datelist li").index($(this)))+1)%7;
			var dayNum=$(this).attr("day");
			var stateStr=$(this).attr("state");
			$(this).addClass(stateStr+"_hover");
			$(this).html(dateArr[dayNum].typeName);
			if(_ind==1){
				$(this).append("<span style='left:0;'>"+ dateArr[dayNum].info +"</span>")
			}else if(_ind==2){
				$(this).append("<span style='left:0;'>"+ dateArr[dayNum].info +"</span>")
			}else if(_ind==3){
				$(this).append("<span style='left:0;'>"+ dateArr[dayNum].info +"</span>")
			}else if(_ind==4){
				$(this).append("<span style='left:0;'>"+ dateArr[dayNum].info +"</span>")
			}else if(_ind==5){
				$(this).append("<span style='right:0;'>"+ dateArr[dayNum].info +"</span>")
			}else if(_ind==6){
				$(this).append("<span style='right:0;'>"+ dateArr[dayNum].info +"</span>")
			}else if(_ind==0){
				$(this).append("<span style='right:0;'>"+ dateArr[dayNum].info +"</span>")
			}
			
		},function(){
			var dayNum=$(this).attr("day");
			var stateStr=$(this).attr("state");
			$(this).removeClass(stateStr+"_hover");
			$(this).find("span").remove();
			$(this).html(dayNum);
		});
		
		function setDay(y,m,d){  //取某天是周几，0代表星期七
			var D1=new Date(y+"/"+m+"/"+d);
			return D1.getDay();
		}
		function maxDay(y,m){ //最大天数
			var D2=new Date(y,m,0);
			return D2.getDate();
		}
	}

	//百叶窗
	zmn.setByc=function(domF,domT,domB){
		var domF=domF,domT=domF.find(domT),domB=domF.find(domB);
		domB.eq(0).show();
		domT.bind("click",function(){
			var _inx=domT.index($(this));
			domT.removeClass('hover');
			$(this).addClass("hover");
			if(domB.eq(_inx).is(':hidden')){
				domB.slideUp();
				domB.eq(_inx).slideDown();
			}
		});
	}

	//首页下拉大广告
	zmn.indexAD=function(adArr){

		if(adArr.source.indexOf($("script[source]").attr("source"))<0){
			return false;
		}

		if(!compareTime(adArr.startTime,adArr.endTime) || !adArr.invalid){
			return false;
		}


		var adArrNow={
			"imgUrl":adArr.imgUrl || "javascript:;",
			"imgSrc":adArr.imgSrc
		}
		if(adArr.imgUrl){
			adArrNow.tq="";
			adArrNow.target="_blank";
		}else{
			adArrNow.tq="a_kefu";
			adArrNow.target="_self";
		}

		var adStr=$('<style>.adMark{position:fixed;z-index:995;left:50%;top:50%;width:'+ adArr.width +'px;height:'+ adArr.height +'px;margin:-'+ adArr.height/2 +'px 0 0 -'+ adArr.width/2 +'px;}.adMark_time{position:absolute;z-index:998;left:620px;top:347px;width:24px;height:28px;display:block;text-align:center;font:bold 20px/28px "SimHei";}.adMark_close{position:absolute;z-index:999;right:0;top:0;width:48px;height:46px;display:block;}.adMark_img{display:block;position:relative;z-index:995;}</style>'+'<div id="adMark" class="adMark" style="display:none;"><span class="adMark_time">'+ thanTime(adArr.endTime) +'</span><a class="adMark_close" target="_self" href="javascript:;"><img src="images/20151218/close.png"></a><a class="adMark_img" href="'+ adArrNow.imgUrl +'" class="'+ adArrNow.tq +'" target="'+ adArrNow.target +'"><img src="'+ adArrNow.imgSrc +'" /></a></div>');

		$("body").append(adStr);
		var adMark=$("#adMark");
		$("#adMark img").load(function(){
			var index_t1=setTimeout(function(){
				$("#adMark").show(500,"linear",function(){
					var index_t2=setTimeout(function(){
						$("#adMark").remove();
					},8000);
				});
			},1000);
			
			
		})

		adMark.find(".adMark_close").click(function() {
			adStr.remove();
		});

		adMark.find(".a_kefu").click(function(){
			TQKF.kefuimg.Distrabute()
		})
		
		function thanTime(d2){
			var d=new Date();
			var d2=new Date(d2.replace(/-/g,"default.htm")).getTime(); //结束时间
			var second = 1000;
			var minutes = 1000*60;
			var hours = minutes*60;
			var days = hours*24;
			return parseInt((d2-d)/days);

		}

		//时间对比
		function compareTime(d1,d2){
			var d=new Date();
			var d1=new Date(d1.replace(/-/g,"default.htm"));
			var d2=new Date(d2.replace(/-/g,"default.htm"));
			if(d>d1 && d<d2){
				return true;
			}else{
				return false;
			}
		}
	}

})();


//切换效果
(function($){
    $.fn.extend({
        ontabs: function(s1,s2,cls,sj,xg) {  //wp为外包元素，s1为切换元素，s2为切换内容元素，cls为选中元素样式，sj为触发事件，xg=animate为滑动效果
            return this.each(function() {
                var _this=$(this),tabWid,tabLeft;
                var msj = _this.attr("sj") || sj || "mouseover";
                var sd = _this.find(s1).filter("."+cls),sdn = 0,delayTime = [];
                _this.attr("sj",msj);
                if(sd.length>0){
                    sdn = _this.find(s1).index(sd);
                    _this.find(s2).hide().eq(sdn).show();
                    animate(_this.find(s1).eq(sdn),sdn);
                };
                if(msj=="mouseover"){
                    _this.find(s1).hover(function() {
                            var _self=$(this), _index=_self.index();
                            delayTime[_index] = setTimeout(function() {
                                animate(_self,_index);
                            },200)
                        },
                        function() {
                            var _index=$(this).index();
                            clearTimeout(delayTime[_index]);
                        })
                }else{
                    _this.find(s1).bind(msj,function(){
                        var _self=$(this), _index=_self.index();
                        animate(_self,_index);
                    })
                }
                function animate(_self,_index){
                    if(xg=="animate"){
                        tabWid=$(_self).width() + parseInt($(_self).css("padding-left")) + parseInt($(_self).css("padding-right"))+ parseInt($(_self).css("border-right-width"))+ parseInt($(_self).css("border-left-width"));
                        tabLeft=$(_self).offset().left-parseInt($(_self).parent().offset().left);
                        $(_self).siblings("em").animate({"left":tabLeft,"width":tabWid},200);
                    }
                    _this.find(s1).removeClass(cls).eq(_index).addClass(cls);
                    _this.find(s2).hide().eq(_index).show();
                }
            });
        }
    });
})(jQuery);
