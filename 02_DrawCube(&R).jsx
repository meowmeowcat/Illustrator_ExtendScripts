//ダイアログを出して、幅、高さ、奥行き奥行きを入力させて立方体をつくる
#include "D:/My Documents/Adobe Scripts/common/commonLib.jsx";

drawCube();

function drawCube(){

//ダイアログ
var haba=mm_to_pt(prompt("幅は？",100));
var takasa=mm_to_pt(prompt("高さは？",100));
var okuyuki=mm_to_pt(prompt("奥行きは？",200));

//等測投影図から等測図へ変換
haba*=1/CHIJIMIRITSU_TOKAKUTOEI;
takasa*=1/CHIJIMIRITSU_TOKAKUTOEI;
okuyuki*=1/CHIJIMIRITSU_TOKAKUTOEI;

var docSize=getDocumentSize();
var rX=0;
var rY=-docSize.h*25.4/72/2;

//立方体を作る
var rect_ue=drawRect(rX,rY,haba,okuyuki);
var rect_mae=drawRect(rX,rY+parseFloat(okuyuki),haba,takasa);
var rect_soku=drawRect(rX+parseFloat(okuyuki),rY+parseFloat(okuyuki),okuyuki,takasa);

//変形
transformUE(rect_ue);
transFormMAE(rect_mae);
trasFormSOKU(rect_soku);

//線の設定
sen_no_settei(rect_ue,true,"red",0.1,"round","round");
sen_no_settei(rect_mae,true,"green",0.1,"round","round");
sen_no_settei(rect_soku,true,"blue",0.1,"round","round");

//グループ化
//var rectsGroup = app.activeDocument.groupItems.add();
//rectsGroup.add(rect_ue);
//rectsGroup.add(rect_mae);

function transformUE(_rect){
	_rect.rotate(-45);
	_rect.resize(100,KATAMUKE_Y_PER); 
}
function transFormMAE(_rect){
	_rect.rotate(45);
	_rect.resize(100,KATAMUKE_Y_PER);
	_rect.rotate(-60);
	_rect.left=rect_ue.left;
	_rect.top=rect_ue.top-rect_ue.height+haba*CHIJIMIRITSU_TOKAKUTOEI*SIN30;
}
function trasFormSOKU(_rect){
	_rect.rotate(-45);
	_rect.resize(100,KATAMUKE_Y_PER);
	_rect.rotate(60)
	_rect.left=rect_mae.left+haba*CHIJIMIRITSU_TOKAKUTOEI*Math.cos(30/180*Math.PI);
	_rect.top=rect_ue.top-haba*CHIJIMIRITSU_TOKAKUTOEI*SIN30;
}

}
