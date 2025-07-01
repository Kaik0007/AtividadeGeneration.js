const readline = require('readline-sync');
console.log("######## Codigos #########");
console.log(" 1- Cachorro quente, R$ 10\n 2- X-salada, R$ 15\n 3- X-bacon, R$ 18\n 4- Bauru, R$ 12\n 5- Refrigerante, R$ 8\n 6- Suco de laranja, R$ 13\n");
let codigo = readline.questionInt("Codigo do Produto: ");
let quantidade = readline.questionInt("Quantidade: ");

let produto;
let preco;



switch (codigo) {
  case 1:
    produto = "Cachorro Quente";
    preco = 10.00;
    break;
  case 2:
    produto = "X-Salada";
    preco = 15.00;
    break;
  case 3:
    produto = "X-Bacon";
    preco = 18.00;
    break;
  case 4:
    produto = "Bauru";
    preco = 12.00;
    break;
  case 5:
    produto = "Refrigerante";
    preco = 8.00;
    break;
  case 6:
    produto = "Suco de laranja";
    preco = 13.00;
    break;
  default:
    console.log("Código de produto inválido.");
    
}

let valorTotal = quantidade * preco;
console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
