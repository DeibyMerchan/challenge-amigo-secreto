//varible array
const listaDeAmigos = [];

// agrega un amigo a la array
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    console.log(amigoIngresado);
    
    if (isNaN(amigoIngresado)){
        listaDeAmigos.push(amigoIngresado);
        limpiarCaja();
    } else {
        alert('El valor ingresado no es valido');
        limpiarCaja();
        }
    return console.log(listaDeAmigos);
}

// Limpia la caja
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}


