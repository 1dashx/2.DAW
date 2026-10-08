// Ejercicio OP2 - 3
// Realiza una aplicación Web que mediante JavaScript haga multiplicaciones en binario
// con desplazamiento a la izquierda (<<).
// Ejemplo Decimal: 26 x 4 vs Ejemplo binario: 26 << 2.
// Muestra los resultados por consola.
// (Ayuda: puedes crear una función que use Math.log2 para saber cuántos bits desplazar).
function multiplicacionBinaria(numero, factorPotencia2) {
    let bits = Math.log2(factorPotencia2);
    return numero << bits;
}

let numero = 26;
let factor = 4;
let bits = Math.log2(factor);

console.log(`Ejemplo Decimal: ${numero} x ${factor} = ${numero * factor}`);
console.log(`Ejemplo Binario: ${numero} << ${bits} = ${numero << bits}`);
console.log(`Resultado mediante función: ${multiplicacionBinaria(26, 4)}`);
