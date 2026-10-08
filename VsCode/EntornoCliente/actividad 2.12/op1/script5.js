// Ejercicio OP1 - 5
// Crea un array llamado meses que contenga los 12 meses del año:
// ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
//  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// Recorre el array mediante un bucle for y muestra cada mes tanto por
// consola (console.log) como en el documento HTML (document.write).
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
    document.write(meses[i] + "<br>");
}
