function formReg(str,stype){
	var Mreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-]){2,3}/; 
	var Treg = /^(13[0-9]{9})|(15[0-9]{9})|(18[0-9]{9})|(177[0-9]{8})|(147[0-9]{8})$/; 
	var creg = /^[1-9][0-9]{5}$/; 
	if(!Mreg.test(str) && stype=="mail"){
		alert("请填写正确的电子邮箱！")	
	}
	if(!Treg.test(str) && stype=="tel"){
		alert("请填写正确的手机号码！")	
	}
	if(!creg.test(str) && stype=="code"){
		alert("请填写正确的邮政编码！")	
	}
}


$(function(){
	var mailObj=$("#zmn_email");
	var telObj=$("#zmn_tel");
	var codeObj=$("#zmn_code");


	if(mailObj.size()>=1){
		mailObj.blur(function(){
			formReg($(this).val(),"mail");
		});
	}
	
	if(telObj.size()>=1){
		telObj.blur(function(){
			formReg($(this).val(),"tel");
		});
	}

	if(codeObj.size()>=1){
		codeObj.blur(function(){
			formReg($(this).val(),"code");
		});
	}

})