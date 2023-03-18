const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const titulo = document.getElementById("titulo");

formulario.onsubmit = (e) => {
  e.preventDefault();
  const infoUsuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  };
  localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));
};

//mirar si en storage existe infoUsario
//const infoUsario = JSON.parse(localSotrage.getItem('infoUsario))
const infoUsuario = localStorage.getItem("infoUsuario");
const infoUsuarioJS = JSON.parse(infoUsuario);
if (infoUsuario) {
  formulario.remove();
  titulo.innerText = `Bienvenido ${infoUsuarioJS.nombre} ${infoUsuarioJS.apellido}`;
}

//clase
class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const productos = [
  new Producto(1, "Remera", 1000, 10),
  new Producto(2, "Pantalon", 2000, 20),
  new Producto(3, "Zapatillas", 3000, 30),
  new Producto(4, "Buzo", 4000, 40),
  new Producto(5, "Campera", 5000, 50),
  new Producto(6, "Medias", 6000, 60),
  new Producto(7, "Buzo", 7000, 70),
  new Producto(8, "SmarTV", 8000, 80),
  new Producto(9, "Nokia", 9000, 90),
  new Producto(10, "AirpPods", 10000, 100),
];

productos.forEach((prod) => {
  divProductos.innerHTML += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${prod.nombre}</h5>
    <p class="card-text">${prod.precio}</p>
    <button id=${prod.id} class="btn btn-primary">Agregar</button>
  </div>
  </div>`;
});

console.log(productos);

//llenarse de info cada vez que la persona click agregar
//guardar products en carrito
const carrito = [];

//const botonesAgregar = document.getElementsByClassName("btn-primary");
//query
const botonesAgregar = document.querySelectorAll(".btn-primary");
botonesAgregar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productos.find((prod) => prod.id === parseInt(boton.id));

    const prodCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };

    //existe con find
    const prodEnCarrito = carrito.find((prod) => prod.id === prodCarrito.id);
    if (!prodEnCarrito) {
      carrito.push(prodCarrito);
    } else {
      //modifque cantidad
      prodEnCarrito.cantidad++;
    }
    console.log(carrito);
  };
});

//boton finalizar compra
const botonFinalizar = document.querySelector("#finalizar");
const thead = document.querySelector("#thead");
const tbody = document.querySelector("#tbody");
const parrafoTotal = document.querySelector("#total");
botonFinalizar.onclick = () => {
  divProductos.remove();
  botonFinalizar.remove();
  thead.innerHTML = `<tr>
<th scope="col">Producto</th>
<th scope="col">Cantidad</th>
<th scope="col">Total</th>
</tr>`;

  let totalCompra = 0;
  carrito.forEach((prod) => {
    totalCompra += prod.cantidad * prod.precio;
    tbody.innerHTML += `
    <tr>
      <td>${prod.nombre}</td>
      <td>${prod.cantidad}</td>
      <td>${prod.cantidad * prod.precio}</td>
    </tr>
    `;
  });
  parrafoTotal.innerText = `El total de tu compre es ${totalCompra}`;
};

// console.log(botonesAgregar);
