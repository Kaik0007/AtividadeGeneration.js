/*Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), 
o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.
 */


const readline = require('readline-sync');

let nome = readline.question("Digite o seu nome: ");
console.log("######## Codigo de cargo #########");
console.log(" 1- Gerente\n 2- Vendedor\n 3- Supervisor\n 4- Motorista\n 5- Estoquista\n 6- Tecnico de TI\n");
let codigo = readline.questionInt("Codigo de cargo: ");
let salario = readline.questionInt("Salario: ");

let cargo;
let reajuste;



switch (codigo) {
  case 1:
    cargo = "Gerente";
    reajuste = 0.10;
    break;
  case 2:
    cargo = "Vendedor";
    reajuste = 0.07;
    break;
  case 3:
    cargo = "Supervisor";
    reajuste = 0.09;
    break;
  case 4:
    cargo = "Motorista";
    reajuste= 0.06;
    break;
  case 5:
    cargo = "Estoquista";
    reajuste = 0.05;
    break;
  case 6:
    cargo = "Tecnico de TI";
    reajuste = 0.08;
    break;
  default:
    console.log("Código de cargo inválido.");
    
}

let novoSalario = salario + (salario*reajuste);
console.log(`nome: ${nome}`);
console.log(`cargo: ${cargo}`);
console.log(`Novo salario: R$ ${novoSalario.toFixed(2)}`);
