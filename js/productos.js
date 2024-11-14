/* js para crear productos nuevos */
let masProductos = document.getElementById("planes-container");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarProducto(imagenSrc, descripcion, precio) {
    let producto = document.createElement("div");
        producto.classList.add ("planes-container")

    let imagen = document.createElement("img");
        imagen.src = imagenSrc;
        imagen.alt = descripcion;

    let precioElemento = document.createElement("p");
        precioElemento.textContent = `Precio: $${precio}`;
        precioElemento.classList.add("precio");
        precioElemento.setAttribute("data-precio", precio);

    let boton = document.createElement("button");
        boton.classList.add("boton-comprar");
        boton.textContent = "Comprar";
        boton.addEventListener("click", () => agregarAlCarrito(descripcion, precio));

    producto.appendChild(imagen);
    producto.appendChild(precioElemento);
    producto.appendChild(boton);

    masProductos.appendChild(producto);
    }
//añadir productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    Swal.fire({
        title: "¡Producto añadido al carrito!",
        text: `Has añadido ${nombre} por $${precio} al carrito.`,
        icon: "success"
    });
    actualizarCarrito();
}

// Crear productos
agregarProducto("../imagenes/FOTO-ENBLANCO.jpg", "Guía de Ejercicios para Niños", 39000);
agregarProducto("../imagenes/FOTO-ENBLANCO.jpg", "Guía de Nutrición para Adultos", 42000);


/*para moficar precios*/
let precios = document.querySelectorAll(".precio");
let nuevosPrecios = [30000, 25000];

precios.forEach((precioElemento, index) => {
    precioElemento.textContent = `Precio: $${nuevosPrecios[index]}`;
    precioElemento.setAttribute("data-precio", nuevosPrecios[index]);
});

        
/*EVENTOS y carrito*/

let botonesComprar = document.querySelectorAll(".boton-comprar");


function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const total = document.getElementById("total");


    carritoLista.innerHTML = "";

 
    let totalPrecio = 0;
    carrito.forEach((producto, index) => {

        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.style.marginLeft = "10px";
        
        //evento de eliminar
        botonEliminar.onclick = () => {
            eliminarProducto(index); 
        };
        
        li.appendChild(botonEliminar);
        carritoLista.appendChild(li);

        totalPrecio += producto.precio;
    });
   
    total.textContent = `Total: $${totalPrecio.toFixed(2)}`; // Aseguramos formato decimal

    // localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


function eliminarProducto(index) {
    carrito.splice(index, 1); 
    actualizarCarrito(); 
}

botonesComprar.forEach(boton => {
    boton.onclick = () => {
        const precioElemento = boton.previousElementSibling;
        const precio = parseFloat(precioElemento.getAttribute("data-precio"));
        const nombre = precioElemento.previousElementSibling.alt;

        if (!isNaN(precio)) {
            carrito.push({ nombre, precio });

            Swal.fire({
                title: "¡Producto añadido al carrito!",
                text: `Has añadido ${nombre} por $${precio} al carrito.`,
                icon: "success"
            });


            actualizarCarrito();
        } else {
            console.error("El precio del producto es inválido");
        }
    };
});

function vaciarCarrito() {
    carrito = []; 
    localStorage.removeItem("carrito"); 
    actualizarCarrito(); 
}

const botonVaciarCarrito = document.createElement("button");
botonVaciarCarrito.textContent = "Vaciar Carrito";
botonVaciarCarrito.onclick = vaciarCarrito;
document.getElementById("carrito-container").appendChild(botonVaciarCarrito);

actualizarCarrito();