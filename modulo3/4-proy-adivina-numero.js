const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const numeroJugador = parseInt(
    prompt('Adivina el número entre 1 y 10'));

if (numeroJugador === numeroSecreto) {
    console.log('Adivinaste el número secreto');
} else {
    if (numeroJugador < numeroSecreto) {
        console.log('El número secreto es mayor');
    } else if (numeroJugador > numeroSecreto) {
        console.log('El número secreto es menor');
    }
    
    console.log(`El número secreto era ${numeroSecreto}`);
    console.log('Inténtalo nuevamente');
}

