/*
1-
Ejercicio de bucles:
Escribe un bucle que imprima los números del 1 al 10 
en la consola. */
for (n_inicio = 0; n_inicio <= 10; n_inicio++) {  
    console.log (n_inicio);}
/*
2-
Ejercicio de condicionales:
Escribe una función que tome un número como argumento 
y devuelva "Es par" si el número es par, y "Es impar" 
si el número es impar */
let numero = 0;
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
let numbers = [1,3,4,6,7,9,2,8];
let cuadrado = numbers.map(x => x**2);
console.log(cuadrado);
/*
4-
Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter
para crear un nuevo arreglo que contenga solo
los números pares.*/
let numbers1 = [1,2,3,4];
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
let numbers2 = [2,2,4,4];
let sum_total = numbers2.reduce( (x,y) => (x+y), 0);
console.log(sum_total);
/*
6-
Ejercicio combinado:
Dado un arreglo de palabras, utiliza un bucle para
crear un nuevo arreglo que contenga solo las palabras
que tienen más de 5 caracteres. Luego, utiliza el método
map para convertir cada palabra en mayúsculas */
let words = [ "tito", "chipana", "inostrosa"];
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
let productos = [
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
let hermanos = ["arturo", "piero", "alessandro", "iradid"];
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
for (let n=10; n>=0; n--){console.log(n);}
/*
10-
Ejercicio de condicionales:
Escribe una función que tome un número como argumento 
y devuelva "Positivo" si el número es mayor que 0, 
"Negativo" si el número es menor que 0, y "Cero" si el
número es igual a 0. */
function validarnumero(numero1) {
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
let box = ["dado", "un", "arreglo", "de", "palabras"];
let arr2 = box.map(n => n.length);
 console.log(arr2);
/*
12-
Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter 
para crear un nuevo arreglo que contenga solo 
los números mayores que 5
*/ 
let num1 = [2,6,10,1,3,12];
let nums2 = num1.filter(n => n>5);
console.log(nums2);
/*
13-
Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce 
para calcular el producto de todos los elementos 
del arreglo.
*/
let num2 = [2,3,4,5];
let total = num2.reduce((x,y) => (x*y));
console.log(total);
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
let estudiantes = [
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
let arr = ["DADO", "UN", "ARREGLO", "DE", "PALABRAS"];
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
let libros = [
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


/*
20-
Ejercicio de filter:
Dado un arreglo de números, utiliza el método `filter` 
para crear un nuevo arreglo que contenga solo 
los números impares.
*/

/*
21-
Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método `reduce` 
para calcular la cantidad total de caracteres de todas 
las palabras en el arreglo.
*/

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


/*
25-
Ejercicio de bucles:
Escribe un bucle que imprima la serie de Fibonacci 
hasta el décimo término. (La serie de Fibonacci 
comienza con 0 y 1, y cada término siguiente es la suma 
de los dos anteriores).
*/