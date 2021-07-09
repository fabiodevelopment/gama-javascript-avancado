const pessoa = {
    nome    : "Fabio",
    idade   : "34",
    cidade  : "São Paulo"
}

//Notação de ponto

console.log(pessoa.nome) //"Fabio"

//Notação de Colchetes

console.log(pessoa['idade']) //32

//Como Desestruturar Objetos

const {nome, idade, cidade} = pessoa

console.log(nome)   //Fabio
console.log(idade)  //34
console.log(cidade) //SP