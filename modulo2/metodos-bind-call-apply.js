const owner = 'Juan';
const address = 'Calle 123';

function dogGreeting(owner, address) {
  console.log(`Hello, my name is ${this.dogName} and I live with my ${owner} and we live in ${address}`);
}

const newHouse = {
    dogName: 'Firulais',
    age: 3
}

dogGreeting.call(newHouse, owner, address); //Hello, my name is Firulais and I live with my Juan and we live in Calle 123

const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues); //Hello, my name is Firulais and I live with my Juan and we live in Calle 123

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind(); //Hello, my name is Firulais and I live with my Juan and we live in Calle 123

//Quiz

const caricatura = { nombre: 'Vaca y Pollito'}

function recuerdo (personaje) {
    console.log(`${this.nombre} era mi caricatura favorida. Me encantaba ver las aventuras de ${personaje}`)
}

recuerdo.call(caricatura, 'Vaca'); //Vaca y Pollito era mi caricatura favorida. Me encantaba ver las aventuras de Vaca
recuerdo.bind(caricatura, 'Pollito')(); //Vaca y Pollito era mi caricatura favorida. Me encantaba ver las aventuras de Pollito
//bind devuelve una funcion que se debe ejecutar con () al final