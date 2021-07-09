//Array
const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

//Acessar informações num array
console.log(alunasGama[0]) //Paula
console.log(alunasGama[1]) //Maria
console.log(alunasGama[2]) //Estela
console.log(alunasGama[3]) //Clara

console.log("\n");

//Operador Spread (...)

const alunasXp = [...alunasGama, "Simara"] //Adicionando mais um valor no final do array
console.log(alunasXp)
console.log("\n");

//Metodos de Iteração

for (let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i]);
}
console.log("\n");

// Usando metodo Map
console.log("MAP");
console.log("\n");

alunasXp.map(aluna=> console.log(aluna))
console.log("\n");

// Usando metodo Filter
console.log("FILTER");
console.log("\n");

const numeros = [34, 45, 67, 90, 55, 76];

const numerosImpares = numeros.filter(numero => numero%2 !=0);

console.log(numerosImpares);

console.log(typeof numerosImpares);

const numerosPares = numeros.filter(numero => numero%2 ==0);

console.log(numerosPares);
console.log("\n");

//SORT
console.log("SORT");
console.log("\n");

const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a);
console.log(numerosOrdenadosDecrescente);
console.log("\n");

//REDUCE - reduz o nosso array a um resultado de uma operação matemática
console.log("Reduce");
console.log("\n");

const numbers = [1,34,35]

const somaReduce = numbers.reduce((valorAntrior, valorAtual)=> {
    return valorAntrior + valorAtual
}, 5)

console.log(somaReduce)
