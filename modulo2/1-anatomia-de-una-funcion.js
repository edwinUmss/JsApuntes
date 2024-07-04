// ejercicio: debes calcular el precio con descuento de un producto

function calculateDiscountedPrice (price, discountPercentage){
    const discount = price * discountPercentage / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

const originalPrice = 1000
const discountPercentage = 50

const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)
console.log('Original price:', originalPrice)
console.log('Discount percentage:', discountPercentage)
console.log('Final price:', finalPrice)

/**Partes de una función:

Palabra clave: function - Indicar a Javascript que escribiremos una función

Nombre de la función: sumar - Le asignamos un nombre a la función

Parámetros: (a,b) - Le pasamos datos al cuerpo de la función

Llaves: {} - Encierran el cuerpo de la función

Cuerpo: return a + b - Aquí va el bloque de código a ejecutar

Las funciones nos van a permitir escribir funcionalidades genéricas para poder reutilizarlas, como si fueran bloques de lego.

El input = Los datos que tengo

El output = Los datos que quiero obtener */