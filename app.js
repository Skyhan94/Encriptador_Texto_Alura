let textoEncriptar = document.getElementById('principal__contenedor__presentacion__input');
let textoCopiar = document.getElementById('principal__contenedor__mensaje__texto');
let letra = "";
let palabra = "";

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function accionEncriptarTexto(){
    let texto = textoEncriptar.value.trim();

    if(texto!==""){
        document.getElementById('principal__contenedor__sin__mensaje').style.display = "none";
        document.getElementById('principal__contenedor__mensaje').style.display = "flex";
        document.getElementById('principal__contenedor__mensaje').style.alignItems = "center";
        asignarTextoElemento('principal__contenedor__mensaje__texto', encriptarTexto());
        palabra = "";

    }else{
        palabra = "";
        document.getElementById('principal__contenedor__sin__mensaje').style.display = "flex";
        document.getElementById('principal__contenedor__sin__mensaje').style.alignItems = "center";
        document.getElementById('principal__contenedor__sin__mensaje').style.justifyContent = "center";
        document.getElementById('principal__contenedor__mensaje').style.display = "none";
    }
}

function accionDesencriptarTexto(){
    let texto = textoEncriptar.value.trim();

    if(texto!==""){
        document.getElementById('principal__contenedor__sin__mensaje').style.display = "none";
        document.getElementById('principal__contenedor__mensaje').style.display = "flex";
        document.getElementById('principal__contenedor__mensaje').style.alignItems = "center";
        asignarTextoElemento('principal__contenedor__mensaje__texto', desencriptarTexto());
        palabra = "";

    }else{
        palabra = "";
        document.getElementById('principal__contenedor__sin__mensaje').style.display = "flex";
        document.getElementById('principal__contenedor__sin__mensaje').style.alignItems = "center";
        document.getElementById('principal__contenedor__sin__mensaje').style.justifyContent = "center";
        document.getElementById('principal__contenedor__mensaje').style.display = "none";
    }
}

function encriptarTexto(){
    let texto = textoEncriptar.value;
    for(let i=0; i<texto.length; i++){
        letra = texto.charAt(i);
        if(letra == 'a'){
            letra = letra + 'i';
        }else if(letra == 'e'){
            letra = letra + 'nter';
        }else if(letra == 'i'){
            letra = letra + 'mes';
        }else if(letra == 'o'){
            letra = letra + 'ber';
        }else if(letra == 'u'){
            letra = letra + 'fat';
        }

        palabra = palabra + letra;
    }
    return palabra;
}

function desencriptarTexto(){
    let texto = textoEncriptar.value;
    for(let i=0; i<texto.length; i++){
        letra = texto.charAt(i);
        if(letra == 'a'){
            i = i + 1;
        }else if(letra == 'e'){
            i = i + 4;
        }else if(letra == 'i'){
            i = i + 3;
        }else if(letra == 'o'){
            i = i + 3;
        }else if(letra == 'u'){
            i = i + 3;
        }

        palabra = palabra + letra;
    }
    return palabra;
}


function copiarContenido() {
    navigator.clipboard.writeText(textoCopiar.textContent);
}