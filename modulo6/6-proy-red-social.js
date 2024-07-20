/**
 * Requerimientos del reto
 * 
 * 1. El usuario debe poder ingresar su usuaruio y contraseña
 * 2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
 * 3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario
 * 4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline
 */

const userDataBase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
]

const usersTimeLine = [
    {
        username: "andres",
        timeline: "Me encanta Javascript",
    },
    {
        username: "caro",
        timeline: "Bebeloper es lo mejor",
    },
    {
        username: "mariana",
        timeline: "A mi me gusta mas el cafe que el te",
    },
]


function social(username, password) {

    const userExist = userDataBase.find(user => user.username === username && user.password === password)
    
    if (userExist) {
        const userTimeLine = usersTimeLine.find(user => user.username === username)
        console.log(`Bienvenido "${username}", tu mensaje es: ${userTimeLine.timeline}`)
    } else {
        console.log("Usuario o contraseña incorrectos")
    }   
}

const username = "caro"
const password = "456"
social(username, password)