document.writeln("		<form action=\"../../plus/diy_new.php\" id=\"new_bottom_form\" enctype=\"multipart/form-data\" class=\"bottom_tel ofh\" method=\"post\">");
document.writeln("		<input type=\"hidden\" name=\"action\" value=\"post\" />");
document.writeln("		<input type=\"hidden\" name=\"diyid\" value=\"31\" />");
document.writeln("		<input type=\"hidden\" name=\"do\" value=\"2\" />");
document.writeln("	  <input class=\"xingming\" type=\"text\" name=\'new_bottom_name\' id=\'new_bottom_name\' maxlength=\"11\"/>");
document.writeln("	  <input class=\"dianhua\" type=\"text\" name=\'new_bottom_tel\' id=\'new_bottom_tel\' maxlength=\"11\"/>");
document.writeln("	  <input type=\'hidden\' name=\'new_bottom_city\' id=\'new_bottom_city\' style=\'width:250px\'  class=\'intxt\' value=\'\' />");
document.writeln("	  <input type=\'hidden\' name=\'new_bottom_time\' id=\'new_bottom_time\' style=\'width:250px\'  class=\'intxt\' value=\'\' />");
document.writeln("	  <div class=\"sub_div\">");
document.writeln("		<input type=\"hidden\" name=\"dede_fields\" value=\"new_bottom_tel,text;new_bottom_city,text;new_bottom_time,text;new_bottom_name,text\" />");
document.writeln("		<input type=\"hidden\" name=\"dede_fieldshash\" value=\"2b54ea56d6aebe60471fbc066071aef5\" />");
document.writeln("		<input class=\"sub\" type=\"submit\" class=\"submit\" value=\"获取地址\" />");
document.writeln("	  </div>");
document.writeln("	  <div class=\"clear\"></div>");
document.writeln("	</form>");




$(function(){
	$fm = $("#new_bottom_form");
	$fmName = $("#new_bottom_form").find("input[name='new_bottom_name']");
	$fmTel = $("#new_bottom_form").find("input[name='new_bottom_tel']");
	$fmCity = $("#new_bottom_form").find("input[name='new_bottom_city']");
	$fmTime = $("#new_bottom_form").find("input[name='new_bottom_time']");
	$fmTel.val("请输入您的手机号码......");
	$fmTel.focus(function(){
		if($(this).val()=="请输入您的手机号码......"){
			$(this).val("");
		}
	});
	$fmTel.blur(function(){
		if($(this).val()==""){
			$(this).val("请输入您的手机号码......");
		}
	});
	
	$fmName.val("姓名");
	$fmName.focus(function(){
		if($(this).val()=="姓名"){
			$(this).val("");
		}
	});
	$fmName.blur(function(){
		if($(this).val()==""){
			$(this).val("姓名");
		}
	});
	//获取当前时间
	function currentTime(){
	var d = new Date(),str = '';
	str += d.getFullYear()+'-';
	str  += d.getMonth() + 1+'-';
	str  += d.getDate()+' ';
	str += d.getHours()+':'; 
	str  += d.getMinutes()+':'; 
	str+= d.getSeconds()+':'; 
	return str;
	}
	
//表单验证
	$fm.submit(function(){
		if($fmName.val()=="姓名"){
			alert("请输入您的真实姓名!");
			return false;
		}
		if($fmTel.val().length!=11 || $fmTel.val()=="请输入您的手机号码......"){
			alert("请输入正确的电话号码!");
			return false;
		}		
		
		$fmTime.val(currentTime);
		$fmCity.val(
			$(".nav_tel_tit .current").html()
		);
		return true;
	});
})