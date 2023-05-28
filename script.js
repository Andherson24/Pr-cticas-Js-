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

