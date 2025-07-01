/*Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando 
se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:*/

const readline = require (`readline-sync`)

let numero = readline.questionInt("digite o numero : \n")


if (numero % 2 === 0) {
  if (numero > 0) {
    console.log("Par positivo");
  } else if (numero < 0) {
    console.log("Par negativo");
  } else {
    console.log("Zero é neutro");
  }
} else {
  if (numero > 0) {
    console.log("Ímpar positivo");
  } else {
    console.log("Ímpar negativo");
  }
}




/*const readline = require (`readline-sync`)

let numero = readline.questionInt("digite o numero: \n")


if (numero % 2 === 0) {

  if (numero > 0) {
    console.log("Par positivo");
  } else if (numero < 0) {
    console.log("Par negativo");
  } else {
    console.log("Par e neutro");
  }
} else {
  if (numero > 0) {
    console.log("Ímpar positivo");
  } else if (numero < 0) {
    console.log("Ímpar negativo");
  } else {
   
  }
}
*/
