const palabra = prompt("Ingresá una palabra (sin tildes)").toLowerCase();
const caracter = prompt("Ingresá un carácter para eliminar").toLowerCase();
const numero = parseInt(prompt("Ingresá un número entero"));

let cantidadVocales = 0;
for (let letra of palabra) {
  if ("aeiou".includes(letra)) {
    cantidadVocales++;
  }
}

const palabraSinCaracter = palabra.split(caracter).join("");

const esPalindromo = palabra === palabra.split("").reverse().join("");

const palabraRepetida = palabra.repeat(numero);

console.log(`Vocales: ${cantidadVocales}`);
console.log(`Palabra sin '${caracter}': ${palabraSinCaracter}`);
console.log(`¿Es palíndromo?: ${esPalindromo}`);
console.log(`Repetida ${numero} veces: ${palabraRepetida}`);
