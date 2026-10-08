// Ejercicio OP1 - 9
// Crea una función llamada elegirCiudad().
// Dentro de la función, pregunta al usuario con prompt(): "¿Cual es tu ciudad favorita?".
// Mediante una estructura switch, evalúa la respuesta:
//   - "Zaragoza": muestra alert("Moncayo puro. Capital del Ebro")
//   - "Barcelona": muestra alert("Ciudad Condal")
//   - "Madrid": muestra alert("Capital del pais")
//   - Cualquier otra: muestra alert("No conozco esa ciudad...")

function elegirCiudad() {
    let ciudad = prompt("¿Cual es tu ciudad favorita?");

    switch (ciudad) {
        case "Zaragoza":
            alert("zargoza co");
            break;
        case "Barcelona":
            alert("puigdemon");
            break;
        case "Madrid":
            alert("agua de calidad");
            break;
        default:
            alert("No conozco esa ciudad");
            break;
    }
}
