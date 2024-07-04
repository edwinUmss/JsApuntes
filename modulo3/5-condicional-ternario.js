let mensaje

const edad = 25

if (edad >= 18) {
  mensaje = 'Eres mayor de edad, puede pasar'
} else {
    mensaje = 'Eres menor de edad, no puedes pasar'
}

console.log(mensaje)

// Ternario
mensaje = edad >= 18 ? 'Eres mayor de edad, puede pasar' : 'Eres menor de edad, no puedes pasar'

console.log(mensaje)