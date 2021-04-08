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
            	if(document.zmn_from.name.value=='' || document.zmn_from.name.value=='姓名'){
            		alert('请填写您的姓名');
            		document.zmn_from.name.focus();
            		return false;
            	}
				 if(document.zmn_from.tel.value=='' || document.zmn_from.tel.value=='电话'){
            		alert('请填写您的电话');
            		 document.zmn_from.tel.focus();
            		return false;
            	}
				 if(document.zmn_from.tel.value.length!=11){
            		alert('请填写正确的电话号码');
            		document.zmn_from.tel.focus();
            		return false;
            	}
				 if(document.zmn_from.school.value=='' || document.zmn_from.school.value=='学校'){
            		alert('请填写您在读的学校');
            		 document.zmn_from.school.focus();
            		return false;
            	}						
				 if(document.zmn_from.zdschool.value=='' || document.zmn_from.zdschool.value=='年级'){
            		alert('请填写您在读的年级');
            		 document.zmn_from.zdschool.focus();
            		return false;
            	}					
	return true;   
}















