// ejercicio 1

const numeros = [1, 2, 3, 4, 5]

// const numerosCuadrados = numeros.map(numero => {
//     return numero * numero
// })

// console.log(numerosCuadrados);

const numerosCuadrados = numeros.map(numero => {
    
    let numCuadrado = numero * numero;

    return numCuadrado
})

console.log(numerosCuadrados);
