//TODO ARRAY

const obj = { nombre: "Farid" };
const arrayAnimales = ["perro", "gato", "vaca", "caballo", "cerdo"];
const arrayRandom = ["hola", 2, true, { nombre: "Farid" }];
//posicion o  indice   0     1    2             3

// console.log(arrayAnimales);

// //cantidad de elementos
// console.log(arrayAnimales.length);
// console.log(arrayRandom.length);

// //llamar un elemento en particular
// console.log(arrayAnimales[4]);
// console.log(arrayAnimales[3]);

//Mostrar todos los elementos
//Utilizamos i porque esto hace referencia a indice ó index
for (let i = 0; i < 5; i++) {
  console.log(arrayAnimales[i]);
}

// //Mostrar todos los elementos - ejemplo 2
// for (let i = 0; i < arrayAnimales.length; i++) {
//   console.log(arrayAnimales[i]);
// }

// agregar elementos a un arreglo
arrayAnimales.push("SERPIENTE"); //agrega al final
arrayAnimales.unshift("CABALLO"); //agrega al inicio

// eliminar elementos a un arreglo
arrayAnimales.pop(); //elimina el ultimo elemento
arrayAnimales.shift(); //elimina el primer elemento

// .splice()
// elimiar
//arrayAnimales.splice(2,1)

// para agregar y eliminar al mismo tiempo
//arrayAnimales.splice(2, 1, "SERPIENTE");
console.log(arrayAnimales);

const arrayAnimales2 = ["cocodrilo", "raton", "arana", "carpincho", "toro"];
