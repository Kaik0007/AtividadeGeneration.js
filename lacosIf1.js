/*Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.*/


const readline = require (`readline-sync`)

let numeroA = readline.questionInt("digite o numero A: \n")
let numeroB = readline.questionInt("digite o numero B: \n")
let numeroC = readline.questionInt("digite o numero C: \n")


if (numeroA+numeroB === numeroC){
console.log("Igual a C");
}  else if(numeroA+numeroB < numeroC) {
   console.log("Menor  que C");
} else {
   console.log("Maior que C");
}


/*const readline = require (`readline-sync`)

let numeroA = readline.questionInt("digite o numero A: \n")
let numeroB = readline.questionInt("digite o numero B: \n")
let numeroC = readline.questionInt("digite o numero C: \n")

let soma = numeroA+numeroB;

if (soma === numeroC){
console.log("Igual a C");
}  else if( soma < numeroC) {
   console.log("Menor  que C");
} else {
   console.log("Maior que C");

} */
