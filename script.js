/*
1-
Ejercicio de bucles:
Escribe un bucle que imprima los números del 1 al 10 
en la consola. */
     /*for (n_inicio = 0; n_inicio <= 10; n_inicio++) {  
    console.log (n_inicio);}
/*
2-
Ejercicio de condicionales:
Escribe una función que tome un número como argumento 
y devuelva "Es par" si el número es par, y "Es impar" 
si el número es impar */
 /* let numero = 0;
    if (numero %2 === 2) { 
        console.log( `el numero ${numero} es par` );   
    }
    else  {
        console.log( `el numero ${numero} es inpar`);
    }
/*
3-
Ejercicio de map:
Dado un arreglo de números, utiliza el método map 
para crear un nuevo arreglo que contenga el cuadrado 
de cada número(sin usar Math.pow()). */
    /*let numbers = [1,3,4,6,7,9,2,8];
    let cuadrado = numbers.map(x => x**2);
    console.log(cuadrado);
/*
4-
Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter
para crear un nuevo arreglo que contenga solo
los números pares.*/
/*    let numbers1 = [1,2,3,4];
    let filtrado = numbers1.filter ((x) => {
    if (x %2 === 0) {
        return x;
    }
    });
    console.log(filtrado);
/*
5-
Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce
para calcular la suma de todos los elementos del
arreglo. */
  /*  let numbers2 = [2,2,4,4];
    let sum_total = numbers2.reduce( (x,y) => (x+y), 0);
    console.log(sum_total);
/*
6-
Ejercicio combinado:
Dado un arreglo de palabras, utiliza un bucle para
crear un nuevo arreglo que contenga solo las palabras
que tienen más de 5 caracteres. Luego, utiliza el método
map para convertir cada palabra en mayúsculas */
/*    let words = [ "tito", "chipana", "inostrosa"];
    let letras5 = [];
    for(let i = 0; i < words.length; i++) {
        if (words[i].length > 5){
            letras5.push(words[i]);
        }
    }
    console.log(letras5);
    let enmayuscula = letras5.map((x) => x.toUpperCase())
    console.log(enmayuscula);
/*
7-
Ejercicio combinado:
Dado un arreglo de objetos que representan productos, 
utiliza el método filter para crear un nuevo arreglo 
que contenga solo los productos que están en stock 
(es decir, aquellos cuya propiedad stock sea verdadera).
Luego, utiliza el método reduce para calcular el precio 
total de todos los productos en stock. */
/*    let productos = [
        {
            producto: "iphone",
            price: 1500.00,
            stock : true
        },
        {
            producto: "xbox",
            price: 400.00,
            stock : true
        },
        {
            producto: "ipad",
            price: 100.00,
            stock : false
        },
        {
            producto: "apple watch",
            price: 200.00,
            stock: false
        },
    ];
    let haystock = productos.filter ((x) => {
        if(x.stock === true){return x}
    });
    console.log(haystock)
    let costototal = haystock.reduce( (total,element) => (element.price+total),0);
    console.log(`todo cuesta ${costototal} dolares`)
/*
8-
Ejercicio combinado:
Dado un arreglo de nombres, utiliza el método map para 
crear un nuevo arreglo que contenga solo los nombres 
que comienzan con la letra "A". Luego, utiliza el método 
reduce para concatenar todos los nombres en una sola 
cadena separada por comas. */
   /* let hermanos = ["arturo", "piero", "alessandro", "iradid"];
    let nombrescona = hermanos.filter (function(nombre){
    return nombre[0] === "a";
    });
    console.log(nombrescona)
    let resultado2 = nombrescona.reduce(function(acumulador, nombre){
    return acumulador + ", " +nombre; 
    });
    console.log (resultado2);
/*
9-
Ejercicio de bucles:
Escribe un bucle que imprima los números del 10 al 1 
en la consola, en orden descendente. */
/*  for (let n=10; n>=0; n--){console.log(n);}

/*
10-
Ejercicio de condicionales:
Escribe una función que tome un número como argumento 
y devuelva "Positivo" si el número es mayor que 0, 
"Negativo" si el número es menor que 0, y "Cero" si el
número es igual a 0. */
  /*  function validarnumero(numero1) {
    let result;

    if(numero1 < 0){result= "positivo"}
    else if(numero1 > 0){result = "negativo"}
    else if(numero1 === 0){result= "cero"}
    return result;
    }
    console.log(validarnumero(0));
    console.log(validarnumero(-11));
    console.log(validarnumero(4));
/*
11-
Ejercicio de map:
Dado un arreglo de palabras, utiliza el método map 
para crear un nuevo arreglo que contenga la longitud 
de cada palabra.
*/
 /*   let box = ["dado", "un", "arreglo", "de", "palabras"];
    let arr2 = box.map(n => n.length);
    console.log(arr2);
/*
12-
Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter 
para crear un nuevo arreglo que contenga solo 
los números mayores que 5
*/ 
/*    let num1 = [2,6,10,1,3,12];
    let nums2 = num1.filter(n => n>5);
    console.log(nums2);
/*
13-
Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce 
para calcular el producto de todos los elementos 
del arreglo.
*/
/*    let num2 = [2,3,4,5];
    let total1 = num2.reduce((x,y) => (x*y));
    console.log(total1);
/*
14-
Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, 
utiliza el método filter para crear un nuevo arreglo 
que contenga solo los estudiantes que tienen una 
calificación mayor o igual a 80. Luego, utiliza 
el método map para crear un nuevo arreglo que contenga 
solo los nombres de esos estudiantes. 
*/
/*    let estudiantes = [
        {
            nombre: "peach",
            calificación: 96,
        },
        {
            nombre: "mario",
            calificación: 70,
        },
        {
            nombre: "bowser",
            calificación: 50,
        },
        {
            nombre: "luigi",
            calificación: 88,
        },
    ]

    let noJalados = estudiantes.filter(elemento_estudiante => elemento_estudiante.calificación>80)
    let promo2023 = noJalados.map(elemento_estudiante => elemento_estudiante.nombre);
    console.log(promo2023)
/*
15-
Ejercicio combinado:
Dado un arreglo de palabras, utiliza el método 
filter para crear un nuevo arreglo que contenga 
solo las palabras que contienen la letra "a". Luego, 
utiliza el método map para convertir cada palabra 
en minúsculas. 
*/
  /*  let arr = ["DADO", "UN", "ARREGLO", "DE", "PALABRAS"];
    let contieneA = arr.filter(elemento => elemento.includes("A"))
    let contieneA_min= contieneA.map(elemento => elemento.toLowerCase())
    console.log(contieneA_min);
/*
16-
 Ejercicio combinado:
Dado un arreglo de objetos que representan libros, 
utiliza el método `filter` para crear un nuevo arreglo 
que contenga solo los libros cuyo autor sea 
"J.K. Rowling". Luego, utiliza el método `reduce` 
para calcular la suma de las páginas de todos 
los libros seleccionados.
*/
 /*   let libros = [
        {
            libro: "harry potter 1",
            autor: "J.K. Rowling",
            paginas: 10000
        },
        {
            libro: "harry potter 2",
            autor: "J.K. Rowling",
            paginas: 800
        },
        {
            libro: "sample",
            autor: "John Doe",
            paginas: 50
        },
        {
            libro: "sample book",
            autor: "Jane Doe",
            paginas: 200
        }
    ]

    let librosDeRowling = libros.filter(elemento_libro => elemento_libro.autor === "J.K. Rowling");
    console.log(librosDeRowling)
    let paginasDeRowling = librosDeRowling.reduce((cantidad,paginaslibroRowling) => (cantidad+paginaslibroRowling.paginas),0);
    console.log(paginasDeRowling)
/*
17-
Ejercicio de bucles:
Escribe un bucle que imprima los números pares 
del 1 al 20 en la consola.
*/
 /*   for(let n=0; n<=20; n++){
        if(n%2===0){
            console.log(n);
        }
    }
/*
18-
Ejercicio de condicionales:
Escribe una función que tome una cadena como 
argumento y devuelva "Es una frase" si la cadena 
contiene espacios en blanco, y "Es una palabra" 
si la cadena no contiene espacios en blanco.
*/

/*
19-
Ejercicio de map:
Dado un arreglo de nombres, utiliza el método `map` 
para crear un nuevo arreglo que contenga solo 
los nombres en mayúsculas.
*/
 /*   let name2 = ["MARIO", "peach", "BOWSER", "luigi"];
    let Mayusculas = name2.map(elemento_nombre => {
        let enMayusculas = elemento_nombre.toUpperCase()  
        if(elemento_nombre === enMayusculas){
            return elemento_nombre;
        }
    });
    console.log(Mayusculas);
/*
20-
Ejercicio de filter:
Dado un arreglo de números, utiliza el método `filter` 
para crear un nuevo arreglo que contenga solo 
los números impares.
*/
  /*  let num3 = [44,2,5,6,1,33,19];
    let impares = num3.filter(num_elemento => (num_elemento%2 !== 0));
    console.log(impares);
/*
21-
Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método `reduce` 
para calcular la cantidad total de caracteres de todas 
las palabras en el arreglo.
*/
 /*   let aplicar = ["ejercicio", "de", "reduce"];
    let calcular1 = aplicar.reduce((sumado,caracteres) => (sumado + caracteres.length),0)
    console.log(calcular1);
/*
22-
Ejercicio combinado:
Dado un arreglo de objetos que representan productos, 
utiliza el método `filter` para crear un nuevo arreglo 
que contenga solo los productos cuyo precio sea mayor 
a $50. Luego, utiliza el método `map` para crear un
nuevo arreglo que contenga solo los nombres de esos 
productos.
*/
 /*   let vitrina = [ 
        { name3: "teclado",
            price1: 20,
        },
        {name3: "monitor",
            price1: 200,
        },
        {name3: "lampara",
            price1: 50,
        }
    ]

    let precio1 = vitrina.filter( x => x.price1 > 50 );
    console.log(precio1);
    let howis = precio1.map( x => x.name3);
    console.log(howis);
/*
23-
Ejercicio combinado:
Dado un arreglo de números, utiliza el método `filter` 
para crear un nuevo arreglo que contenga solo 
los números que sean múltiplos de 3. Luego, utiliza 
el método `reduce` para calcular la suma de los números 
seleccionados.
*/


/*
24-
Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, 
utiliza el método `filter` para crear un nuevo arreglo 
que contenga solo los estudiantes que tienen una 
calificación promedio mayor o igual a 90. Luego, 
utiliza el método `reduce` para calcular el promedio 
de las calificaciones de los estudiantes seleccionados.
*/
   /* let alumn = [ 
        {student: "victor",
            nota: 20,
        },
        {student: "monago",
            nota: 50,
        },
        {student: "lara",
            nota: 90,
        },
        {student: "mariana",
            nota: 120,
        },
        {student: "josue",
            nota: 80,
        }
    ]

    let calificacion1 = alumn.filter( x => x.nota >= 90 );
    console.log(calificacion1);
    let promedio2 = calificacion1.reduce( (n,e) => (n += e.nota),0);
    console.log(promedio2);
/*
25-
Ejercicio de bucles:
Escribe un bucle que imprima la serie de Fibonacci 
hasta el décimo término. (La serie de Fibonacci 
comienza con 0 y 1, y cada término siguiente es la suma 
de los dos anteriores).
*/
let num1 = 0;
let num2 = 1;
let n = 0;

for (let i = 2; i <= 10; i++) {
    console.log(num1)
    n = num2 + num1;
    num1 = num2;
    num2 = n;
}

/*
26-
Ejercicio de condicionales:
Escribe una función que tome una cadena como argumento
y devuelva "Es un palíndromo" si la cadena es igual 
al revés, y "No es un palíndromo" si no lo es.
*/
function esPalindrome(cadena) {

    let largo = cadena.length;

    for (let i = 0; i < largo / 2; i++) {
        if (cadena[i] !== cadena[largo - 1 - i]) {
            return 'No es un palíndromo';
        }
    }
    return 'Es un palíndromo';
}
/*
27. Ejercicio de map:
Dado un arreglo de números, utiliza el método `map` para crear un nuevo arreglo que 
contenga el doble de cada número.
*/
let nums = [44, 18, 5, 6, 1, 33, 9]
let doubleNums = nums.map(numero => numero * 2)
console.log(doubleNums)
/*28. Ejercicio de filter:
Dado un arreglo de palabras, utiliza el método `filter` para crear un nuevo arreglo 
que contenga solo las palabras que tengan más de 4 caracteres.
*/
let arr = ["DADO", "UN", "ARREGLO", "DE", "PALABRAS"];
let arr4 = arr.filter(elemento => {
    if (elemento.length > 4) {
        return elemento;
    }
})
/*29. Ejercicio de reduce:
Dado un arreglo de números, utiliza el método `reduce` para calcular el producto de los
 números pares.
*/
let numeros = [2, 3, 4, 5, 10];
let total = numeros.reduce((x, y) => {
    if (y % 2 === 0) {
        return x * y;
    }
    return x;
});
console.log(total);
/*30. Ejercicio combinado:
Dado un arreglo de objetos que representan empleados, utiliza el método `filter` para 
crear un nuevo arreglo que contenga solo los empleados con un salario mayor a $5000. 
Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres 
de los empleados seleccionados.
*/
let empleados = [
    {
        nombre: "peach",
        salario: 3000,
    },
    {
        nombre: "mario",
        salario: 10000,
    },
    {
        nombre: "bowser",
        salario: 4000,
    },
    {
        nombre: "luigi",
        salario: 11000,
    },
]
let emp5k = empleados.filter(x => {
    if (x.salario > 5000) {
        return x;
    }
});

let emp5knom = emp5k.map(x => x.nombre);
console.log(emp5knom)
/*31. Ejercicio combinado:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo 
que contenga solo los números que sean divisibles por 5 y mayores a 10. Luego, 
utiliza el método `reduce` para calcular la suma de los números seleccionados.
*/
let num31 = [44, 18, 5, 6, 10, 50, 9]
let numdiv5 = num31.filter(x => {
    if (x % 5 === 0) {
        return x
    }
})
let numdiv5sum = numdiv5.reduce((x, y) => (x + y), 0)
console.log(numdiv5sum)
/*32. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método `filter` para 
crear un nuevo arreglo que contenga solo los productos en stock con un precio menor a $100. 
Luego, utiliza el método `reduce` para calcular el precio total de los productos seleccionados.
*/
let productos32 = [
    {
        producto: "iphone",
        price: 15.00,
        stock: true
    },
    {
        producto: "xbox",
        price: 400.00,
        stock: true
    },
    {
        producto: "ipad",
        price: 20.00,
        stock: true
    },
    {
        producto: "apple watch",
        price: 200.00,
        stock: false
    },
]

let stock32 = productos32.filter(producto => {
    if ((producto.stock === true) && (producto.price < 100)) {
        return producto;
    }
});

let stock32reduced = stock32.reduce((x, y) => (x + y.price), 0)
/*33. Ejercicio de bucles:
Escribe un bucle que imprima los números impares del 1 al 50 en la consola.
*/
for (let n = 0; n <= 50; n++) {
    if (!(n % 2 === 0)) {
        console.log(n);
    }
}
/*34. Ejercicio de condicionales:
Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos.
*/
function mayorDe2(x, y) {
    if (x > y) { return x }
    else return y;
}
console.log(mayorDe2(3, 1))
/*35. Ejercicio de map:
Dado un arreglo de palabras, utiliza el método `map` para crear un nuevo arreglo que contenga
 la primera letra de cada palabra.
*/
let arr35 = ["DADO", "UN", "ARREGLO", "DE", "PALABRAS"];
let primerL = arr35.map(x => x[0])
console.log(primerL)
/*36. Ejercicio de filter:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que 
contenga solo los números divisibles por 3.
*/
let arr36 = [44, 18, 5, 6, 10, 50, 9]
let numdiv3 = arr36.filter(x => {
    if (x % 3 === 0) {
        return x
    }
})
console.log(numdiv3)
/*37. Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método `reduce` para concatenar todas las palabras 
en una sola cadena.
*/
let arr37 = ["DADO", "UN", "ARREGLO", "DE", "PALABRAS"];
let arr37juntos = arr37.reduce((x, y) => (x + y))
console.log(arr37juntos);

/*38. Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, utiliza el método `filter` para crear 
un nuevo arreglo que contenga solo los estudiantes que tienen una calificación mayor a 90. 
Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres y calificaciones de esos estudiantes.
*/
let estudiantes = [
    {
        nombre: "peach",
        calificacion: 96,
        estado: "pass"
    },
    {
        nombre: "mario",
        calificacion: 91,
        estado: "pass"

    },
    {
        nombre: "bowser",
        calificacion: 50,
        estado: "fail"

    },
    {
        nombre: "luigi",
        calificacion: 99,
        estado: "pass"

    },
]
let noJalados = estudiantes.filter(elemento_estudiante => elemento_estudiante.calificacion >= 90)
let mapNoJalados = noJalados.map(x => [x.calificacion, x.nombre])
console.log(mapNoJalados)

/*39. Ejercicio combinado:
Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que 
contenga solo los números positivos. Luego, utiliza el método `reduce` para calcular la suma
 de los números seleccionados.
*/
let arr39 = [44, 18, -5, 6, 10, -50, -9]
let pos39 = arr39.filter(x => {
    if (x > 0) {
        return x
    }
})
let suma39 = pos39.reduce((x, y) => (x + y), 0)
console.log(suma39)
/*40. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método `filter` para
 crear un nuevo arreglo que contenga solo los productos con un precio mayor a $50. Luego, 
 utiliza el método `reduce` para calcular el promedio de los precios de los productos 
 seleccionados.
 */
 let productos40 = [
    {
        producto: "iphone",
        price: 15.00,
        stock: true
    },
    {
        producto: "xbox",
        price: 400.00,
        stock: true
    },
    {
        producto: "ipad",
        price: 20.00,
        stock: true
    },
    {
        producto: "apple watch",
        price: 200.00,
        stock: false
    },
]
let stock40 = productos32.filter(producto => producto.price > 50);
let reduce40 = stock40.reduce((total, y) => (total + y.price), 0) / stock40.length;