let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(intentos);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el numero secreto!, en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} 😎`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El ususario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', `El  numero secreto es menor 😁`);
        } else {
            asignarTextoElemento(`p`, `El numero secreto es mayor 😉`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //math.floor redondea el numero quitandole los decimales, math.random genera un numero aleatorio entre 1 y 10
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya soteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearón todos los posibles numeros 😢');
    } else {
        // Si es numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Adivina un numero del 1 al ${numeroMaximo} 😊`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar intervalo de numeros
    //Genrar num,ero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();