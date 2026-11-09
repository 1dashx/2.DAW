// EJERCICIO 1: Par o Impar
// Pedir un número entero por prompt e indicar mediante alert si es par o impar.
let numeroParesImpares = function () {
  let introduceNumero = parseInt(prompt("Dime un numero"));
  if (introduceNumero % 2 === 0) {
    alert("El numero " + introduceNumero + " es par");
  } else {
    alert("El numero " + introduceNumero + " es impar");
  }
};

// EJERCICIO 2: Comparar dos números
// Pedir dos enteros por prompt, guardarlos en un array e indicar si ambos son
// positivos y cuál de los dos es mayor (o si son iguales) con document.write.
let numerosMayoresMenores = function () {
  let numeroUno = parseInt(prompt("Dime un numero"));
  let numeroDos = parseInt(prompt("Dame otro numero"));
  let arr = [numeroUno, numeroDos];
  if (arr[0] > 0 && arr[1] > 0) {
    document.write("<h1>SON NUMEROS POSITIVOS</h1>");
  } else {
    document.write("<h1>CONTIENE NEGATIVOS</h1>");
  }
  if (arr[0] > arr[1]) {
    document.write("<h2>" + arr[0] + " Es mayor que " + arr[1] + "</h2>");
  } else if (arr[0] < arr[1]) {
    document.write("<h2>" + arr[0] + " Es menor que " + arr[1] + "</h2>");
  } else {
    document.write("<h2>" + arr[0] + " Ambos valen igual " + arr[1] + "</h2>");
  }
};

// EJERCICIO 3: Validar formato de DNI
// Pedir número de DNI (entero, 8 dígitos, sin espacios) y letra. Validar con bucles
// while y mostrar por pantalla el DNI completo en mayúscula.
let comprobarDNI = function () {
  let numeroDni = prompt("Introduce los numeros del DNI");
  while (!Number.isInteger(Number(numeroDni))) {
    numeroDni = prompt("Tiene que ser un numero entero");
  }
  while (
    numeroDni.includes(" ") ||
    numeroDni.length !== 8 ||
    Number(numeroDni) < 0
  ) {
    numeroDni = prompt("No puede tener espacios y el maximo son 8 numeros");
  }
  let letraDni = prompt("Introduce la letra del DNI");
  while (!/^[a-zA-Z]$/.test(letraDni)) {
    letraDni = prompt("Eso no es una letra");
  }
  let letraDniMayus = letraDni.toUpperCase();
  document.write("<h1>" + numeroDni + letraDniMayus + "</h1>");
};

// EJERCICIO 4: Generador de Euromillones
// Generar sin repetidos 5 números (1 al 50) y 2 estrellas (1 al 10) usando
// Math.random(), Math.ceil() y arrays con while. Mostrar el resultado.
let generadorEuroMillon = function () {
  let arrNumeros = [];
  let arrEstrellas = [];

  while (arrNumeros.length < 5) {
    let numeros = Math.ceil(Math.random() * 50);
    if (!arrNumeros.includes(numeros)) {
      arrNumeros.push(numeros);
    }
  }
  while (arrEstrellas.length < 2) {
    let estrella = Math.ceil(Math.random() * 10);
    if (!arrEstrellas.includes(estrella)) {
      arrEstrellas.push(estrella);
    }
  }
  document.write("<h1>Números: " + arrNumeros + "</h1>");
  document.write("<h1>Estrellas: " + arrEstrellas + "</h1>");
};

// EJERCICIO 5: Mayor y Menor de un Array
// Dado un array de 10 enteros, recorrerlo con un bucle for para encontrar
// el valor máximo y el valor mínimo, y mostrarlos por pantalla.
let buscarMayorMenorArray = function () {
  let arr = [5, 3, 1, 8, 4, 7, 12, 8, 3, 9];
  let arrMayor = arr[0];
  let arrMenor = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arrMayor) {
      arrMayor = arr[i];
    }
    if (arr[i] < arrMenor) {
      arrMenor = arr[i];
    }
  }
  document.write("<h1> Numero mayor: " + arrMayor + "</h1>");
  document.write("<h1> Numero menor: " + arrMenor + "</h1>");
};

// EJERCICIO 6: Formatear Fecha (Date + Array)
// Obtener la fecha actual con new Date() y mostrar por pantalla un texto con
// formato: "Hoy es [Día_Semana], [Día] de [Mes] del [Año], y son las [HH:MM]".
// Usar arrays para traducir getDay() (0-6) y getMonth() (0-11).
let formatearFecha = function () {
  let fecha = new Date();
  let diaSemana = fecha.getDay();
  let dia = fecha.getDate();
  let mes = fecha.getMonth();
  let año = fecha.getFullYear();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  let arrDay = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let arrMonth = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let nombreDia = arrDay[diaSemana];
  let nombreMes = arrMonth[mes];

  document.getElementById("reloj").innerHTML =
    nombreDia +
    ", " +
    dia +
    " de " +
    nombreMes +
    " de " +
    año +
    " - " +
    hora +
    ":" +
    minutos +
    ":" +
    segundos;
};

// EJERCICIO 7: Analizador de Cadenas (String)
// Pedir una frase por prompt y mostrar por pantalla:
// 1. Longitud total de la frase.
// 2. La frase convertida completamente a mayúsculas.
// 3. La frase convertida completamente a minúsculas.
// 4. Si la frase contiene la palabra "JavaScript" (true/false).
let analizarCadena = function () {
  let frase = prompt("Dime una frase");

  let contadorFrase = frase.length;
  alert("Longuitud de su frase: " + contadorFrase);

  let fraseM = frase.toUpperCase();
  alert("Frase en mayusculas: " + fraseM);

  let frasem = frase.toLowerCase();
  alert("Frase en minusculas: " + frasem);

  if (frase.includes("JavaScript")) {
    alert("Contiene palabra JavaScript");
  } else {
    alert("No contiene la palabra JavaScript");
  }
};

// EJERCICIO 8: Contador de Vocales y Palíndromo
// Pedir una palabra o frase por prompt y mostrar por pantalla:
// 1. Cuántas vocales (a, e, i, o, u) tiene en total.
// 2. Si es un palíndromo (se lee exactamente igual al revés, ej: "radar" o "ana").
let analizarTextoAvanzado = function () {
  let palabra = prompt("Dame una palabra").toUpperCase();
  let contadorVocales = 0;
  let palabraNormal = "";
  let palabraInversa = "";

  for (let i = 0; i < palabra.length; i++) {
    palabraNormal += palabra[i];
    if (palabra[i].includes("A" || "E" || "I" || "O" || "U")) {
      contadorVocales++;
    }
  }
  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInversa += palabra[i];
  }
  alert("Vocales contenida: " + contadorVocales);
  if (palabraNormal === palabraInversa) {
    alert("Es palindromo");
  } else {
    alert("No es un palindromo");
  }
};

// EJERCICIO 9: Contador de Clics Persistente
// Crear un contador de visitas o clics que:
// 1. Lea el valor guardado previamente en el navegador (si no existe, empieza en 0).
// 2. Incremente el contador en 1 cada vez que se recarga la página o se ejecuta la función.
// 3. Guarde el nuevo valor de forma permanente en el navegador.
// 4. Muestre por pantalla mediante alert o document.write el total acumulado de visitas.
let contadorPersistente = function () {
  let contadorClics = localStorage.getItem("contadorClics");

  if (contadorClics === null) {
    contadorClics = 0;
  } else {
    contadorClics = parseInt(contadorClics);
  }

  contadorClics++;

  localStorage.setItem("contadorClics", contadorClics);

  document.write("<h1>Contador de clics: " + contadorClics + "</h1>");
};

// EJERCICIO 10: Popup Centrado en Pantalla
// Crear una función que abra una ventana emergente (popup) con una URL (ej: https://google.com):
// 1. La ventana debe tener un tamaño fijo de 500px de ancho y 400px de alto.
// 2. Debe calcular su posición para aparecer exactamente centrada en la pantalla del usuario.
// 3. Abrir la ventana con las dimensiones y coordenadas calculadas.
let abrirVentanaCentrada = function () {
  let popUp = windwo.open(
    "https://google.com",
    "popup",
    "width=500,height=400",
  );
  let anchoPantalla = window.innerWidth;
  let altoPantalla = window.innerHeight;
  let anchoVentana = 500;
  let altoVentana = 400;
  let posicionX = (anchoPantalla - anchoVentana) / 2;
  let posicionY = (altoPantalla - altoVentana) / 2;

  popUp.moveTo(posicionX, posicionY);
};

// EJERCICIO 11 (AMPLIACIÓN): Calificación DWEC con Filtro Eliminatorio
// Pedir nota de proyecto y nota de examen (0 a 10) usando prompt:
// 1. Si cualquiera de las dos notas es estrictamente menor a 4.5, mostrar "Suspenso" directamente (sin calcular media).
// 2. Si ambas son >= 4.5, calcular la media:
//    - Menor a 5: "Suspenso"
//    - De 5 a menos de 7: "Aprobado"
//    - De 7 a menos de 9: "Notable"
//    - De 9 a 10: "Sobresaliente"
// 3. Mostrar la calificación final por pantalla.
let calificacionDWEC = function () {
  let notaProyecto = Number(prompt("Introduce su nota del proyecto (0/10)"));

  while (notaProyecto < 0 || notaProyecto > 10) {
    // actuamos con while en vez de if, ya que si el usuario se equivoca varias veces se repita las veces que haga falta
    notaProyecto = Number(prompt("Nota inferior o superior"));
  }
  if (notaProyecto < 4.5) {
    alert("HAS SUSPENDIDO PAYASO");
    document.write("<h1>" + notaProyecto + "</h1>");
    return;
  }
  switch (true) {
    case notaProyecto < 5:
      alert("SUSPENSO");
      break;
    case notaProyecto >= 5 && notaProyecto < 7:
      alert("APROBADO");
      break;
    case notaProyecto >= 7 && notaProyecto <= 9:
      alert("Notable");
      break;
    case notaProyecto >= 9 && notaProyecto <= 10:
      alert("SOBRESALIENTE");
      break;
    default:
  }
  document.write("<h1>" + notaProyecto + "</h1>");
};

// EJERCICIO 12 (AMPLIACIÓN): Generador de Tabla Dinámica de Multiplicar
// Pedir un número entero por prompt y generar dinámicamente en el documento una tabla HTML:
// 1. Obtener la referencia al elemento tabla del HTML.
// 2. Crear una fila de cabecera con el título de la tabla.
// 3. Mediante un bucle del 1 al 10, insertar 10 filas (una para cada operación).
// 4. En cada fila insertar 2 celdas: una con la operación (ej: "5 x 3") y otra con el resultado (ej: "15").
// 5. Los resultados pares deben tener fondo gris claro y los impares blanco.
let generarTablaMultiplicar = function () {
  let numero = parseInt(prompt("Dime un número para multiplicar"));
  let tabla = document.getElementById("tablaMultiplicar");
  // El bucle repite esto 10 veces: cuando i vale 1, 2, 3... hasta 10
  for (let i = 1; i <= 10; i++) {
    let fila = tabla.insertRow(); // Crea una nueva fila en cada vuelta
    let izquierda = fila.insertCell();
    izquierda.innerHTML = numero + " x " + i;
    let derecha = fila.insertCell();
    derecha.innerHTML = numero * i;
    
// COLOR -------------------------------------------------------------
    let resultado = numero * i;
    derecha.innerHTML = resultado;

    if (resultado % 2 === 0) {
      derecha.style.backgroundColor = "Orange";
      derecha.style.color = "Black";
    }else{
      derecha.style.backgroundColor = "Green";
      derecha.style.color = "White";
      
    }
  }
};
