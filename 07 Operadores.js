/*
    Operadores

    Concepto -> Nos permite realizar operaciones al usar valores y variables

    Tipos de Operadores
    - Aritméticos
    - Asignación
    - Comparación
    - Lógicos

*/

/*
    Aritmeticos

    + -> Suma
    - -> Resta
    * -> Multiplicación
    / -> División
    % -> Modulo (Residuo)
    ** -> Potencia (Exponentes) - ES2016
    ++ -> Incremento
    -- -> Decremento

*/
let x = 10;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(Math.pow(x, y)); // Uso en versiones de Js inferiores a la de 2016
// Pre Incremento -> Incremento antes de utilizar la variable a
let a;
a = 0;
++a;
console.log(a);
// Post Incremento -> Incremento despues de que se vuelve a llamar a la variable a
a++;
console.log(a);
// Pre Incremento -> Antes de utilizar la variable b
let b;
b = 10;
--b;
console.log(b);
// Post Decremento -> Despues de que se vuelve a llamar a la variable b
b--;
console.log(b);

// Ejemplo

a = 5;
b = 2
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b);

/*
    Asignación

    = -> Asignación
    += -> Suma Compuesta --> x += 3 / x = x + 3
    -= -> Resta Compuesta --> x -= 3 / x = x - 3
    *= -> Multiplicacion Compuesta --> x *= 3 / x = x * 3
    /= -> Division Compuesta --> x /= 3 / x = x / 3
    %= -> Modulo Compuesto --> x %=  3/ x = x % 3
    **= -> Modulo Compuesto --> x **= 3 / x = x ** 3

*/

let miNumero = 10;
console.log(miNumero);

// Asignación
miNumero = 20;
console.log(miNumero);

// Suma compuesta
miNumero += 5;
console.log(miNumero);

//Resta Compuesta
miNumero -= 3;
console.log(miNumero);

// Multiplicación Compuesta
miNumero *= 2;
console.log(miNumero);

// División Compuesta
miNumero /= 4;
console.log(miNumero);

// Modulo compuesto
miNumero %= 2;
console.log(miNumero);

// Exponente Compuesto
miNumero = 2;
miNumero **= 2;
console.log(miNumero);

/*
    Comparación

    == -> Es Igual a
    === -> Igualdad Exacta
    != -> Distinto de
    !== --> Distinto Exacto
    > -> Mayor que
    >= -> Mayor Igual que
    < -> Menor que
    <= -> Menor Igual que

*/

let d = 5;
let e = '5';

console.log(d);
console.log(e);

// Realiza la conversion para realizar la comparacion entre valores de las variables
console.log("d == e ->", d == e);
// Realiza la comparacion del valor de la variable y el tipo de variable
console.log("d === e ->", d === e);

// string interpolation -> se usa con backticks `` para imprimir variables en una cadena
console.log(`d != e ${d != e}`)
console.log(`d !== e ${d !== e}`)

let g = 5;
let h = 5;
console.log(`g > h ${g > h}`)
console.log(`g >= h ${g >= h}`)

console.log(`g < h ${g > h}`)
console.log(`g <= h ${g >= h}`)

/*
    Lógicos

    && -> Y - AND --> Regresa verdadero si ambos valores lógicos son verdaderos
    || -> O - OR --> Regresa verdadero si una de los valores lógicos es verdadero
    ! -> NO - NOT --> Invierte el resultado lógico de una expresión

*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

// Comparaciones de valores dentro de un rango
let minimo = 0, maximo = 5;
let dato = 3;
let dentroRango = dato >= minimo && dato <= maximo;
console.log(dentroRango);
