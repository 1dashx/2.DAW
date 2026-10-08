// Ejercicio OP1 - 1
// Pide al usuario mediante prompt() su nombre, su primer apellido y su edad.
// Calcula su año de nacimiento (2024 - edad).
// Muestra por consola (console.log) el nombre completo concatenado
// y el año de nacimiento obtenido.
let nombre = prompt("Introduce tu nombre:");
let apellido = prompt("Introduce tu primer apellido:");
let fullName = nombre + " " + apellido;

let edad = parseInt(prompt("Introduce tu edad:"));
let Nacimiento = 2024 - edad;
let year = Nacimiento;

console.log("Nombre completo: " + fullName);
console.log("Año de nacimiento: " + year);
