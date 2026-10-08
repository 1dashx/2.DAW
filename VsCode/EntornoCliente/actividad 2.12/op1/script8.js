// Ejercicio OP1 - 8
// Pide un número al usuario mediante prompt().
// Calcula el factorial de dicho número utilizando un bucle for
// y muestra el resultado en el documento HTML mediante document.write.
// Ejemplo: factorial de 5 = 5 * 4 * 3 * 2 * 1 = 120.
let numero;
let resultado;

numero = parseInt(prompt("Introduce un numero:"));
resultado = 1;

for (let i = 1; i <= numero; i++) {
    resultado = resultado * i;
}

document.write("El factorial de " + numero + " es: " + resultado);
