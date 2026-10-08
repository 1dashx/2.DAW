// Ejercicio OP2 - 2
// Realiza una aplicación Web que mediante JavaScript haga divisiones en binario
// con desplazamiento a la derecha (>>).
// Ejemplo Decimal: 40 / 16 vs Ejemplo binario: 40 >> 4.
// Muestra los resultados por consola.
// (Ayuda: puedes crear una función que use Math.log2 para saber cuántos bits desplazar).
function divisionBinaria(dividendo, divisorPotencia2) {
    let bits = Math.log2(divisorPotencia2);
    return dividendo >> bits;
}

let dividendo = 40;
let divisor = 16;
let bits = Math.log2(divisor);

console.log(`Ejemplo Decimal: ${dividendo} / ${divisor} = ${dividendo / divisor}`);
console.log(`Ejemplo Binario: ${dividendo} >> ${bits} = ${dividendo >> bits}`);
console.log(`Resultado mediante función: ${divisionBinaria(40, 16)}`);