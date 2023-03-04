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

//Validar que la persona ingrese un numero entre 1 y 4
while (escogioBanco === false) {
  if (bancoDeseado === 1) {
    escogioBanco = true;
  } else if (bancoDeseado === 2) {
    escogioBanco = true;
  } else if (bancoDeseado === 3) {
    escogioBanco = true;
  } else if (bancoDeseado === 4) {
    escogioBanco = true;
  } else {
    bancoDeseado = parseInt(
      prompt(
        "Escoge un numero banco correcto: 1.Bancolombia 2. Itau 3. Nubank 4. Nacion"
      )
    );
  }
}
