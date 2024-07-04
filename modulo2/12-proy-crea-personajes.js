// Create PowerFullBoy objets
function PowerFullBoy(name, color, superpower) {
  this.name = name;
  this.color = color;
  this.superpower = superpower;
  this.isLeader = false;

  this.displayInfo = function() {
    console.log(`I am ${this.name}, my color is ${this.color} and my superpower is ${this.superpower} ${this.isLeader ? 'Leader : Yes' : 'Leader : No'}`); //cuando agregamos ? dentro la variable es un if
  
  },
  this.setLeader = function() {
    this.isLeader = true;
    console.log(`${this.name} is the leader`)
  }
}

const batman = new PowerFullBoy('Batman', 'black', 'money')
const superman = new PowerFullBoy('Superman', 'blue', 'fly')
const wonderWoman = new PowerFullBoy('wonder woman', 'red', 'force')
const flash = new PowerFullBoy('Flash', 'red', 'speed')

batman.displayInfo()
superman.displayInfo()
wonderWoman.displayInfo()
flash.displayInfo()

batman.setLeader()

batman.displayInfo()
superman.displayInfo()
wonderWoman.displayInfo()
flash.displayInfo()