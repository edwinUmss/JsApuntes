//Methods that do not modify the original array

const morseCode1 = ['....', '---']; //h o
const morseCode2 = ['.-..', '.-'] //l a(

const morseCodeMessage = morseCode1.concat(morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage) //['....', '---', '.-..', '.-']

// segundo metodo: permite convinar mas de 2 arrays

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)
console.log(morseCodeMessage2) //['....', '---', '.-..', '.-']

// spread operator: permite convinar mas de 2 arrays

function combineMorseMessages (morseCode1, morseCode2){
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1, morseCode2) //['....', '---', '.-..', '.-']

const number = [1, 2, 3]
const string = 'string'

combineMorseMessages(number, string)

//metodo join()

const morseCodeMessageString = morseCodeMessage.join(' e ')// en estos parentecis podemos colocar un separador de datos del string
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)