/*Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 
anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia
via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras
 doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre 
na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:*/

const readline = require (`readline-sync`); 

let nome = readline.question("Digite o seu nome: \n");

let idade = readline.questionInt("digite a sua idade: \n");


console.log("############ Opção 1 - Sim #############");
console.log("############ Opção 2 - Não ###############");

let doacao = readline.questionInt("Ja fez doacao de sangue?\n");

if (idade>18 && idade <=60){
console.log("pode doar");
}  else if(idade>=60 && idade <= 69) {
   console.log(nome + ", Voce esta apto para doar sangue");
} else { 
    console.log(nome +", Voce nao esta apto para doar sangue");

}   



