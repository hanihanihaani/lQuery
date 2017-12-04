// $("#id名称")
/*
var $ = function(selector){
	var id = selector.substring(1);
	return document.getElementById(id);
}*/

// $(".类名")
/*
var $ = function(selector){
	var className = selector.substring(1);
	// var reg = /(^|\s)box1(\s|$)/i;
	var reg = eval("/(^|\\s)"+ className + "(\\s|$)/i")
	var aEle  = document.getElementsByTagName("*");
	var arr = [];
	for(var i=0;i<aEle.length;i++){
		if(reg.test(aEle[i].className)){
			arr.push(aEle[i]);
		}
	}
	return arr;
}
*/

// $(标签名)

var $ = function(selector){
	return document.getElementsByTagName(selector);
}