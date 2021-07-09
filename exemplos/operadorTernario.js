// if... else if


// if ( idade >= 18 ) {
//     return 'Maior de idade';
// } else {
//     return 'Menor de idade';
// }

// Operador ternario

// idade >= 18 ? 'Maior de idade' : 'Menor de idade'

function calculaIdadeIfElse(idade) {
    if ( idade >= 18 ) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

console.log(calculaIdadeIfElse(34)); 

function calculaIdadeTernario(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
}

console.log(calculaIdadeTernario(16)); 