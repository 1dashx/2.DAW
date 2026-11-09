# Casos Teóricos Comunes en Exámenes (DWEC)

## 1. TypeError (Error de Tipo)
Ocurre cuando intentas tratar un dato como si fuera otro o reasignar una constante.
```javascript
const pi = 3.14;
pi = 5;                        // TypeError: Assignment to constant variable

let numero = 50;
numero.toUpperCase();          // TypeError: numero.toUpperCase is not a function

let vacio = null;
console.log(vacio.nombre);     // TypeError: Cannot read properties of null
```

## 2. ReferenceError (Error de Referencia)
Ocurre cuando intentas usar una variable que no existe o antes de declararla con `let`/`const`.
```javascript
console.log(total);            // ReferenceError: total is not defined

console.log(edad);             // ReferenceError: Cannot access 'edad' before initialization
let edad = 20;

miFuncionInexistente();        // ReferenceError: miFuncionInexistente is not defined
```

## 3. NaN (Not a Number)
Aparece cuando intentas hacer operaciones matemáticas con un texto que no es un número.
```javascript
let calculo = "hola" * 2;      // NaN: no se puede multiplicar un texto por un número
let parseo = parseInt("abc");  // NaN: no empieza por ningún dígito numérico
let division = 0 / 0;          // NaN: indeterminación matemática
let raiz = Math.sqrt(-9);      // NaN: no existe raíz real de número negativo
```

## 4. undefined (Valor Sin Definir)
Aparece cuando algo existe o se consulta, pero nadie le ha metido ningún valor dentro.
```javascript
let nombre;
console.log(nombre);           // undefined: variable declarada pero sin valor asignado

let lista = [10, 20];
console.log(lista[5]);         // undefined: esa posición en el array no existe

let palabra = "Hola";
console.log(palabra[-1]);      // undefined: los índices negativos con corchetes no existen
```

## 5. null (Valor Nulo)
Se usa cuando quieres indicar expresamente que una variable está vacía o no tiene ningún valor.
```javascript
let coche = null;              // Dices a propósito que no tienes coche (está vacío)
console.log(coche);            // null

coche = "Seat";                // Más adelante le metes un valor
console.log(coche);            // "Seat"
```

## 6. False en condiciones (Falsy)
Los únicos 6 valores en todo JavaScript que hacen que un `if` se vaya directamente al `else`.
```javascript
if (false) {}      // Salta al else
if (0) {}          // Salta al else: el número cero es falso
if ("") {}         // Salta al else: texto vacío es falso
if (null) {}       // Salta al else
if (undefined) {}  // Salta al else
if (NaN) {}        // Salta al else
```

## 7. True en condiciones (Truthy)
Cosas que parecen vacías o falsas pero que en un `if` entran siempre como verdaderas.
```javascript
if ("0") {}        // Entra: tiene texto dentro (no está vacío)
if ("false") {}    // Entra: tiene texto dentro
if (-5) {}         // Entra: cualquier número que no sea 0 es true
if ([]) {}         // Entra: una lista vacía existe en memoria
if ({}) {}         // Entra: un objeto vacío existe en memoria
```

## 8. Texto vs Número con el signo +
Si hay texto de por medio, el signo `+` junta letras en lugar de hacer la suma matemática.
```javascript
let a = "5" + 2;               // "52" (junta el texto "5" con el 2)
let b = Number("5") + 2;       // 7 (ahora sí hace la suma matemática)
let c = "5" - 2;               // 3 (la resta, multiplicación y división siempre fuerzan número)
```
