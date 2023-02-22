
// Requisito II: Crie um arquivo Javascript para executar algumas lógicas de programação:

// Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);

let nomeDoProduto = "Geladeira";
let precoDoProduto = 2000;
let descontoDoProduto = 0.1;
let descontoValido = false;

// Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de preço final;

if(descontoValido === true){
        let precoFinal = (precoDoProduto * (1-descontoDoProduto))
        console.log(`O valor do produto ${nomeDoProduto} com desconto é ${precoFinal} reais`)
}else{
        let precoFinal = precoDoProduto
        console.log(`O valor do produto ${nomeDoProduto} é ${precoFinal} reais`)
}


console.log("\n")


let precoFinal = precoDoProduto

if(descontoValido === true){
    precoFinal = precoDoProduto - (precoDoProduto * descontoDoProduto)
    console.log(`O valor do produto ${nomeDoProduto} com desconto é ${precoFinal} reais`)
}else{
    console.log(`O valor do produto ${nomeDoProduto} é ${precoFinal} reais`)
}


console.log("-------------------------------------------")

//Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;

if(precoFinal > 1000){
    precoFinal = (precoFinal - 50)
    console.log(precoFinal)    
} else {
    console.log(precoFinal)
}

console.log("\n")

let nomeDoProduto2 = "Microondas";
let precoDoProduto2 = 200;


if(precoDoProduto2 > 1000){
    let precoFinal2 = (precoDoProduto2 - 50)
    console.log(`O preço final do produto ${nomeDoProduto2} é ${precoFinal2}.`);
} else {
    let precoFinal2 = precoDoProduto2
    console.log(`O preco final do produto ${nomeDoProduto2} é ${precoFinal2}.`);
}


console.log("-------------------------------------------")

/*Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.
Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.
Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000", por exemplo.
*/


const demandaProdutos = [10, 2, 1, 30, 5];
let valoresDemanda = []; //total de cada cliente

for (let i = 0; i < demandaProdutos.length; i++) {
    valoresDemanda[i] = demandaProdutos[i] * precoFinal
    console.log(`O cliente ${i+1} deverá pagar: R$ ${valoresDemanda[i]}.`)
} 


console.log("\n")

let totalLucro = 0

for (let i = 0; i < valoresDemanda.length; i++) {
    totalLucro = totalLucro + valoresDemanda[i];       
}

console.log(`O total de lucro é de R$ ${totalLucro}.`)



