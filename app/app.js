//Tipo de Datos

//Number
let edad=10;
//Float
let peso=45.5;
//Nombre
let nombre="Juan Perez";
//Boleano
let casado=true;


console.log(typeof(edad));
console.log(typeof(peso));
console.log(typeof(nombre));
console.log(typeof(casado));


//Operadores Matematicos
let a=10;
let b=5;

let suma=(a+b);
let resta=(a-b);
let multiplicacion=(a*b);
let division=(a/b);
let modulo=(a%2)

console.log("Suma "+suma);
console.log("Resta "+resta);
console.log("Multiplicacion "+multiplicacion);
console.log("Division "+division);
console.log("Modulo "+modulo);

// Se le asinga el valor Jorge a la 
// variable nombreCliente
let nombreCliente="Jorge";
// //Se le reasigna el valor Jorge Gallegos a la variable 
// NombreCliente
nombreCliente="Jorgue Gallegos";

//Operadores de Comparacion

let x=4;
let y=7;
//Menor que
let resultado=(x<y);
console.log(resultado);
//Mayor que 
resultado=(x>y);
console.log(resultado);
//Menor igual
resultado=(x<=y);
console.log(resultado);
//Mayor igual
resultado=(x>=y);
console.log(resultado);

//Operadores logicos

edad=21;
genero='M'
let edadMaximaPostulacion=25;
//an (&&)
//or (||)

//Vas a poder postular a la escuela militar
//si tu edad es menor o igual a la edad de Postulacion Maxima
//&& todas la validaciones tienen que se true
let postulacionEscuelaMilitar=edad<=edadMaximaPostulacion && genero=='M';
console.log('Ejemplo &&');
console.log(postulacionEscuelaMilitar);
//|| solo se necesita que una validacion sea true
postulacionEscuelaMilitar=edad<=edadMaximaPostulacion || genero=='M';
console.log('Ejemplo ||');
console.log(postulacionEscuelaMilitar);
