// ejercicio 3 = Dado un array de temperatura en Celsiud, devolvé un array con las temperaturas en Fahrenheit.

// Formula = "F= C * 1.8 + 32"


const temperaturasC = [0, 20, 30, 40]

const temperaturasF = temperaturasC.map( temperatura => {
    
    const cambioTemperatura =  Number(temperatura * 1.8 + 32);
    
    return cambioTemperatura
}
)

console.log(temperaturasF);
