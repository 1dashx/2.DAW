// Ejercicio OP1 - 3
// Pide al usuario un número mediante prompt().
// Comprueba si el número es par o impar (utilizando el operador módulo %)
// y muestra un alert() indicando si es par o impar.
let numero = parseInt(prompt("Introduce un numero:"));

if (numero % 2 == 0) {
    alert("El numero " + numero + " es par");
} else {
    alert("El numero " + numero + " es impar");
}
