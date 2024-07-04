//Identificador this

//Enlace implicito - Implicit binding
const house = {
    dogName : 'Firulais',
    dogGreeting: function(){
        console.log(`Hi, Im ${this.dogName}`);
    }
}

house.dogGreeting(); //Hi, Im Firulais

//Enlace explicito - Explicit binding
function dogGreeting(){
    console.log(`Hi, Im ${this.dogName}`);
}

const newHouse = {
    dogName : 'Fido',
    dogAge: 2
}

dogGreeting.call(newHouse); //Hi, Im Fido

function newDogGreeting (owner, address){
    console.log(`Hi, Im ${this.dogName} and I live with my ${owner} and we live in ${address}`);
}

const owner = 'Juan';
const address = 'Calle 123';
newDogGreeting.call(newHouse, owner, address); //Hi, Im Fido and I live with my Juan and we live in Calle 123