function Rocket (name) { //las fucnones constructoras inician con mayusculas
    this.name = name
    this.launchMessage = function () {
        console.log(`${this.name} has been launched`)
    }
}

const falcon9 = new Rocket('Falcon 9')
const falconHeavy = new Rocket('Falcon Heavy')
console.log(falcon9.name) // Falcon 9
console.log(falconHeavy.launchMessage()) // Falcon Heavy has been launched

function Rocket1 (name, ownMessage) {
    this.name = name
    this.launchMessage = () => ownMessage
}

const falcon2 = new Rocket1('Falcon 9', 'Falcon 9 has been launched')
const falconHeavy2 = new Rocket1('Falcon Heavy', 'Falcon Heavy has been launched')


//referenciando a funciones dentro de funciones constructoras
const personalizedMessage = () => 'This is a personalized message'
function Rocket2 (name, ownMessage) {
    this.name = name
    this.launchMessage = ownMessage
}

const falcon3 = new Rocket2('Falcon 9', personalizedMessage)
const falconHeavy3 = new Rocket2('Falcon Heavy', personalizedMessage)

//funciones constructoras con arrow function
const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'This is a personalized message Arrow'
const falcon9Arrow = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction)

console.log(falcon9Arrow.launchMessage()) // This is a personalized message Arrow
console.log(falcon9Arrow.name) // Falcon 9

//OTROS APORTES: https://youtu.be/jr1pXcQ_70Y?si=eaM32-fyXhWSulFn