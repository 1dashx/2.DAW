// Ejercicio OP1 - 6
// Pide al usuario dos números enteros convirtiéndolos con parseInt(prompt(...)).
//   - Comprueba si el primer número es positivo (> 0) o no mediante un alert().
//   - Comprueba si el segundo número es positivo (> 0) o no mediante un alert().
//   - Comprueba cuál de los dos es mayor o si son iguales mediante alert().
let num1 = parseInt(prompt("Introduce el primer numero:"));
let num2 = parseInt(prompt("Introduce el segundo numero:"));

if (num1 > 0) {
    alert(num1 + " es positivo");
} else {
    alert(num1 + " no es positivo");
}

if (num2 > 0) {
    alert(num2 + " es positivo");
} else {
    alert(num2 + " no es positivo");
}

if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
} else if (num2 > num1) {
    alert(num2 + " es mayor que " + num1);
} else {
    alert("Los dos numeros son iguales");
}
