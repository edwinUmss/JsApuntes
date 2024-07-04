/**
 * && -> AND -> y -> Todas as expresiones precisan ser verdaderas para retornar true
 * || -> OR -> O -> Por lo menos una expresion precisa ser verdadera para retornar true
 * ! -> NOT -> NO -> Inverte el valor da expresion
 */
const a = 10
const b = 20
const c = '10'

a == b && a === c // false
a != b || a === c // true
!(a === c) // true
