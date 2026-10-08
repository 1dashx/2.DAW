// Ejercicio OP2 - 5
// Dadas las dos siguientes cadenas:
//   let OVNI = "OBJETO VOLADOR NO IDENTIFICADO";
//   let Info = "En un lugar de la mancha";
// Realiza una aplicación Web que mediante JavaScript compruebe si las cadenas
// están escritas en minúsculas, mayúsculas o ambas.
// Emplea obligatoriamente: toUpperCase() y toLowerCase().
// De manera adicional, mejora la aplicación anterior para poder evaluar
// cualquier cadena de texto que introduzca el usuario mediante un prompt().
function comprobarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "está escrita solo en MAYÚSCULAS";
    } else if (cadena === cadena.toLowerCase()) {
        return "está escrita solo en MINÚSCULAS";
    } else {
        return "está escrita en una MEZCLA de mayúsculas y minúsculas";
    }
}

let OVNI = "OBJETO VOLADOR NO IDENTIFICADO";
let Info = "En un lugar de la mancha";

console.log(`La cadena OVNI ("${OVNI}") -> ${comprobarCadena(OVNI)}.`);
console.log(`La cadena Info ("${Info}") -> ${comprobarCadena(Info)}.`);

let textoUsuario = prompt("Introduce un texto para analizar si está en mayúsculas, minúsculas o ambas:");

if (textoUsuario !== null && textoUsuario.trim() !== "") {
    let resultado = comprobarCadena(textoUsuario);
    alert(`Texto introducido:\n"${textoUsuario}"\n\nResultado:\n${resultado}`);
    console.log(`Texto usuario ("${textoUsuario}") -> ${resultado}`);
}
