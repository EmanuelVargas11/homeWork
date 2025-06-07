// ejercicio 1 (varias formas de aplicarlo)

const numeros = [1, 2, 3, 4, 5]

// const cuadradosDeNumeros = numeros.map(numero => {
//     return numero * numero
// })

// console.log(cuadradosDeNumeros);

// const cuadradosDeNumeros = numeros.map(numero => {
    
//     let numCuadrado = numero * numero;

//     return numCuadrado
// })

// console.log(cuadradosDeNumeros);

// const cuadradosDeNumeros = numeros.map(num => num * num)

// console.log(cuadradosDeNumeros);

const cuadradosDeNumeros = numeros.map(num => num**2) 

console.log(cuadradosDeNumeros);
