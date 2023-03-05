//usario escoja un banco y mostrarle las distintas cuotas dependiendo los meses y el monto

/*
cada banco
{
  nombre
  id 
  tasa12
  tasa24
  tasa36
}
*/

//crear clase banco

class Banco {
  constructor(nombre, id, tasa12, tasa24, tasa36) {
    this.nombre = nombre;
    this.id = id;
    this.tasa12 = tasa12;
    this.tasa24 = tasa24;
    this.tasa36 = tasa36;
  }
}

const bancolombia = new Banco("bancolombia", 1, 10, 11, 12);
const itau = new Banco("itau", 2, 12, 14, 15);
const nubank = new Banco("nubank", 3, 8, 11, 14);
const nacion = new Banco("nacion", 4, 5, 7, 8);

//console.log(bancolombia, itau, nubank, nacion);

const bancoDeseado = parseInt(
  prompt(
    "Escoge el banco que deseas cotizar: 1.Bancolombia 2. Itau 3. Nubank 4. Nacion"
  )
);

// Esperando que la persona ponga 1,2,3 o 4.

//No estamos exceptos que la persona ingrese otro info

//Variable para condicion de banco correcto
let escogioBanco = false;

//variable que contiene informacion del banco deseado
let infoBancoDeseado;

//Validar que la persona ingrese un numero entre 1 y 4
while (escogioBanco === false) {
  if (bancoDeseado === 1) {
    escogioBanco = true;
    infoBancoDeseado = bancolombia;
  } else if (bancoDeseado === 2) {
    escogioBanco = true;
    infoBancoDeseado = itau;
  } else if (bancoDeseado === 3) {
    escogioBanco = true;
    infoBancoDeseado = nubank;
  } else if (bancoDeseado === 4) {
    escogioBanco = true;
    infoBancoDeseado = nacion;
  } else {
    bancoDeseado = parseInt(
      prompt(
        "Escoge un numero banco correcto: 1.Bancolombia 2. Itau 3. Nubank 4. Nacion"
      )
    );
  }
}

const montoSolicitado = parseInt(
  prompt("Ingresa el monto que deseas solicitar:")
);

const cuota12 = calcularCuota(montoSolicitado, infoBancoDeseado.tasa12, 12);
const cuota24 = calcularCuota(montoSolicitado, infoBancoDeseado.tasa24, 24);
const cuota36 = calcularCuota(montoSolicitado, infoBancoDeseado.tasa36, 36);
console.log(cuota12, cuota24, cuota36);

//Funcion para calcular cuota
function calcularCuota(monto, interes, meses) {
  const cuota = (monto + monto * interes) / 100 / meses;
  return cuota;
}

//alert("El banco escogido es: " + infoBancoDeseado.nombre);

/*
Para mostrar variables dentro de cadenas en JavaScript, puedes usar la interpolación de cadenas (template literal
Al usar las llaves {} dentro de una cadena como lo estás haciendo, Javascript espera que la variable especificada tenga un valor de tipo objeto y particularmente que tenga alguna propiedad o método para ser renderizado en el string.  
Al usar la interpolación de cadenas (template literals) con las comillas invertidas te aseguras que solo se reemplaza el contenido que esta dentro de los ${} por su respectivo valor.
*/

alert(
  `las opciones que te ofrece ${infoBancoDeseado.nombre} son: 1. ${cuota12} mensuales a 12 meses - 2. ${cuota24} mensaules a 24 meses - 3${cuota36} mensuales a 36 meses `
);
console.log("infobanco", infoBancoDeseado, montoSolicitado);
