var canvas;

function callCanvas(){
    canvas = document.getElementById("horca").getContext('2d');
}

function killCanvas(){
    canvas = null;
}

function drawLines(){

        canvas.lineWidth = 6;
        canvas.lineCap = "round";
        canvas.lineJoin = "round";
        canvas.strokeStyle = "#0a3871";
        canvas.beginPath();
    
        let ancho = 610/palabra.length;
        for (let i = 0; i< palabra.length; i++) {
            canvas.moveTo(200+(ancho*i), 440);
            canvas.lineTo(150+(ancho*i), 440);
        }
        canvas.stroke();
        canvas.closePath();
  
   

}

function rightLetter(index){
   
        canvas.font = 'bold 48px Inter';
        canvas.lineWidth= 6;
        canvas.lineCap = "round";
        canvas.lineJoin = "round";
        canvas.fillStyle = "#0a3871";
    
        let ancho = 610/palabra.length;
        canvas.fillText(palabra[index], 155+(ancho*index), 420);
    
  
   
}

function wrongLetter(letra, intentos){

        canvas.font = 'bold 40px Inter';
        canvas.lineWidth= 6;
        canvas.lineCap = "round";
        canvas.lineJoin = "round";
        canvas.fillStyle = "#0a3871";
    
        canvas.fillText(letra, 135+(40*(10-intentos)), 510, 40);
    
  
}

function clearScreen(){

        canvas.clearRect(0,0,900,560);
    

}

function dibujarHorca(){
    dibujarBase();
    dibujarColumna();
    dibujarSosten();
    dibujarSoga();

}

function dibujarDesdichado(){
    switch(errores){
        case 1:
            dibujarCabeza();
            break;
        case 2:
            dibujarTronco();
            break;
        case 3:
            dibujarBrazoIzquierdo();
            break;
        case 4:
            dibujarBrazoDerecho();
            break;
        case 5:
            dibujarPiernaIzquierda();
            break;
        case 6:
            dibujarPiernaDerecha();
            break;
        
    }
    
    
}



function dibujarBase(){
 
    canvas.lineWidth = 10;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(300,350);
    canvas.lineTo(520,350);
    canvas.stroke();
    canvas.closePath();
    

}

function dibujarColumna(){

    canvas.lineWidth = 7;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(385,350);
    canvas.lineTo(385,50);
    canvas.stroke();
    canvas.closePath(); 
    
  
}

function dibujarSosten(){

    canvas.lineWidth = 5;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(385,50);
    canvas.lineTo(530,50);
    canvas.stroke();
    canvas.closePath();
    

}

function dibujarSoga(){

    canvas.lineWidth = 5;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(530,50);
    canvas.lineTo(530,75);
    canvas.stroke();
    canvas.closePath();
    
  
}

function dibujarCabeza(){
  
    canvas.lineWidth = 3;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.arc(530, 109, 30, 0, (2*Math.PI));
    canvas.stroke();
    
}

function dibujarCara(){

    canvas.lineWidth = 3;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    //ojo izq
    canvas.moveTo(525,105);
    canvas.lineTo(515,112);
    canvas.moveTo(515,105);
    canvas.lineTo(525,112);
    //ojo derecho
    canvas.moveTo(545,105);
    canvas.lineTo(535,112);
    canvas.moveTo(535,105);
    canvas.lineTo(545,112);
    //dibujar boca
    canvas.moveTo(515,122);
    canvas.lineTo(520,128);
    canvas.lineTo(525,122);
    canvas.lineTo(530,128);
    canvas.lineTo(535,122);
    canvas.lineTo(540,128);
    canvas.lineTo(545,122);
    canvas.stroke();
    canvas.closePath();
    
 
}

function dibujarTronco(){
    
    canvas.lineWidth = 3;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(530,140);
    canvas.lineTo(530,240);
    canvas.stroke();
    canvas.closePath();
    
  
}

function dibujarPiernaIzquierda(){
  
    canvas.lineWidth = 3;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(530,240);
    canvas.lineTo(505,290);
    canvas.stroke();
    canvas.closePath();
   

}

function dibujarPiernaDerecha(){
   
    canvas.lineWidth = 3;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(530,240);
    canvas.lineTo(555,290);
    canvas.stroke();
    canvas.closePath();
    

}

function dibujarBrazoIzquierdo(){
 
    canvas.lineWidth = 3;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(530,170);
    canvas.lineTo(505,200);
    canvas.stroke();
    canvas.closePath();
 
}

function dibujarBrazoDerecho(){
    canvas.lineWidth = 3;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();
    canvas.moveTo(530,170);
    canvas.lineTo(555,200);
    canvas.stroke();
    canvas.closePath();

}