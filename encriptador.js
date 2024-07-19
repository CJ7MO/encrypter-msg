const d = document;
const textArea = d.querySelector(".form__input")
const imagen = d.querySelector(".result__img")
const loader = d.querySelector(".loader");
const result = d.querySelector(".result__title");
const resultText = d.querySelector(".result__text");
const buttonEncrypt = d.querySelector(".form__btn");
const buttonDesencrypt = d.querySelectorAll(".form__btn")
const buttonCopy = d.querySelector(".result__btn")

const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"], 
    ["o", "ober"],
    ["u", "ufat"]
];


// función para encriptar los mensajes
function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < keys.length; j++){
            if(letra === keys[j][0]){
                encriptada = keys[j][1];
            break
            }
        }
        mensajeEncriptado += encriptada
    }
    return mensajeEncriptado
}


// función para desencriptar los mensajes
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < keys.length; i++){
        let regex = new RegExp(keys[i][1], 'g')
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, keys[i][0]);
    }
    return mensajeDesencriptado
}

textArea.addEventListener("input", (e)=>{
    //imagen.style.display = "none";
    loader.classList.remove("hidden");
    result.textContent = "Capturando Mensaje"
    resultText.textContent=""
})

buttonEncrypt.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    result.textContent = "El Resultado es:"
    resultText.textContent = mensajeEncriptado;
    buttonCopy.classList.remove("hidden");
    loader.classList.add("hidden")
})

buttonDesencrypt[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    result.textContent = "El Resultado es:"
    resultText.textContent = mensajeDesencriptado;
    buttonCopy.classList.remove("hidden");
    loader.classList.add("hidden")
})

buttonCopy.addEventListener('click', ()=>{
    let copyText = resultText.textContent;
    navigator.clipboard.writeText(copyText).then(()=>{
        console.log(`texto ${copyText} ha sido copiado`)
        alert("El texto ha sido copiado")
        buttonCopy.classList.add("hidden")       
    })
})