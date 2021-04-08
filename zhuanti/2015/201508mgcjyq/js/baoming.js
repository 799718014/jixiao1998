//时间
window.onload = function(){
var nowDate = new Date();
var month=nowDate.getMonth() + 1
var month2=(month<10 ? "0"+month:month)//月
var date=nowDate.getDate()
var date2=(date<10 ? "0"+date:date);//日

var hours=nowDate.getHours()
var hours2=(hours<10 ? "0"+hours:hours);//时

var minutes=nowDate.getMinutes()
var minutes2=(minutes<10 ? "0"+minutes:minutes);//分

var seconds=nowDate.getSeconds()
var seconds2=(seconds<10 ? "0"+seconds:seconds);//秒

var str = nowDate.getFullYear()+"-"+month2+"-"+date2+" "+hours2+":"+minutes2+":"+seconds2+" ";
document.getElementById("zmn_time").value=str;//massage-time
}
//表单检测
function checkzmn_from() {
            	if(document.zmn_from.zmn_name.value=='' || document.zmn_from.zmn_name.value=='姓名'){
            		alert('请填写您的姓名');
            		document.zmn_from.zmn_name.focus();
            		return false;
            	}
				 if(document.zmn_from.zmn_tel.value=='' || document.zmn_from.zmn_tel.value=='电话'){
            		alert('请填写您的电话');
            		 document.zmn_from.zmn_tel.focus();
            		return false;
            	}
				 if(document.zmn_from.zmn_tel.value.length!=11){
            		alert('请填写正确的电话号码');
            		document.zmn_from.zmn_tel.focus();
            		return false;
            	}		
				 var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
				 var email_val = $("#zmn_email").val();
 				 if(!search_str.test(email_val)){       
     				alert("请填写正确的电子邮箱");
     				$('#zmn_email').focus();
     				return false;
 				}	
				 if(document.zmn_from.zmn_city.value=='' || document.zmn_from.zmn_city.value=='地址'){
            		alert('请正确填写您的地址');
            		 document.zmn_from.zmn_city.focus();
            		return false;
            	}							
	return true;   
}















