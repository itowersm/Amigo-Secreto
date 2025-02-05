
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let amigos = [];
const faltaNombre = 'Por favor ingrese un nombre valido.';
//Son alert las variables
const nombreDuplicado = 'El nombre ya existe, Por favor ingrese un nombre valido.';
//esta es una buena practica, al declarar la variable podemos cambiar el texto del alert

//funcion para los nombres de amigos 
function agregarAmigo() {
    let nombre ="";
    nombre = document.getElementById('amigo').value;
    if (typeof nombre === "string" && nombre.length === 0) {
        alert(faltaNombre);
    }
    else if (nombre === null) {
        alert(faltaNombre);
    }
    else {
        if (existeNombre(nombre)){
            alert(nombreDuplicado);
        }
        else{
            let nuevaLongitud = amigos.push(nombre);
            mostrarListaNombres();        
            limpiarAmigo();
        }
    }
    return;
}

function existeNombre(texto){
    let existe = false;
    for (var contador = 0; contador < amigos.length; contador++) {
        if (texto == amigos[contador]){
            existe = true;
            break;
            //rompe
        }
    }
    return existe;
}

function mostrarListaNombres(){
    LimpiaLista("listaAmigos");
    for (var contador = 0; contador < amigos.length; contador++) {
        asignarListaElemento("listaAmigos",`<li><a href="#">${amigos[contador]}</a></li>`);
    }
    return;
}

function LimpiaLista(elemento) {
    const lista = document.getElementById(elemento);
    lista.innerHTML = "";
    return;
}

function asignarListaElemento(elemento, texto) {
    const lista = document.getElementById(elemento);
    lista.innerHTML += texto;
    return;
}

function limpiarAmigo(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
let sorteo ;
    if (amigos.length == 0){
        alert(faltaNombre);}
    else{
        sorteo = seleccionarAmigo(amigos.length);
        morstrarAmigoSecreto(seleccionarAmigo(amigos.length));
    }
}

function seleccionarAmigo(max) {
    return Math.floor(Math.random() * max);
}

function morstrarAmigoSecreto(seleccionado){
    limpiarAmigo();
    LimpiaLista("listaAmigos");
    console.log(amigos[seleccionado]);
    asignarTextoElemento(".button-draw",amigos[seleccionado]);
}

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
    return;
}