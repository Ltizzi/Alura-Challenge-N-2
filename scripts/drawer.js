var canvas = document.getElementById("horca").getContext('2d');


function drawLines(){
    canvas.lineWidth = 6;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0a3871";
    canvas.beginPath();

    let ancho = 600/palabra.length;
    for (let i = 0; i< palabra.length; i++) {
        canvas.moveTo(500+(ancho*i), 640);
        canvas.lineTo(550+(ancho*i), 640);
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

    let ancho = 600/palabra.length;
    canvas.fillText(palabra[index], 505+(ancho*index), 620);
   
}

function wrongLetter(letra, intentos){
    canvas.font = 'bold 40px Inter';
    canvas.lineWidth= 6;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.fillStyle = "#0a3871";

    canvas.fillText(letra, 535+(40*(10-intentos)), 710, 40);
}

function clearScreen(){
    canvas.clearRect(0,0,1200,860);
}