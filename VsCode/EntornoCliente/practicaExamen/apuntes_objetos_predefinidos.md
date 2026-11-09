# Objetos Predefinidos en JavaScript (UD 3)

## 1. Math
Proporciona utilidades matemáticas y generación de números aleatorios sin usar `new`.
```javascript
let aleatorio = Math.floor(Math.random() * 50) + 1; // Entero entre 1 y 50
let maximo = Math.max(10, 45, 3, 89);               // 89
let redondeoArriba = Math.ceil(4.1);                // 5
let potencia = Math.pow(2, 3);                      // 8
```

## 2. Date
Permite instanciar y consultar fechas, horas y días de calendario.
```javascript
let hoy = new Date();
let diaMes = hoy.getDate();         // Día del mes (1-31)
let mes = hoy.getMonth();           // Mes (0 = Enero, 11 = Diciembre)
let diaSemana = hoy.getDay();       // Día de la semana (0 = Domingo)
let anio = hoy.getFullYear();       // Año completo (ej: 2026)
let hora = hoy.getHours();          // Hora actual (0-23)
```

## 3. Array
Colección indexada para almacenar listas ordenadas de elementos.
```javascript
let lista = ["A", "B"];
lista.push("C");            // Añade al final: ["A", "B", "C"]
lista.pop();                // Quita el último: ["A", "B"]
let existe = lista.includes("A"); // true
let texto = lista.join(", ");      // "A, B"
```

## 4. String
Objeto para almacenar y procesar secuencias de texto.
```javascript
let saludo = "Hola Mundo";
let mayus = saludo.toUpperCase();         // "HOLA MUNDO"
let corte = saludo.substring(0, 4);       // "Hola"
let incluye = saludo.includes("Mundo");   // true
let limpia = "  texto  ".trim();          // "texto"
```

## 5. Number
Manejo de constantes numéricas, validación de enteros y control de límites.
```javascript
let esEntero = Number.isInteger(42);      // true
let noEsNumero = Number.isNaN(NaN);       // true
let decimal = parseFloat("3.14px");       // 3.14
let entero = parseInt("100", 10);         // 100
```

## 6. BigInt
Permite operar con números enteros mayores al límite seguro de Number ($2^{53} - 1$).
```javascript
let gigante = 9007199254740991n + 2n; // 9007199254740993n
```

## 7. Set
Estructura de colección que almacena únicamente valores únicos sin permitir repetidos.
```javascript
let unicos = new Set();
unicos.add(10);
unicos.add(10); // Se ignora automáticamente
let total = unicos.size; // 1
let contiene = unicos.has(10); // true
```

## 8. Map
Almacena pares clave-valor donde cualquier tipo de dato puede actuar como clave.
```javascript
let mapa = new Map();
mapa.set("edad", 25);
let valor = mapa.get("edad"); // 25
let tiene = mapa.has("edad"); // true
```

## 9. JSON
Serializa objetos o arrays de JavaScript a texto y viceversa.
```javascript
let jsonTexto = JSON.stringify({ id: 1, rol: "admin" }); // '{"id":1,"rol":"admin"}'
let objeto = JSON.parse(jsonTexto);                      // Objeto JS original
```

## 10. Promise
Gestiona operaciones asíncronas y maneja su resultado exitoso o error.
```javascript
fetch("https://api.ejemplo.com/datos")
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.error("Fallo:", err));
```

## 11. Window y Screen (BOM)
Controla la ventana del navegador, historial de navegación y la resolución de la pantalla.
```javascript
let popup = window.open("https://google.com", "popup", "width=400,height=300");
let anchoPantalla = screen.availWidth; // Ancho disponible del monitor sin barra de tareas
window.history.back();                 // Vuelve a la página anterior
```

## 12. Document (DOM)
Permite localizar y crear dinámicamente elementos o tablas en la página web.
```javascript
let tabla = document.getElementById("miTabla");
let fila = tabla.insertRow(0);       // Inserta <tr> al inicio
let celda = fila.insertCell(0);     // Inserta <td> en la fila
celda.innerHTML = "<b>Dato</b>";    // Añade contenido HTML a la celda
```

## 13. Web Storage (localStorage y sessionStorage)
Almacena pares clave-valor como texto en el navegador de manera persistente o temporal.
```javascript
let datoGuardado = localStorage.getItem("usuario"); // 1. Lees el dato del navegador (o null si no existe)
localStorage.setItem("usuario", "David");           // 2. Guardas o actualizas el dato en el navegador
localStorage.removeItem("usuario");                 // 3. Borras el dato del navegador

sessionStorage.setItem("token", "123");             // Temporal: se borra solo al cerrar la pestaña
```
