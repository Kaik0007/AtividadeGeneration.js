/*Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler
dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). 
A seguir, mostre na tela o resultado da operação entre os 2 números. 
Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!*/




const readline = require('readline-sync');

console.log("######## Calculadora #########");
console.log(" 1- Adição\n 2- Subtração\n 3- Multiplicacão\n 4- Divisão\n");

let operacao = readline.questionInt("Escolha uma operacao: ");

let numero1 = parseFloat(readline.question("Digite o primeiro numero: "));
let numero2 = parseFloat(readline.question("Digite o segundo nu4mero: "));

switch (operacao) {
  case 1:
    console.log(`Resultado: ${numero1} + ${numero2} = ${(numero1 + numero2).toFixed(2)}`);
    break;
  case 2:
    console.log(`Resultado: ${numero1} - ${numero2} = ${(numero1 - numero2).toFixed(2)}`);
    break;
  case 3:
    console.log(`Resultado: ${numero1} * ${numero2} = ${(numero1 * numero2).toFixed(2)}`);
    break;
  case 4:
    if (numero2 !== 0) {
      console.log(`Resultado: ${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(2)}`);
    } else {
      console.log("Numero = 0");
    }
    break;
  default:
    console.log("Operação inválida!");
}


