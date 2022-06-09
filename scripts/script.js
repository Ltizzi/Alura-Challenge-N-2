
let btnStart = document.querySelector("#btn-start");
let btnAddWord = document.querySelector("#btn-word-add");
let btnBackFromGame = document.querySelector("#backFromGame");
let btnBackFromAdd = document.querySelector("#backFromAdd");
let btnRestart = document.querySelector("#restart");
// let juego = document.querySelector(".entrada");
let win = document.querySelector(".win");
let lost = document.querySelector(".lost");
let mayusculas = /[A-Z]/;
let palabra = "";
let intentos = 0;
let errores = 0;
let letras = [];
let aciertos = [];

let victoria = false;
let derrota = false;




btnStart.addEventListener("click", function() {
    changeDom(".inicio", ".juego");
    intentos = 6;
    palabra = pickSecretWord();
 
    clearScreen();
    drawLines();

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
    let errorDibujado = false;
    
    for (let i = 0; i < letras.length; i++){
        let letra = letras[i];
        let cantidadLetras = [];
        if (tecla == letra) {
            rightLetter(i);
            cantidadLetras.push(tecla);
            console.log(cantidadLetras);
            if(letras.length != aciertos.length) {
                cantidadLetras.forEach((char) => aciertos.push(char));
                console.log(aciertos);
            };   
        }   
    }
    if (!letras.includes(tecla)) {        
        intentos-=1;
        errores+=1;          
        errorDibujado = true;
        wrongLetter(tecla, intentos);
        
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
    }
    if (victoria){
        derrota = true;
    }
    
}


