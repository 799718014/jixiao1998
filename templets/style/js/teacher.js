/*
*默认联动筛选功能无法满足需求。
*通过js实现了功能上的完善
*
*/
$(function(){
	$checkBox = $(".check_box_one");
	for(var i=0;i<$checkBox.length;i++){
		if($checkBox.eq(i).find("span").html()=="类别"){
			var $leibieBox = $checkBox.eq(i);
		}
		if($checkBox.eq(i).find("span").html()=="名师"){
			var $mingshiBox = $checkBox.eq(i);
		}
		if($checkBox.eq(i).find("span").html()=="阶段"){
			var $jieduanBox = $checkBox.eq(i);
		}
		if($checkBox.eq(i).find("span").html()=="级别"){
			var $jibieBox = $checkBox.eq(i);
		}
	}

	$jieduanBox.hide();
	$mingshiBox.hide();
	$jibieBox.hide();

//咨询顾问选中状态前端处理：
	var $currentHtml = $leibieBox.find("a.current").html();
	if($currentHtml=="咨询顾问"){
		$jieduanBox.hide();
		$mingshiBox.hide();
		$jibieBox.show();
		//隐藏VIP
		hideVip();
	}
	if($currentHtml=="留学申请顾问"){
		$jieduanBox.show();
		$mingshiBox.hide();
		$jibieBox.show();
		//隐藏白金
		hidebaiJin();
	}
	if($currentHtml=="满分名师"){
		$jieduanBox.hide();
		$mingshiBox.show();
		$jibieBox.show();
		//隐藏VIP与白金
		hideVip();
		hidebaiJin();
	}
	if($currentHtml=="课外活动规划师"){
		$jieduanBox.hide();
		$mingshiBox.hide();
		$jibieBox.show();
		//隐藏VIP与白金
		hideVip();
		hidebaiJin();
	}
	
	//处理---->解除类别中所有href值中的t_mingshi与t_jieduan属性。专属属性，只有当被选中才会出现。
	$leibieBox.find("a").each(function(){
		//不分名师
		curtUrl($(this),'t_mingshi');
		//不分阶段
		curtUrl($(this),'t_jieduan');
		/*咨询顾问不分级别
		if($(this).html()=="咨询顾问"){
		curtUrl($(this),'t_jibie');
		}
		*/
		//没有vip的类别
		if($(this).html()=="满分名师"  || $(this).html()=="课外活动规划师" || $(this).html()=="咨询顾问"){
		curtUrl($(this),'VIP');
		}
		//没有白金的类别
		if($(this).html()=="满分名师"  || $(this).html()=="课外活动规划师" || $(this).html()=="留学申请顾问"){
		curtUrl($(this),'%B0%D7%BD%F0');
		curtUrl($(this),'白金');
		}
		//全部：不分级别、名师、阶段
		if($(this).html()=="全部"){
		curtUrl($(this),'t_jieduan');
		curtUrl($(this),'t_mingshi');
		curtUrl($(this),'t_jibie');
		}
	});
	
//方法：隐藏VIP
	function hideVip(){
		$jibieBox.find("a").each(function(){
			if($(this).html()=="VIP"){
				$(this).hide();
			}
		});
	}

//方法：隐藏白金
	function hidebaiJin(){
		$jibieBox.find("a").each(function(){
			if($(this).html()=="白金"){
				$(this).hide();
			}
		});
	}
	
//方法：去除指定对象中$obj url中参数名（或者参数值）含有str的参数组
	function curtUrl($obj,str){
		if($obj.attr("href")!=undefined){
			manfen_url = $obj.attr("href").split('&');
			for(var i=0;i<manfen_url.length;i++){
				if(manfen_url[i].indexOf(str)>=0){
				manfen_url.splice(i,1);//
				}
			}
			manfen_url = manfen_url.join("&");
			$obj.attr("href",manfen_url);
		}
	}
})
