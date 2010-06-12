#target "Illustrator CS3"
#include "D:/My Documents/Adobe Scripts/common/commonLib.jsx";
#include "D:/My Documents/Adobe Scripts/common/vec2d.jsx";
//３軸を描いてy,x,z軸方向について入力された情報から線を引く

//入力を受け付ける
var d_y=prompt ("Y軸上に置く点をすべて指定してください\n例）1,3,6", -1, "入力してね")//y
var d_x=prompt ("X軸上に置く点をすべて指定してください\n例）1,3,6", -1, "入力してね")//x
var d_z=prompt ("Z軸上に置く点をすべて指定してください\n例）1,3,6", -1, "入力してね")//z

//テスト
//d_y="10,20,20,30";//"0,20,40,50";
//d_x="0,40,30,55";//"20,15,15,10";
//d_z="10,20,30,50";

//コンマで分解する

if(d_y!=-1){var ar_y = d_y.split( /\,/ )};
if(d_x!=-1){var ar_x = d_x.split( /\,/ )};
if(d_z!=-1){var ar_z = d_z.split( /\,/ )};


var tan30=0.57735;
var cos30=0.866;
var sin30=0.5;
var sin60=0.866;
var cos60=0.5;

//３軸を描く ＊あとでコメントアウト
//var y_ax=drawLine(0,0,500,500*tan30,0.1,"red");//数値でないと何故かバグる
//var x_ax=drawLine(0,0,-500,500*tan30,0.1,"blue");//数値でないと何故かバグる -30度
//var z_ax=drawLine(0,0,0,-500,0.1,"green");

//alert(d_z+","+d_x+","+d_y)
//入力から線を描く
//Z->Y
if(d_z!=-1&&d_x==-1&&d_y!=-1){
	//alert("test");
	
for(k=0;k<ar_y.length;k++){
	//drawLine(0,-ar_z[0],ar_y[0]*cos30,ar_y[0]*sin30-ar_z[0]);
	//drawLine(0,-ar_z[1],ar_y[1]*cos30,ar_y[1]*sin30-ar_z[1]);
	//drawLine(0,-ar_z[k],ar_y[k]*cos30,ar_y[k]*sin30-ar_z[k]);
	//drawLine2(0,-ar_z[k],ar_y[k],0,0.1,"red");
	
	drawLine2(0,-ar_z[k],ar_y[k],30,0.1,"red");
}
}
//Y->X
if(d_z==-1&&d_x!=-1&&d_y!=-1){
	
	
	//alert("test");
	//drawLine2(0,30,50,0,0.1,"red");
	//drawLine2(ar_y[1]*cos30,ar_y[1]*sin30,ar_x[1],0,0.1,"red");
	
	//drawLine(0,0,v.x,v.y,0.1,"green");
for(k=0;k<ar_x.length;k++){
	//drawLine(ar_y[k]*cos30,ar_y[k]*sin30,-ar_x[k]*cos30,ar_x[k]*sin30);
	//drawLine(ar_y[k]*cos30,ar_y[k]*sin30,-ar_x[k]*cos30+ar_y[k]*cos30,ar_x[k]*sin30+ar_y[k]*sin30);
	//drawLine2(0,0,ar_x[k],0,0.1,"red");
	var v=new vec2d(ar_y[k],0);
	//drawLine2(v.x,v.y,50,0,0.1,"red");
	//drawLine(0,0,v.x,v.y,0.1,"green");
	v.rot(30);
	//alert(v.x+","+v.y)
	//drawLine(0,0,v.x,v.y,0.1,"green");
	drawLine2(v.x,v.y,ar_x[k],150,0.1,"red");
}
}
//X->Z
if(d_z!=-1&&d_x!=-1&&d_y==-1){
	//alert("test");
	//var v=new vec2d(ar_x[0],0);
	//v.rot(150);
	//alert(v.x+","+v.y+","+ar_z[0])
	//drawLine(0,0,v.x,v.y,0.1,"red");
	//drawLine2(v.x,v.y,ar_z[0],270,0.1,"red");
	
for(k=0;k<ar_z.length;k++){
	var v=new vec2d(ar_x[k],0);
	v.rot(150);
	//drawLine(0,0,v.x,v.y,0.1,"red");
	drawLine2(v.x,v.y,ar_z[k],270,0.1,"red");
	
	//drawLine(-ar_x[k]*cos30,ar_x[k]*sin30,-ar_x[k]*cos30,-ar_z[k]+ar_x[k]*sin30);//-ar_x[k]*sin30
}
}
//未実装
/*
//Z->Y->X->Z
if(d_z!=-1&&d_x!=-1&&d_y!=-1){
	var docSize=getDocumentSize();
	for(k=0;k<ar_x.length;k++){
		//y-x
		
		drawLine2(0,-ar_z[k],ar_y[k],30,0.1,"red");
		var v=new vec2d(ar_y[k],0);
		v.rot(30);
		drawLine2(v.x,v.y,ar_x[k],150,0.1,"red");
		var cos=Math.cos(150/180*Math.PI)
		var sin=Math.sin(150/180*Math.PI)
		var x2=mm_to_pt(ar_z[k])*cos+mm_to_pt(v.x);
		var y2=docSize.h-(mm_to_pt(ar_z[k])*sin+mm_to_pt(v.y));
		drawLine2(x2,y2,ar_z[k],270,0.1,"red");
		var cos2=Math.cos(120/180*Math.PI)
		var sin2=Math.sin(120/180*Math.PI)
		var x3=mm_to_pt(ar_y[k])*cos+mm_to_pt(x2);
		var y3=docSize.h-(mm_to_pt(ar_z[k])*sin+mm_to_pt(y2));
		drawLine2(x3,y3,ar_y[k],30,0.1,"red");
	}
	
}
*/