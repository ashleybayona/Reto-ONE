// Conexión con html

let amigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Array para almacenar nombres

let amigos = [];

// Función para agregar amigos

function agregarAmigo() {
    let amigoNuevo = amigo.value;
    resultado.innerHTML = '';

    if(amigoNuevo == ''){
        alert("Por favor, ingrese un nombre válido.")
        return;
    }

    amigos.push(amigoNuevo);
    amigo.value = '';

    actualizarAmigos();
}

// Función para actualizar lista de amigos

function actualizarAmigos() {
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear los amigos

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    listaAmigos.innerHTML = '';

    if(amigos.length == 0){
        alert("Por favor, ingrese al menos un amigo.")
        return;
    }

    resultado.innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;

    amigos.length = 0;
}