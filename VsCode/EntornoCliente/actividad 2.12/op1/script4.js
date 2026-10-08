// Ejercicio OP1 - 4
// Pide al usuario dos números mediante prompt().
// Comprueba si el primer número es múltiplo del segundo (num1 % num2 == 0)
// y muestra un alert() informando de si es múltiplo o no.
let num1 = parseInt(prompt("Introduce el primer numero:"));
let num2 = parseInt(prompt("Introduce el segundo numero:"));

if (num1 % num2 == 0) {
    alert(num1 + " es multiplo de " + num2);
} else {
    alert(num1 + " no es multiplo de " + num2);
}
