const greeting = function (name) {
    return `Hi, ${name}`
}

//Arrow function - explicit return
const newGreeting = (name) => { //esto es una arrow funcion
    return `Hi, ${name}`
}

//Arrow function - implicit return
const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, age) => `Hi, ${name}`//se debe agregar parentesis cuando se tiene mas de un parametro

//lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: message =>{
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus')//no se puede acceder a this con arrow functions

//OTROS APORTES

/**Arrow function
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo. */

/*Las funciones flecha (`arrow functions`) son una característica introducida en ECMAScript 6 (también
conocido como ES6 o ECMAScript 2015) que proporciona una sintaxis más concisa y una vinculación léxica 
del valor `this`. Aquí tienes una introducción a las funciones flecha en JavaScript:*/

// Sintaxis básica:

//La sintaxis básica de una función flecha es más concisa que la de una función tradicional.


// Función tradicional
function suma(a, b) {
    return a + b;
  }
  
  // Función flecha equivalente
  const sumaFlecha = (a, b) => a + b;
  
  /*
  Si la función tiene solo una expresión, puedes omitir las llaves y la palabra clave `return`. Si tiene
   más de una expresión, necesitas usar llaves y la palabra clave `return`.
  */
  
  
  // Sin parámetros:
  
  
  // Función tradicional sin parámetros
  function saludar() {
    console.log("¡Hola!");
  }
  
  // Función flecha equivalente sin parámetros
  const saludarFlecha = () => console.log("¡Hola!");
  
  
  // Vinculación léxica del `this`:
  /*
  Una característica clave de las funciones flecha es que no tienen su propio `this`. En cambio, heredan 
  el valor `this` del ámbito que las rodea (vinculación léxica). Esto puede ser útil en situaciones donde 
  el valor de `this` puede cambiar, como en callbacks o en métodos de objetos.
  */
  
  function Persona() {
    this.edad = 0;
  
    // Función tradicional con vinculación dinámica de 'this'
    setInterval(function crecer() {
      this.edad++;
      console.log(this.edad);
    }, 1000);
  }
  
  const persona = new Persona(); // Esto dará lugar a un error, 'this.edad' es undefined
  
  // Usando función flecha para mantener el 'this' de la función externa
  function Persona() {
    this.edad = 0;
  
    setInterval(() => {
      this.edad++;
      console.log(this.edad);
    }, 1000);
  }
  
  const persona1 = new Persona(); // Ahora funciona correctamente
  
  
  // Uso con objetos y arrays:
  
  
  // Función flecha como método de un objeto
  const objeto = {
    valor: 42,
    obtenerValor: () => this.valor // 'this' hace referencia al objeto global, no al objeto 'objeto'
  };
  
  console.log(objeto.obtenerValor()); // undefined
  
  // Uso de funciones flechas en operaciones con arrays
  const numeros = [1, 2, 3, 4];
  const cuadrados = numeros.map(numero => numero * numero);
  console.log(cuadrados); // [1, 4, 9, 16]
  
  /*
  Las funciones flecha son útiles para escribir código más conciso y pueden ser especialmente beneficiosas
   en ciertos contextos. Sin embargo, es importante entender las diferencias con las funciones tradicionales, 
   especialmente en lo que respecta a la vinculación de `this`.
  */