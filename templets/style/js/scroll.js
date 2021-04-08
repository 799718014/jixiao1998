// JavaScript Document

// JavaScript Document
(function($){    
$.fn.extend({    
        Scroll:function(opt,callback){    
                //参数初始化    
                if(!opt) var opt={};    
                var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮    
                var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮    
                var timerID;    
                var _this=this.eq(0).find("ul:first");    
                var lineH = _this.find("li:first").width(), //获取行高    
                    
                line = opt.line?parseInt(opt.line,10):parseInt(this.width()/lineH,10)
                speed = opt.speed?parseInt(opt.speed,10):5000; //卷动速度，数值越大，速度越慢（毫秒）    
                timer = opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）    
                    
                //timer = 3000;    
               if(line==0) line=1;    
                var upHeight=0-line*lineH;    
                //滚动函数    
                var scrollUp=function(){    
                        _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定    
                        _this.animate({    
                                marginLeft:upHeight    
                        },speed,function(){    
                                for(i=1;i<=line;i++){    
                                        _this.find("li:first").appendTo(_this);    
                                }    
                                _this.css({marginLeft:0});    
                                _btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件    
                        });    
   
                }    
                //Shawphy:向下翻页函数    
                var scrollDown=function(){    
                        _btnDown.unbind("click",scrollDown);    
                        for(i=1;i<=line;i++){    
                                _this.find("li:last").show().prependTo(_this);    
                        }    
                        _this.css({marginLeft:upHeight});    
                        _this.animate({    
                                marginLeft:0    
                        },speed,function(){    
                                _btnDown.bind("click",scrollDown);    
                        });    
                }    
               //Shawphy:自动播放    
                var autoPlay = function(){    
                        if(timer)timerID = window.setInterval(scrollUp,timer);    
                };    
                var autoStop = function(){    
                        if(timer)window.clearInterval(timerID);    
                };    
                 //鼠标事件绑定    
                _this.hover(autoStop,autoPlay).mouseout();    
                _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定    
                _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);    
   
        }           
})    
})(jQuery);    
   
$(document).ready(function(){    
        $("#liuxue").Scroll({line:1,speed:500,timer:null,up:"btn2",down:"btn1"});    
});  
$(document).ready(function(){    
        $("#tuofu").Scroll({line:1,speed:500,timer:null,up:"btn4",down:"btn3"});   
});  
$(document).ready(function(){    
        $("#sat").Scroll({line:1,speed:500,timer:null,up:"btn6",down:"btn5"});    
});  
$(document).ready(function(){    
        $("#gre").Scroll({line:1,speed:500,timer:null,up:"btn8",down:"btn7"});    
});  
$(document).ready(function(){    
        $(".type_floors_right_rongyu_box").Scroll({line:1,speed:500,timer:3000,up:"btn10",down:"btn9"});    
});