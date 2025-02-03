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
// Elige aleatoriamente un valor en el array
function sortearAmigo(){
        // Genera un numero entre 0 y el ultimo valor indice de la array
        let rango = Math.floor(Math.random() * listaAmigos.length);
        // Variable donde se alamacena el indice sorteado
        let amigoSorteado = listaAmigos[rango];
        console.log(amigoSorteado);
        // Muestra el valor sorteado
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        // Elimina los valores de la array
        listaAmigos.splice(amigoSorteado);
        // Actualiza la lista.
        enlistar();
}
// Limpia la caja
function limpiarCaja(elemento){
    document.getElementById(elemento).value = '';
}
