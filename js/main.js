//* ingreso a la pagina- ciclo condicional 

let nombreingresado;
let apellidoingresado;

function ingresonombre(){
    nombreingresado = prompt("ingrese su nombre")
    while (nombreingresado.trim() === "") {
    alert("Ingrese nuevamente su nombre");
    nombreingresado = prompt("Ingrese su nombre");
}
}

function ingresoapellido(){
    apellidoingresado = prompt("ingrese su apellido")
    while (apellidoingresado.trim() === "") {
    alert("Ingrese nuevamente su apellido");
    apellidoingresado = prompt("Ingrese su apellido");
}
}

ingresonombre();
ingresoapellido();

alert("Bienvenid@ " + nombreingresado + " " + apellidoingresado);

//* buscador de productos

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = true
   
}
const productos = [
    new Producto("Guia de Alimentacion infantil", 20000),
    new Producto("Guia de Alimentacion durante el embarazo", 30000),
    new Producto("Guia de Alimentacion vegetarianismo", 15000),
    new Producto("Guia de Alimentacion primer mes", 40000),
];


function BuscarProducto(nombreBuscado) {
    let encontrado = false;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
            console.log("Producto encontrado: " + productos[i].nombre + ", Precio: " + productos[i].precio);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
            console.log("Producto no encontrado");
        }
   
}

const nombreBuscado = prompt("Ingrese el nombre del producto");
BuscarProducto(nombreBuscado);