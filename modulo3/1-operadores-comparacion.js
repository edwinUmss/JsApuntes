/**
 * == Igual a
 * === Estrictamente igual a (controla valor y tipo de dato)
 * != Diferente de
 * !== Estrictamente diferente de (controla valor y tipo de dato)
 * > Mayor que
 * < Menor que
 * >= Mayor o igual que
 * <= Menor o igual que
 */

const a = 10
const b = 20
const c = '10'

a == b // false
a === c // false
a != b // true
a !== c // true
a > b // false
a <= b // true
a > c // true
