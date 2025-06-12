// ejercicio 5 = Dado un array de strings, devolvé un nuevo array con todas las palabras en mayúsculas.-

const palabras = ["perro", "gato", "ratón"]

const palabrasMayus = palabras.map(mayus => mayus.toUpperCase())

console.log(palabrasMayus);
