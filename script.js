function start(){
var c = document.getElementById("myCanvas");//canvas seleccionado
var ctxo = c.getContext("2d");//Contexto
var ojos = prompt("Ojos (1 - 9)");
var boca = prompt("Boca (1 - 5)");
var acc = prompt("Accesoios (1 - 3)");
ctxo.beginPath();
ctxo.arc(250, 150, 100, 0, 2 * Math.PI);
ctxo.stroke();

//Nariz
ctxo.moveTo(250,125);
ctxo.lineTo(250,150);
ctxo.stroke();
ctxo.moveTo(252,125);
ctxo.lineTo(252,150);
ctxo.stroke();
ctxo.moveTo(250,150);
ctxo.lineTo(260,150);
ctxo.stroke();
ctxo.moveTo(250,152);
ctxo.lineTo(260,152);
ctxo.stroke();
ctxo.moveTo(250,152);
ctxo.lineTo(260,152);
ctxo.stroke();

//Ojos
if (ojos == 1){
//Izquieda
ctxo.moveTo(220,75);
ctxo.lineTo(220,125);
ctxo.stroke();
ctxo.moveTo(222,75);
ctxo.lineTo(222,125);
ctxo.stroke();
 //Derecha
ctxo.moveTo(270,75);
ctxo.lineTo(270,125);
ctxo.stroke();
ctxo.moveTo(272,75);
ctxo.lineTo(272,125);
ctxo.stroke(); 
ctxo.moveTo(272,75);
ctxo.lineTo(272,125);
ctxo.stroke(); 
}
if (ojos == 2){
//Izquierda
ctxo.moveTo(220,75);
ctxo.lineTo(230,125);
ctxo.stroke();
ctxo.moveTo(221,75);
ctxo.lineTo(231,125);
ctxo.stroke();
 //Derecha
ctxo.moveTo(275,75);
ctxo.lineTo(265,125);
ctxo.stroke();
ctxo.moveTo(276,75);
ctxo.lineTo(266,125);
ctxo.stroke(); 
ctxo.moveTo(276,75);
ctxo.lineTo(266,125);
ctxo.stroke(); 
}
if (ojos == 3){
//Izquierda
ctxo.moveTo(230,75);
ctxo.lineTo(220,125);
ctxo.stroke();
ctxo.moveTo(231,75);
ctxo.lineTo(221,125);
ctxo.stroke();
 //Derecha
ctxo.moveTo(265,75);
ctxo.lineTo(275,125);
ctxo.stroke();
ctxo.moveTo(266,75);
ctxo.lineTo(276,125);
ctxo.stroke(); 
ctxo.moveTo(266,75);
ctxo.lineTo(276,125);
ctxo.stroke(); 
}
if (ojos == 4){
  ctxo.font = "60px Arial";
ctxo.fillText("◕ ◕", 205, 110);
}
if (ojos == 5){
  ctxo.font = "54px Arial";
ctxo.fillText("ಠ  ಠ", 205, 110);
}
if (ojos == 6){
  ctxo.font = "54px Arial";
ctxo.fillText("♡ ♡", 190, 110);
}
if (ojos == 7){
  ctxo.font = "46px Arial";
ctxo.fillText("♥ ♥", 190, 110);
}
if (ojos == 8){
  ctxo.font = "100px Arial";
ctxo.fillText("• •", 205, 135);
}
if (ojos == 9){
  ctxo.font = "48px Arial";
ctxo.fillText("◉ ◉", 200, 115);
}

if (ojos == null || ojos == 0){
  ctxo.font = "30px Arial";
ctxo.fillText("Sin ojos", 200, 110);
}



//Boca
if (boca == 1){
  ctxo.beginPath();
ctxo.arc(250, 200, 40, 3.1, 2 * Math.PI);
ctxo.stroke();
  ctxo.beginPath();
ctxo.arc(250, 200, 40, 3.1, 2 * Math.PI);
ctxo.stroke();
ctxo.moveTo(210,200.1);
ctxo.lineTo(290,200.1);
ctxo.stroke();
}
if (boca == 2){
  ctxo.font = "100px Arial";
ctxo.fillText("ヮ", 210, 230);
}
if (boca == 3){
  ctxo.font = "50px Arial";
ctxo.fillText("╭╮", 205, 200);
}
if (boca == 4){
  ctxo.font = "100px Arial";
ctxo.fillText("◡", 220, 210);
}
if (boca == 5){
  ctxo.font = "100px Arial";
ctxo.fillText("_", 230, 170);
}


//Accesorios
if (acc == 1){
  ctxo.font = "85px Arial";
ctxo.fillText("✧", 290, 110);
}
if (acc == 2){
  ctxo.font = "75px Arial";
ctxo.fillText("✿", 290, 110);
}
if (acc == 3){
  ctxo.font = "75px Arial";
ctxo.fillText("✿     ✿", 130, 110);
}

//(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
//(◕‿◕✿)
//ಠ╭╮ಠ
//♥
//\ (•◡•) /
// ◉_◉
}