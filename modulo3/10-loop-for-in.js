//loop for in: recorre las propiedades de un objeto
/**
 * for (variable in objeto) { instruccion }
 */

const listaDeCompras = {
    manzanas: 5,
    peras: 3,
    naranjas: 2,
    uva: 1
}

for (fruta in listaDeCompras){
    console.log(fruta)
}

for (cantFruta in listaDeCompras){
    console.log(`${cantFruta}: ${listaDeCompras[cantFruta]}`)
}