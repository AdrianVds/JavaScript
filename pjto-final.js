const prompt = require('prompt-sync')();({sigint: true});
var dias_treinados = 0;
var dias_para_final = 7;
console.log("----------------------------------------------------------------------------");
console.log("Efetue seu Login:");
let nome_jogador = prompt("Nome do jogador: ");
let idade_jogador = +prompt("idade do jogador: ");
console.log();
console.log("------------------------INICIANDO O JOGO-------------------------------------");
console.log("Treinador: ...Jogadores, o treino intensivo começa amanhã, Voces precisam chegar as 8:00 da manhã");
console.log("Não quero ninguem chegando atrasado e nem sem comer, caso aconteça hávera punição!");
console.log("----------------------------------------------------------------------------------");
console.log("OBJETIVO: voce precisa ter no minimo 5 dias treinados para vencer o campeonato! ");
console.log("DIFICULDADE: voce tem apenas 7 dias !");
console.log("----------------------------------------------------------------------------------");
console.log("Primeiro dia, opções: digite (1) para  ir treinar ou Digite (2) para aproveitar o dia");
console.log();
class Treinamento{
    constructor(nome){
        this.nome = nome;    
    }
    funcao_dias(){
        while(dias_para_final >= 4){
            var dia = +prompt(`${this.nome} Qual opçaõ deseja: `);
            if (dia === 1){
                dias_treinados +=1;
                dias_para_final -=1;
                console.log("Voce treinou muito hoje, descance bem para amanhã...");
                console.log();
            }else if (dia === 2){
                dias_para_final -=2;
                console.log("Voce se divertiu de mais, e teve que ficar um dia na reabilitação, perdeu 2 dia de treino!...")
                console.log();
            }else{
                console.log("Houve um Erro, digite apenas 1 ou 2 !!");
            };
        for(let i = 3;dias_para_final <= i;){
            console.log("----------------------------------------------------------------------------------");
            console.log(`ja se foi mais de ${dias_para_final} dias e voce so treinou ${dias_treinados}! `);
            console.log();
            console.log("...Imprevisto!!!, seu despertador nâo tocou e voce acordou tarde!!");
            console.log("Escolha com Sabedoria seus proximos passos para que tudo ocorra bem");
            console.log();
            console.log("1-para: comer e chegar atrado, 2-para: chegar na hora sem comer,");
            console.log("----------------------------------------------------------------------------------");
            break
        };
        };
        while(dias_para_final <= 3 && dias_para_final >= 1){
            var desafio = +prompt(`${this.nome} Escolha rapido! voce não tem tempo: `);
            if(desafio === 1){
                dias_para_final -=1;
                dias_treinados +=1;
                console.log("Seu treinador esta de olho em voce, cuidado");
            }else if ( desafio ===2){
                dias_para_final -=2;
                console.log("Voce não comeu e passou mal, perdeu 2 dias na recuperação");
            }else{
                console.log("Houve um Erro, digite apenas 1 ou 2 !!");
            };
        };
        console.log("------------Final-de-Jogo--------------------");
    };
}
class Resultado extends Treinamento {
    constructor(nome,idade){
        super(nome);
        this.idade = idade;
    }
    resultados(){
        if(dias_treinados >= 5){
            console.log("RESULTADO...");
            console.log(`Parabens,Voce Treinou ${dias_treinados} dias Intensos e conseguiu vencer o campeonato Sub: ${idade_jogador} do LEC!!!!`)
            console.log();
        }else{
            console.log("RESULTADO...");
            console.log(`Não foi desta vez ${nome_jogador}, Voce treinou apenas ${dias_treinados} e nao foi o suficiente para vencer !!`)
            console.log();
        };
    };
};

let nome1 = new Treinamento(nome_jogador);
let idade = new Resultado(nome_jogador,idade_jogador);
nome1.funcao_dias();
idade.resultados();
