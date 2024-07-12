// Card Game Implementacion
// ordenar aleatoriamente las cartas
// repartir 5 cartas a cada jugador

const deck = ['corazones', 'diamantes', 'treboles', 'picas', 'corazones', 'diamantes', 'treboles', 'picas', 'corazones', 'diamantes', 'treboles', 'picas', 'corazones', 'diamantes', 'treboles', 'picas', 'corazones', 'diamantes', 'treboles', 'picas', 'corazones', 'diamantes', 'treboles', 'picas', 'corazones', 'diamantes', 'treboles', 'picas', ]

function shufleDeck () {
    for (let i = deck.length; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));// se obtiene un numero aleatorio entre 0 y deck.length
        [deck[i], deck[j]] = [deck[j], deck[i]] // se intercambian las cartas
    }
}

function dealCards (numCard) {
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shufleDeck()
const player1 = dealCards(3)
const player2 = dealCards(3)
const player3 = dealCards(3)

console.log(player1)
console.log(player2)
console.log(player3)