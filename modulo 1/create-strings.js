// creacion de string
const primeraOpcion = 'Hola Mundo';
const segundaOpcion = "2do Hola Mundo";
const terceraOpcion = `3er Hola Mundo`;

//concadenar string - opcion +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const dreccionCompleta =  'Mi direccion completa es ' + direccion + ' en la ciudad de ' + ciudad;
console.log(dreccionCompleta);

//concadenar string - opcion template literales
const nombre = 'Homero';
const pais = '🇧🇴'
const presentacion =  `Hola soy ${nombre} y soy de ${pais}`;
console.log(presentacion);

//concadenar con join
const primeraParte = 'Me encanta'
const segundaParte = 'la comida'
const terceraParte = '🌶️'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' 🎃 ')) // el join nos permite configurar el espaciado al concadenar

// concadenar con concat
const hobby1 = 'jugar'
const hobby2 = 'futbol'
const hobby3 = 'Nintendo'
const hobbies = 'Mis hobbies son: '.concat(hobby1, ', ', hobby2, ' y ', hobby3);
console.log(hobbies);

// Caracteres de escape

//1. Escape alternativo
const escapeAlternativo = "I'm Software Enginner"
//2. Barra invertida
const escapeBarraInvertida = 'I\'m software Enginner'
//3. template literals
const escapeComillaInvertida = 'I´m software Enginner'

//Como escribir strings largos
const poerma = 'Las rosa son rojas, \n el cielo es azul, \n el azucar es dulce, \n y tambien tu'
console.log(poerma)

// se puede tener strings primitivos y objetos
//string primitivos
const stringPrimitivo = 'soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('soy un string primitivo')
console.log(typeof stringPrimitivoTambien)

//string objeto
const stringObjeto = new String('soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres
const palabra = 'Hola Mundo'
console.log(palabra[0]) // H
console.log(palabra.charAt(0)) // H
console.log(palabra.indexOf('u'))
console.log(palabra.slice('6, 10'))
console.log(palabra.length)
console.log(palabra.toLocaleUpperCase())
console.log(palabra.toLocaleLowerCase())

const palabraDividido = palabra.split(' ')
console.log(palabraDividido) //divide las palabras a través de sus espacios

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()//elimina los espacios
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const saludoReemplazado = saludoOriginal.replace('Mundo', '🥇')
console.log(saludoReemplazado)

