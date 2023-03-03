//FUNCTION

function sumar() {
  //bloque de codigo a ejecutar
  const numero1 = parseInt(prompt("Ingresa un numero"));
  const numero2 = parseInt(prompt("Ingresa otro numero"));
  const resultado = numero1 + numero2;
  //La alerta lo termina
  // alert("El resultado de la sume es: " + resultado);
  return resultado;
}

//Para pasar parametros se ponder del ()
const resultadoSuma = sumar();
alert("El resultado de la suma es: " + resultado);
console.log(resultadoSuma);

//Vamos a pasar parametros
function sumar(n1, n2) {
  //bloque de codigo a ejecutar
  const resultado = n1 + n2;
  return resultado;
}

const numero1 = parseInt(prompt("Ingresa un numero"));
const numero2 = parseInt(prompt("Ingresa otro numero"));
const resultadoSuma = sumar(numero1, numero2);
alert("resultado: " + resultadoSuma);


// var primerVar = "texto";
// let segundVar = 5;
// segundVar = 10;
// const tercerVar = "texto1";
// tercerVar = "texto2";

//parseInt -> cambia un texto a numbero en um prompt

// const numero1 = prompt("Ingresa un numero");
// const numero2 = prompt("Ingresa otro numero");
// const resultado = numero1 + numero2;
// alert("El resultado de la suma de los dos numeros es: " +resultado);

/*
Si - mañana no llueve -> vamos a la playa
if (mañana no llueve) {vamos a la playa}
if(condicion) {
bloque de codigo a ejecutar si la condicion se resuelve como verdadera
}
*/

/*
== Compara valor
=== Compara valor y tipo de dato
*/

//TODO PRACTICA - ALGORTIM CON UN CONDICIONAL
const añoactual = parseInt(prompt("Ingresa el año actual"));
const añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));

if (añoactual >= añoNacimiento) {
  const edad = añoactual - añoNacimiento;
  alert("Tu edad es: " + edad);
} else if (añoactual <= añoNacimiento) {
  alert("El año actual no puede ser menor que tu año de nacimiento");
}

//CICLO CONTEO - FOR
const numero = parseInt(prompt("Ingresa un numero"));
for (let i = 0; i < numero; i++) {
  // bloque de codigo que yo quiero que se ejecute
  // entregar copa de vino
  console.log(i);
}

//i = i+1 === i++

//break - continue

for (let i = 0; i < 10; i = i + 1) {
  //bloque de codigo que yo quiero que se ejecute
  //entregar copa de vino
  if (i === 4) {
    break; // acaba el ciclo
    // continue; continua el ciclo
  }
  console.log(i);
}

//CICLO  CONDICION - WHILE

let password = prompt("Ingresa tu password");
while (password !== "12345") {
  password = prompt("Ingresa nuevamente tu password");
}
alert("Password ingreada con exito");


