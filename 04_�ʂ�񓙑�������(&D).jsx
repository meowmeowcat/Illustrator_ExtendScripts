/**
	 * 面を非アイソメ軸に合わせる
	 * @author meowmeowcat
	 *2010/06/11 21:00 とりあえず完成の様子
	 */
#target "Illustrator CS3"
/*
(function(){
var o=app.activeDocument.selection[0];
(function(o){for(var i in o){try{i+=':'+o[i]}catch(e){i+=':'+e}$.writeln(i)}})(o);
})()*/

#include "D:/My Documents/Adobe Scripts/common/commonLib.jsx";
#include "D:/My Documents/Adobe Scripts/common/vec2d.jsx";

//var men=getMEN();
var kakudo=getKAKUDO();
var chijimi=getCHIJIMI(kakudo);
//alert(chijimi)
var daenkakudo_rad=getDAENKAKUDO(chijimi,"c");
//alert(chijimi+","+daenkakudo)
setDAENSIZE(daenkakudo_rad);

//情報取得　面、角度
function getMEN(){
//trace("getMEN x");
return "x"
}
function getKAKUDO(){
//trace("getKAKUDO 0");
var _k=prompt("楕円分度器の角度",0,"入力して下さい");
return (parseFloat(_k)-45)
}
function getCHIJIMI(_kakudo){
	var SIN35=0.577382716;
	//Math.sin(35.2666666666666667/180*Math.PI)
	var PI=Math.PI;
	var _kakudo=_kakudo/180*PI;
	var _sin=Math.pow(Math.sin(_kakudo),2)//*Math.sin(_kakudo);
	var _cos=Math.pow(Math.cos(_kakudo),2)//*Math.cos(_kakudo);
	var _chijimi=Math.sqrt(SIN35*SIN35*_sin+_cos);
	//trace("getCHIJIMI ,"+(SIN35*_sin+_cos));
	return _chijimi
}
function getDAENKAKUDO(_v,_type){
	var _daenkakudo;
	var PI=Math.PI;
	if(_type==null || _type==="k"){
		//角度から算出
		var SIN35=Math.sin(35.2666666666666667/180*Math.PI);
		//trace("getDAENDO sin20");
		var _kakudo=_kakudo/180*PI;
		var _sin=Math.sin(_kakudo)*Math.sin(_kakudo);
		var _cos=Math.cos(_kakudo)*Math.cos(_kakudo);
		var _chijimi=Math.sqrt(SIN35*_sin+_cos);
		_daenkakudo=Math.acos(_chijimi)// /PI*180;
	}else if(_type=="c"){
		//縮み率から算出
		_daenkakudo=Math.acos(_v)// /PI*180;
	}
	return _daenkakudo
}
function setDAENSIZE(_daendo){
//trace("setDAENSIZE");	
//円を選んでサイズ変える
//閉じてれば円
var pageItems = activeDocument.selection;
var circlePageItem;
var linePageItem;
for(var i=0;i<pageItems.length;i++){
		if(pageItems[i].closed){
			circlePageItem=pageItems[i];
			//trace(circlePageItem.height)
		}else{
			linePageItem=pageItems[i];
		}
}
var transformationMatrix=app.getScaleMatrix(100*1.22, 100*Math.sin(_daendo)*1.22);
circlePageItem.transform (transformationMatrix);
sen_no_settei(circlePageItem);
//円を回転
//線の方向ベクトルとる
var pathItems = activeDocument.selection;
var circlepathItem;
var linepathItem;
for(var i=0;i<pathItems.length;i++){
		if(pathItems[i].closed){
			circlePathItem=pathItems[i];
			////trace(circlePathItem.height)
		}else{
			linePathItem=pathItems[i];
		}
}
var a1=linePathItem.selectedPathPoints[0].anchor;
var a2=linePathItem.selectedPathPoints[1].anchor;

var v1=new vec2d(a1[0],a1[1]);
var v2=new vec2d(a2[0],a2[1]);
var lineV=new vec2d(a2[0]-a1[0],a2[1]-a1[1]);
var lineVAngle=Math.atan2(lineV.y,lineV.x)/Math.PI*180;
/*
var ca1=circlePathItem.selectedPathPoints[0].anchor;
var ca2=circlePathItem.selectedPathPoints[1].anchor;
var ca3=circlePathItem.selectedPathPoints[2].anchor;
var ca4=circlePathItem.selectedPathPoints[3].anchor;
////trace(ca1+","+ca2+","+ca3+","+ca4)
//2,4が短軸
var ctjV=new vec2d(ca4[0]-ca2[0],ca4[1]-ca2[1]);
var ctjVAngle=Math.atan2(ctjV.y,ctjV.x)/Math.PI*180;
*/
//var angle= ctjV.angleBetween(lineV)/Math.PI*180;
var transformationMatrix2=app.getRotationMatrix(-90+lineVAngle);
circlePageItem.transform (transformationMatrix2);
//alert(v1.y+","+v2.y)
//alert(lineV.angleBetween(ctjV)/Math.PI*180)
//alert(ctjVAngle)

}
function trace(_a){
	$.writeln(_a);
}
