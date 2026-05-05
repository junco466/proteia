let carrito = [];

// AGREGAR PRODUCTO (con cantidad)
function agregarAlCarrito(nombre, precio) {

    let existente = carrito.find(p => p.nombre === nombre);

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    renderCarrito();
}

// MOSTRAR CARRITO
function renderCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalTexto = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="item-text">
                ${producto.nombre} x${producto.cantidad}
            </span>

            <button class="btn-x" onclick="eliminarProducto(${index})">X</button>
        `;

        lista.appendChild(li);

        total += producto.precio * producto.cantidad;
    });

    totalTexto.textContent = "Total: $" + total;
}

// ELIMINAR PRODUCTO COMPLETO
function eliminarProducto(index) {
    carrito.splice(index, 1);
    renderCarrito();
}

// VACÍAR
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("vaciar").addEventListener("click", () => {
        carrito = [];
        renderCarrito();
    });
});