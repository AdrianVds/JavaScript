const prompt = require('prompt-sync')();({sigint: true});
// Final de Campeonato em 7 dias, o pivo ${jogador} precisa treinar pesado, pelo menos "5 dias", para ter 
//condicionalmento sufiente para seu time vencer !!
var dias_treinados = 0;
var dias_para_final = 7;
console.log()
console.log("------------------------INICIANDO O JOGO-------------------------------------")
console.log("...Jogadores, o treino intensivo começa amanhã.. Voces precisam chegar as 8:00")
console.log("Não quero ninguem chegando atrasado e nem sem comer, caso aconteça hávera punição!")
console.log("----------------------------------------------------------------------------------")
console.log("voce precisa treinar no minimo 5 dias treinado para vencer o campeonato! ")
console.log("----------------------------------------------------------------------------------")
console.log("Primeiro dia, opções: digite (1) para  ir treinar ou Digite (2) para aproveitar o dia todo ")
class Jogador{
    constructor(nome){
        this.nome = nome;    
    }
    funcao_dias(){
        while(dias_para_final >= 4){
            var dia = +prompt(`${this.nome} Qual opçaõ deseja: `)
            if (dia === 1){
                dias_treinados +=1;
                dias_para_final -=1;
                console.log("Voce treinou muito, descance bem")
            }
            else if (dia === 2){
                dias_para_final -=2;
                console.log("Voce se divertiu demais, perdeu 2 dia de treino!")
            }
        };
        while(dias_para_final <=3 && dias_para_final >= 0){
            var desafio = +prompt(`${this.nome} Qual opção deseja1: `)
            if(desafio === 1){
                dias_para_final -=1;
                dias_treinados +=1;
                console.log("Seu treinador esta de olho em voce")
            }else if ( desafio ===2){
                dias_para_final -=2
                console.log("Voce não comeu e passou mal, perdeu 2 dias na recuperação")

            }

        }
        for(let i = 3;dias_para_final <= i;){
            console.log("...Imprevisto!!!, seu despertador nâo tocou e voce acordou tarde!!")
            console.log("Escolha com Sabedoria seus proximos passos para que tudo ocorra bem")
            console.log("1-para: comer e chegar atrado, 2-para: chegar na hora sem comer,")
        };
    };
}
let nome_jogador = prompt("Qual o seu nome jogador: ")
let nome1 = new Jogador(nome_jogador)
nome1.funcao_dias();
///// talvez chamar o for na herança ver oque podemos fazer
//// ou fazer a final na sub classe com o resultado ////