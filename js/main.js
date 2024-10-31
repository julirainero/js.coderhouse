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
    new Producto("Guia de Alimentacion mensual", 40000),
];

function buscarProducto(termino) {
    return productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(termino.toLowerCase())
    );
}

const terminoBusqueda = prompt("Ingrese la palabra que desea buscar:");

if (terminoBusqueda) {
    const busqueda = buscarProducto(terminoBusqueda);

    console.log(busqueda);

    if (busqueda.length > 0) {
        console.log(`Se encontraron ${busqueda.length} productos:`, busqueda);
        
        const nombresProductos = busqueda.map(producto => producto.nombre).join(", ");
        alert("Se encontraron los siguientes productos: " + nombresProductos);
    } else {
        console.log("No se encontraron productos.");
        alert("No se encontró el producto");
    }
} else {
    console.log("No se ingresó ningún término de búsqueda.");
}

//carrusel de fotos
let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.carrusel-item');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    const carruselItems = document.querySelector('.carrusel-items');
    carruselItems.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function cambiarSlide(n) {
    mostrarSlide(slideIndex + n);
}

