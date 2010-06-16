/**
	 * 球の骨格を描く
	 * @author meowmeowcat
	 2010/06/16 20:11　とりあえず完成
	 */
#target "Illustrator CS3"
#include "D:/workspace_git/Common_ExtendScripts/commonLib.jsx ";
//変更

ew=eh=prompt ("球の直径は？", 30, "入力して下さい")

//ew=30
//eh=30

ew=mm_to_pt(ew);
eh=mm_to_pt(eh);

//等測図化（通常の円のみ。他は変形の時に同時に拡大する）
ew_t=fixSizeToTOSOKU(ew);
eh_t=fixSizeToTOSOKU(eh);
//円を描く
var e1=drawEllipse(0,0,ew,eh,false)//R
var e2=drawEllipse(0,0,ew,eh,false)//L
var e3=drawEllipse(0,0,ew,eh,false)//U

var e4=drawEllipse(0,0,ew_t,eh_t,false)//通常の円

//変形する
//　右側面
transFormMIGI(e1);
//　左側面
transFormHIDARI(e2);
//　上左
transFormUE(e3);

//線の設定
sen_no_settei(e1,true,"red",0.3,"round","round");
sen_no_settei(e2,true,"blue",0.3,"round","round");
sen_no_settei(e3,true,"green",0.3,"round","round");
sen_no_settei(e4,true,"black",0.3,"round","round");

function transFormMIGI(_trgt){
	//水平86.6%
	_trgt.resize(86.6,100); 
	//シアー-30,90
	//var transformationMatrix=app.getScaleMatrix(100*1.22, 100*Math.sin(_daendo)*1.22);
	//circlePageItemArray[k].transform (transformationMatrix);
	sheer(_trgt,-30)
	
}
//とりあえずy方向固定　後々拡張
function sheer(_trgt,_Angle,_dirAngle){
	_Angle=-_Angle;
	var mymatrix = new Matrix();
    mymatrix.mValueA = 1;
    mymatrix.mValueD = 1;
	//alert(_yAngle)
    mymatrix.mValueB = Math.tan(_Angle/180*Math.PI);//y
    mymatrix.mValueC = 0//Math.tan(_yAngle/180*Math.PI);//x
    mymatrix.mValueTX = 0;
    mymatrix.mValueTY =0;
    _trgt.transform(mymatrix);
	
	/*
	_dirAngle=_dirAngle/180*Math.PI;
	var mymatrix2 = new Matrix();
    mymatrix2.mValueA = Math.cos(_dirAngle);
	mymatrix2.mValueB = -Math.sin(_dirAngle);
	mymatrix2.mValueC = Math.sin(_dirAngle);
    mymatrix2.mValueD = Math.cos(_dirAngle);
	//alert(_yAngle)
    mymatrix2.mValueTX = 0;
    mymatrix2.mValueTY =0;
    //_trgt.transform(mymatrix2);
	*/
	//var mymatrix3=app.concatenateMatrix (mymatrix ,mymatrix2)
	//mymatrix3=app.concatenateMatrix (_trgt.matrix ,mymatrix3)
	
    //_trgt.transform(mymatrix3);
	
	return _trgt
}
function transFormHIDARI(_trgt){
	//水平86.6%
	_trgt.resize(86.6,100); 
	//シアー30,90
	sheer(_trgt,30)
}
function transFormUE(_trgt){
	//回転-45
	_trgt.rotate(-45);
	//水平122.47
	//垂直70.72
	_trgt.resize(122.47,70.72); 
	
}
