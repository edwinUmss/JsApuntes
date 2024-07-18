//every()

const ages = [21, 25, 30, 19, 20]
// todos deben cumplir la comparacion
const allAreAdults = ages.every(age => age > 10)
console.log(allAreAdults)

// al menos uno cumpla la comparacion
const someAreAdults30 = ages.some(age => age > 29)
console.log(someAreAdults30)