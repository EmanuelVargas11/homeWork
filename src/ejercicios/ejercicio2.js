// ejercicio 2 = Dado un array de nombres, devolve un nuevo array con el prefijo "Sr, " agregado a cada nombre.

const nombres = ["Juan", "Ana", "Luis"]

// let saludo = 'Hola, ' + 'Gente'
// console.log(saludo);


// const agregarPrefijoArr = nombres.map(arr => 'Sr. ' + arr)
const agregarPrefijoArr = nombres.map(arr => `Sr. ${arr}`)

console.log(agregarPrefijoArr);
