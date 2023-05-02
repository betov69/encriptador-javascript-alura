//Función para los botones    

var botonEncripta = document.querySelector(".boton-encripta");
botonEncripta.onclick = function() {  //Función anónima
    var texto = document.querySelector(".texto-encriptar").value;
    var resultadoTextArea = document.querySelector(".texto-encriptado");
    encriptado(texto, resultadoTextArea);
    cambiarCajas();
};
var botonDesencripta = document.querySelector(".boton-desencripta");
botonDesencripta.onclick = function() {  //Función anónima
    var texto = document.querySelector(".texto-encriptar").value;
    var resultadoTextArea = document.querySelector(".texto-encriptado");
    desencriptado(texto, resultadoTextArea);
    cambiarCajas();
};

var botonCopiar = document.querySelector(".boton-copiar");
botonCopiar.onclick = function(){ //Función anónima
    var copiarTetxo = document.querySelector(".texto-encriptado");
    copiarTetxo.select();
    copiarTetxo.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copiarTetxo.value);
    alert("Copiado: " + copiarTetxo.value);
}

//Todas las funciones utilizadas para el encriptador Alura:

function encriptado(texto, resultadoTextArea) { //Función para encriptar
var minusculas = /^[a-z ]+$/; // Minúsculas y un espacio para poder comprobar frases
if (minusculas.test(texto)) {
    var secretos = {a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"};
    var strEncriptado = texto.replace(/a|e|i|o|u/g, function(encontrado){ //Función anónima
        return secretos[encontrado];
    });
    resultadoTextArea.value = strEncriptado; // Asigna el valor encriptado al TextArea
} else {
    alert("Solo letras minúsculas sin acentos por favor");
}
}

function desencriptado(texto, resultadoTextArea){ //Funcion para desencriptar
    var minusculas = /^[a-z ]+$/; //Minúsculas y un espacio para poder comprobar frases
    if (minusculas.test(texto)){
        var secretos = {ai:"a",enter:"e",imes:"i",ober:"o",ufat:"u"};
        var srtDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, function(encontrado){
            return secretos[encontrado];
        }); 
        resultadoTextArea.value = srtDesencriptado; //Asigna el valor desencriptado al TextArea
    }else{
        alert("Solo letras minúsculas sin acentos por favor");
    }
}

function cambiarCajas() { //Función para cambiar la caja
  var cajaDerecha = document.querySelector(".caja-derecha");
  var cajaDerechaSalida = document.querySelector(".caja-derecha-salida");

  cajaDerecha.style.display = "none";
  cajaDerechaSalida.style.display = "block";
}

window.onload = function() { //Función que se ejecuta cada que inicia o se reinicia la página y pone los textArea en vacio
    document.querySelector(".texto-encriptar").value = "";
    document.querySelector(".texto-encriptado").value = "";
}