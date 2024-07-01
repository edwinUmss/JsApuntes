// Social Media Profile

//1. User information
const username = 'johndoe'
const fullName = 'John Doe'
const age = 25
const isStudent = true

//2. User address
const address = {
    street : 'calle ayacucho y av heroinas',
    city : 'Cercado',
    state : 'Cochabamba',
    country : 'Bolivia',
    zipCode : '2500'
}

//3. hobbies
const hobbies = ['reading', 'coding', 'traveling']

//4. Gerating personalized bio
const personalizedBio = `My name is ${fullName}, I am ${age} years old and I live in ${address.city}, ${address.country}. I love ${hobbies[0]}, ${hobbies[1]} and ${hobbies[2]}.`
const personalizedBio2 = `My name is ${fullName}, I am ${age} years old and I live in ${address.city}, ${address.country}. I love ${hobbies.join(', ')}.`

//5. Displaying personalized bio
console.log(personalizedBio2)