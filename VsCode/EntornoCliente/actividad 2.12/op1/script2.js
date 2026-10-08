// Ejercicio OP1 - 2
// Pide al usuario mediante prompt() una base y un exponente.
// Calcula la potencia usando Math.pow(base, exponente) y muestra el resultado
// mediante un alert().
let base = parseInt(prompt("Introduce la base:"));
let exponente = parseInt(prompt("Introduce el exponente:"));

let resultado = Math.pow(base, exponente);

alert(resultado);
