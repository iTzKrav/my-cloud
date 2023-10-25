function Divisor(numero, divisor) {
    return numero % divisor === 0;
}

function Primo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function divisoresPrimos(numero) {
    const divisores = [];
    for (let i = 2; i <= numero; i++) {
        if (numero % i === 0 && esPrimo(i)) {
            divisores.push(i);
        }
    }
    return divisores;
}

function primerosNPrimos(n) {
    const primos = [];
    let numero = 2;
    while (primos.length < n) {
        if (esPrimo(numero)) {
            primos.push(numero);
        }
        numero++;
    }
    return primos;
}

function esCapicua(numero) {
    const numStr = numero.toString();
    return numStr === numStr.split('').reverse().join('');
}

function generarAleatorioTresCifras() {
    return Math.floor(Math.random() * (999 - 100) + 100);
}

// Escucha eventos del menú
document.getElementById('menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const opcion = event.target.getAttribute('data-opcion');
        switch (opcion) {
            case '1':
                // Implementa la lógica para la opción 1
                break;
            case '2':
                // Implementa la lógica para la opción 2
                break;
            case '3':
                // Implementa la lógica para la opción 3
                break;
            case '4':
                // Implementa la lógica para la opción 4
                break;
            case '5':
                // Implementa la lógica para la opción 5
                break;
            case '6':
                // Implementa la lógica para la opción 6
                break;
            case '7':
                // Implementa la lógica para la opción 7
                break;
        }
    }
});
