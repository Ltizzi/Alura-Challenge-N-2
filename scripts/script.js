
let btnStart = document.querySelector("#btn-start");
let btnAddWord = document.querySelector("#btn-word-add");
let btnBackFromGame = document.querySelector("#backFromGame");
let btnBackFromAdd = document.querySelector("#backFromAdd");
let btnRestart = document.querySelector("#restart");
let win = document.querySelector(".win");
let lost = document.querySelector(".lost");
let mayusculas = /[A-Z]/;
let palabra = "";
let intentos = 0;
let errores = 0;
let letras = [];
let aciertos = [];
let letrasErradas = [];

let victoria = false;
let derrota = false;




btnStart.addEventListener("click", function() {
    changeDom(".inicio", ".juego");
    intentos = 6;
    palabra = pickSecretWord();
 
    clearScreen();
    drawLines();
    dibujarHorca();
    dibujarDesdichado();

});

btnRestart.addEventListener("click", function(){
    reiniciarJuego();
});

btnAddWord.addEventListener("click", function() {
    changeDom(".inicio", ".addWord");
});

btnBackFromGame.addEventListener("click", function(){
        changeDomToHome(".juego");  
});

btnBackFromAdd.addEventListener("click", function(){
    changeDomToHome(".addWord");
});


//control del juego en sí

document.addEventListener("keypress", function(event){
    let tecla = (event.key).toUpperCase();
    if (tecla.match(mayusculas)){
 
        letras = palabra.split('');     
   
        calcularAciertos(tecla);
        
          
    }
    winOrLost();
    if (victoria || derrota) {
        return false;
    }  
   
});


function changeDom(actual, proximo){
    document.querySelector(actual).classList.add("hide");
    document.querySelector(proximo).classList.remove("hide");
}

function changeDomToHome(actual){
    document.querySelector(".inicio").classList.remove("hide");
    document.querySelector(actual).classList.add("hide");
}

function pickSecretWord(){   
    return palabras[Math.floor(Math.random()*palabras.length)];
}

function calcularAciertos(tecla){

    if (!aciertos.includes(tecla)) {
        for (let i = 0; i < letras.length; i++){
            let letra = letras[i];
            let cantidadLetras = [];
            if (tecla == letra && !cantidadLetras.includes(tecla)) {
                rightLetter(i);
                cantidadLetras.push(tecla);
                console.log(cantidadLetras);
                if(letras.length != aciertos.length) {
                    cantidadLetras.forEach((char) => aciertos.push(char));
                    console.log(aciertos);
                };   
            }   
        }
    }
    
    if (!letras.includes(tecla) && !letrasErradas.includes(tecla)) {        
        intentos-=1;
        errores+=1;
        letrasErradas.push(tecla);          
        wrongLetter(tecla, intentos);
        dibujarDesdichado();
        
    }
}

function reiniciarJuego(){
    intentos = 6;
    errores = 0;
    letras = [];
    aciertos = [];
    palabra = pickSecretWord();
    win.classList.add("hide");
    lost.classList.add("hide");

    clearScreen();
    drawLines();
    dibujarHorca();
}

function winOrLost(){
    console.log("aciertos: "+ aciertos.length, "letras: "+ letras.length, "intentos: "+ intentos, "errores: "+ errores);

    if (letras.length == (aciertos.length)) {
        win.classList.remove("hide");
        victoria = true;
    }
    if (intentos == 0) {
        lost.classList.remove("hide");
        derrota = true;
        dibujarCara();
    }
    if (victoria){
        derrota = true;
    }
    
}


