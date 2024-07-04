//window es parte del navegador por lo que tiene muchas propiedades y métodos. tambien se le puedes crear nuevas métodos y propiedades

//este ejemplo solo puede ser usado en el navegador
window.name = "Alej"

function favoriteCharacter () {
    console.log("Im ${this.name}")
}

favoriteCharacter()

//modo estricto

'use strict' //con esto se activa el modo estricto no funcionara window

function favoriteCharacter2 () {
    console.log(this.name)
}

//APUNTES

/**La declaración 'use strict'; es una directiva en JavaScript que se utiliza para activar el modo estricto ("strict mode" en inglés) en un script o función. Cuando se habilita el modo estricto, se aplican reglas adicionales y se realizan restricciones en la forma en que se escribe el código. Algunas características clave del modo estricto incluyen:

Errores más estrictos: Se generan más errores en situaciones que normalmente se pasarían por alto en el modo no estricto. Por ejemplo, asignar valores a variables no declaradas o modificar objetos sellados resultaría en errores.
Eliminación de ciertos comportamientos "confusos": Algunas características consideradas confusas o propensas a errores son eliminadas o modificadas en el modo estricto. Por ejemplo, en el modo estricto, el uso de with está prohibido.
Seguridad mejorada: El modo estricto ayuda a escribir código más seguro al eliminar algunas construcciones propensas a errores y alentando prácticas de codificación más seguras.
La declaración 'use strict'; es una directiva en JavaScript que se utiliza para activar el modo estricto ("strict mode" en inglés) en un script o función. Cuando se habilita el modo estricto, se aplican reglas adicionales y se realizan restricciones en la forma en que se escribe el código. Algunas características clave del modo estricto incluyen:

Errores más estrictos: Se generan más errores en situaciones que normalmente se pasarían por alto en el modo no estricto. Por ejemplo, asignar valores a variables no declaradas o modificar objetos sellados resultaría en errores.
Eliminación de ciertos comportamientos "confusos": Algunas características consideradas confusas o propensas a errores son eliminadas o modificadas en el modo estricto. Por ejemplo, en el modo estricto, el uso de with está prohibido.
Seguridad mejorada: El modo estricto ayuda a escribir código más seguro al eliminar algunas construcciones propensas a errores y alentando prácticas de codificación más seguras.
Para habilitar el modo estricto, simplemente coloca la declaración 'use strict'; al comienzo de tu script o función:

javascriptCopy code'use strict';

// Tu código aquí

Es importante tener en cuenta que una vez que se activa el modo estricto, no se puede desactivar dentro del mismo script o función. Se aplica a todo el alcance del script o función. La declaración 'use strict'; es compatible con versiones modernas de JavaScript y se recomienda su uso para mejorar la calidad y seguridad del código. */