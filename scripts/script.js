let btnStart = document.querySelector("#btn-start");
let btnAddWord = document.querySelector("#btn-word-add");
let btnBackFromGame = document.querySelector("#backFromGame");
let btnBackFromAdd = document.querySelector("#backFromAdd");



btnStart.addEventListener("click", function(event) {
    changeDom(".inicio", ".juego");
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

function changeDom(actual, proximo){
    document.querySelector(actual).classList.add("hide");
    document.querySelector(proximo).classList.remove("hide");
}

function changeDomToHome(actual){
    document.querySelector(".inicio").classList.remove("hide");
    document.querySelector(actual).classList.add("hide");
}

