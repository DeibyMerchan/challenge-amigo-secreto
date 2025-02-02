// Varible array
const listaAmigos = [];


// Agrega un amigo a la array
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    console.log(amigoIngresado);
    
    if (amigoIngresado == ''){
        alert('El valor ingresado no es valido');
        limpiarCaja('amigo');
    } else {
        listaAmigos.push(amigoIngresado);
        enlistar();
        limpiarCaja('amigo');

        }
    return console.log(listaAmigos);
}

// Enlista los nombres ingresados
function enlistar(){
    // Inicia una lista HTML desordenada
    let text = "<ul>";
    // Recorre el array
    listaAmigos.forEach((amigo) => {
        text += `<li> ${amigo} </li>`;
    });
    // Cierra la lista
    text += "</ul>";
    document.getElementById('listaAmigos').innerHTML = text;
}

// Limpia la caja
function limpiarCaja(elemento){
    document.getElementById(elemento).value = '';
}
