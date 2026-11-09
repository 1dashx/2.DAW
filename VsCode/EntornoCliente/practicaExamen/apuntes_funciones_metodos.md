# Funciones y Métodos Esenciales de Examen (DWEC)

## 1. indexOf()
Busca un elemento o letra y devuelve la posición donde está (o -1 si no lo encuentra).
```javascript
let texto = "JavaScript";
console.log(texto.indexOf("Script")); // 4 (empieza en la posición 4)
console.log(texto.indexOf("HTML"));   // -1 (no existe en la palabra)

let lista = ["Ana", "Luis"];
console.log(lista.indexOf("Luis"));   // 1
```

## 2. includes()
Comprueba si algo existe o está dentro y devuelve siempre true o false.
```javascript
let frase = "Curso de DAW";
console.log(frase.includes("DAW"));   // true
console.log(frase.includes("ASIR"));  // false

let numeros = [5, 10, 15];
console.log(numeros.includes(10));    // true
```

## 3. Number() vs parseInt() vs parseFloat()
Convierten un texto a número según la precisión que necesites.
```javascript
let n1 = Number("42.5");              // 42.5 (guarda el número exacto con decimales)
let n2 = parseInt("42.5");            // 42 (tira los decimales, solo entero)
let n3 = parseInt("50px");            // 50 (lee hasta donde acaban los números)
let n4 = parseFloat("19.99€");        // 19.99 (conserva decimales de un texto)
```

## 4. toUpperCase() y toLowerCase()
Transforman todo el texto a mayúsculas o minúsculas.
```javascript
let palabra = "Hola";
console.log(palabra.toUpperCase());   // "HOLA"
console.log(palabra.toLowerCase());   // "hola"
```

## 5. toFixed()
Fija una cantidad de decimales y devuelve siempre un string (texto).
```javascript
let precio = 12.3456;
let redondeado = precio.toFixed(2);   // "12.35" (texto con 2 decimales redondeado)
let vueltoANumero = +precio.toFixed(2); // 12.35 (con el + se convierte de nuevo en número)
```

## 6. push() y pop()
Añaden o quitan elementos al final de una lista (array).
```javascript
let frutas = ["Manzana"];
frutas.push("Plátano");               // Añade al final: ["Manzana", "Plátano"]
let eliminada = frutas.pop();         // Quita el último: queda ["Manzana"], eliminada vale "Plátano"
```

## 7. unshift() y shift()
Añaden o quitan elementos al principio de una lista (array).
```javascript
let fila = ["B", "C"];
fila.unshift("A");                    // Añade al principio: ["A", "B", "C"]
let primero = fila.shift();           // Quita el primero: queda ["B", "C"], primero vale "A"
```

## 8. join() y split()
Convierten una lista en texto o cortan un texto para convertirlo en lista.
```javascript
let nombres = ["Ana", "Juan", "Sara"];
let textoNombres = nombres.join(", "); // "Ana, Juan, Sara" (de array a texto)

let frase = "hola que tal";
let palabras = frase.split(" ");      // ["hola", "que", "tal"] (de texto a array)
```

## 9. slice() vs substring()
Recortan un trozo de texto o de array indicando el inicio y el fin.
```javascript
let texto = "JavaScript";
console.log(texto.slice(0, 4));       // "Java" (desde el índice 0 hasta el 4 sin incluir el 4)
console.log(texto.slice(-6));         // "Script" (admite negativos: 6 letras desde el final)
console.log(texto.substring(4, 0));   // "Java" (si los pones al revés, los intercambia solos)
```

## 10. trim()
Limpia los espacios en blanco, tabulaciones y saltos de línea de los bordes.
```javascript
let entrada = "   usuario123   ";
let limpio = entrada.trim();          // "usuario123"
```

## 11. charAt()
Devuelve la letra concreta que está en una posición numérica.
```javascript
let palabra = "Avión";
console.log(palabra.charAt(0));       // "A" (primera letra)
console.log(palabra[0]);              // "A" (forma corta idéntica)
```

## 12. Math.floor(), Math.ceil() y Math.round()
Los tres tipos de redondeos matemáticos.
```javascript
console.log(Math.floor(4.9));         // 4 (suelo: siempre redondea hacia abajo)
console.log(Math.ceil(4.1));          // 5 (techo: siempre redondea hacia arriba)
console.log(Math.round(4.5));         // 5 (el más cercano: de 0.5 hacia arriba sube)
console.log(Math.round(4.4));         // 4
```

## 13. Math.random()
Genera un decimal aleatorio entre 0 y 0.9999...
```javascript
let dado = Math.floor(Math.random() * 6) + 1; // Número entero entre 1 y 6
let porCiento = Math.ceil(Math.random() * 100); // Número entero entre 1 y 100
```

## 14. Math.max() y Math.min()
Devuelven el número más grande o más pequeño de los que le pases.
```javascript
let mayor = Math.max(10, 50, 3, 99);  // 99
let menor = Math.min(10, 50, 3, 99);  // 3
```

## 15. toString()
Convierte cualquier número o dato a texto (o cambia su base numérica).
```javascript
let num = 25;
let texto = num.toString();           // "25"
let hexadecimal = (255).toString(16); // "ff" (convierte el número 255 a base hexadecimal)
```
