//guardad informaicon en storage
//setItem()
localStorage.setItem("nombre", "Clauido");
localStorage.setItem("edad", 40);
localStorage.setItem("esCasado", true);
sessionStorage.setItem("apellido", "Farias");

//buscar informacion en storage
//getItem
const nombre = localStorage.getItem("nombre");
const edad = localStorage.getItem("edad");
const esCasado = localStorage.getItem("esCasado");

const edadMultiplicada = parseInt(edad) + parseInt(edad);

console.log(edadMultiplicada);

//eliminar informacion en storage
//removeItem => unico elemento
// localStorage.removeItem("nombre");
// sessionStorage.clear();

// todo el storage
//clear
//localStorage.clear()

// length
// console.log(localStorage.length);
// console.log(sessionStorage.length);

const infoUsuario = {
  edad: 40,
  esCasado: true,
  nombre: "Claudio",
};
// localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));

//JSON.parse() - JSON.stringify()

//convertir a Json - breakdwon
// const infoUsuarioJson = JSON.stringify(infoUsuario);
// console.log(infoUsuarioJson);
// localStorage.setItem("infoUsuarioJson", infoUsuarioJson);

const infoUsuarioStorage = localStorage.getItem("infoUsarioJSON");
console.log(infoUsuarioStorage);
//El parse entrega el tipo de valor por ejemplo edad: 40
console.log(JSON.parse(infoUsuarioStorage));
