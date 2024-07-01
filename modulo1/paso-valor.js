let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c)

a = 12
b = 'Platzi'
c = undefined

//paso por referencia

let manzana = ['manzana']
manzana.push('pera') // push nos ayuda a agregar un valor al array
console.log(manzana)

let panes = ['pan']
let copiaDePanes = panes
panes.push('baggete')
console.log(panes, copiaDePanes)
