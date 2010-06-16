#target "Illustrator CS3"
#include "D:/workspace_git/Common_ExtendScripts/commonLib.jsx ";
//３軸を描く
tan30=0.57735;
//var y_ax=drawLine(0,0,500,500*tan30,0.1,"red");//数値でないと何故かバグる
//var x_ax=drawLine(0,0,-500,500*tan30,0.1,"blue");//数値でないと何故かバグる -30度
//var z_ax=drawLine(0,0,0,-500,0.1,"green");
var l1=drawLine2(0,0,500,30,0.1,"red");
var l2=drawLine2(0,0,500,150,0.1,"blue");
var l3=drawLine2(0,0,500,270,0.1,"green");
l1.strokeDashes=[mm_to_pt(0.2),mm_to_pt(1),mm_to_pt(1),mm_to_pt(1)];
l2.strokeDashes=[mm_to_pt(0.2),mm_to_pt(1),mm_to_pt(1),mm_to_pt(1)];
l3.strokeDashes=[mm_to_pt(0.2),mm_to_pt(1),mm_to_pt(1 ),mm_to_pt(1)];