// ejercicio 4 = Dado un array de objetos con personas, devolvé un array que contenga solo los nombres.

const personas = [
    { nombre: "Carlos", edad: 30 },
    { nombre: "Lucía", edad: 25 },
    { nombre: "Mateo", edad: 28 }
];


const nombresExtraidos = personas.map(nombre => nombre.nombre)

console.log(nombresExtraidos);
