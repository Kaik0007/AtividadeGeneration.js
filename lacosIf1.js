/*Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.*/


const readline = require (`readline-sync`)

let NumeroA = readline.questionInt("digite o numero A: \n")
let NumeroB = readline.questionInt("digite o numero B: \n")
let NumeroC = readline.questionInt("digite o numero C: \n")


if (NumeroA+NumeroB === NumeroC){
console.log("Igual a C");
}  else if(NumeroA+NumeroB < NumeroC) {
   console.log("Menor  que C");
} else {
   console.log("Maior que C");
}


/*const readline = require (`readline-sync`)

let NumeroA = readline.questionInt("digite o numero A: \n")
let NumeroB = readline.questionInt("digite o numero B: \n")
let NumeroC = readline.questionInt("digite o numero C: \n")

let soma = NumeroA+NumeroB;

if (soma === NumeroC){
console.log("Igual a C");
}  else if( soma < NumeroC) {
   console.log("Menor  que C");
} else {
   console.log("Maior que C");

} */