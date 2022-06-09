let palabras = ["PAPAFRITA", "LOGARITMO", "ESPAGUETI", "TIJERA"];
let btnAdd = document.querySelector("#btn-add");
let error = document.querySelector(".error");
let success = document.querySelector(".success");

btnAdd.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#newWord");
    let palabra = (form.palabra.value);

    let regex = /^[a-zA-Z]+$/g;
    if (palabra.match(regex)){
        if (!error.classList.contains("hide")){
            error.classList.add("hide");
        }
        palabras.push((palabra).toUpperCase());
        success.classList.remove("hide");
        form.reset();
        setTimeout(() => {
            success.classList.add("hide");
        },2000);
    }
    else {
        error.classList.remove("hide");
        form.reset();
    }

    
    console.log(palabras);
});
