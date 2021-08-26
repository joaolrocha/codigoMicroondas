/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

console.log ("      ///////////////MICROONDAS///////////////");
console.log ("SELECIONE ALGUMA DAS OPÇÕES ABAIXO PARA REALIZAR O SEU PREPARO");
console.log(" 1 - Pipoca - 10 segundos para realização do preparo");
console.log(" 2 - Macarrão - 8 segundos para realização do preparo");
console.log(" 3 - Carne - 15 segundos para realização do preparo");
console.log(" 4 - Feijão - 12 segundos para realização do preparo");
console.log(" 5 - Brigadeiro - 8 segundos para realização do preparo");


var prato = "";
var tmpPadrao = 0;
var tmp = "";
var result = "";

function microondasOpc (opcao) {
    switch (opcao) {
        case 1: {
        prato = "Pipoca";
        tmpPadrao = 10;
        break
        }
        case 2: {
        prato = "Macarrão";
        tmpPadrao = 8;
        break
        }
        case 3: {
        prato = "Carne";
        tmpPadrao = 15;
        break
        }
        case 4: {
        prato = "Feijão"
        tmpPadrao = 12;
        break
        }
        case 5: {
        prato = "Brigadeiro"
        tmpPadrao = 8;
        break
        }
        default: {
            console.log("Opção Invalida!")
            prato = ""
            tmpPadrao = 0
            break
        } 
    }
    console.log("\nPrato selecionado:",prato)
}
function microondasTempo (tempo) {
    if (tmpPadrao == 0) {
        return
    }
    if (tempo >= (3*tmpPadrao)){
        return console.log("Kabum!!!!")
    } else if (tempo < tmpPadrao){
        return console.log("Tempo insuficiente!")
    } else if (tempo >= (2*tmpPadrao)){
        return console.log("Sua comida queimou!")
    } else {
        return console.log("Prato pronto, bom apetite!!!")
    }
}
microondasOpc(3)
microondasTempo(15)