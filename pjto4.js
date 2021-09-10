
const prompt = require('prompt-sync')();({sigint: true});
var autorizaçao = 1
var candidato1_Adrian = 0;
var candidato2_vinicius = 0;
var candidato3_gabriel = 0;
var votoNulo = 0;
var votoBranco = 0;

function autorizaVoto(anoNascimento){
        if(anoNascimento >= 18 && anoNascimento <= 50){
          autorizaçao += 1;
          console.log(`Voce tem ${anoNascimento} anos,seu voto é OBRIGATORIO`)
        }else if(anoNascimento <= 15){
          console.log(`Voce tem ${anoNascimento} anos,seu voto foi NEGADO`)
          console.log("Somente Maiores de 16 pode votar !")
        }else if (anoNascimento >= 70 || anoNascimento === 16 || anoNascimento === 17){
          autorizaçao += 1
          console.log(`Voce tem ${anoNascimento} anos,seu voto é OPCIONAL`)
        }else
          console.log("Erro,Digite novamente!")
}
console.log()
console.log("ELEIÇÃO BLUE2021")
console.log("------------------------------------------")
let anoNascimento = +prompt("Digite sua idade para votar: ");
console.log("------------------------------------------")
autorizaVoto(anoNascimento)
console.log("----------------------------------------")
console.log(`Digite um numero para uma opçao: \npara: Adrian digite 1 \npara: vinicius digite 2 \npara: gabriel digite 3 \npara: VotoNulo digite 4 \npara: VotoEmBranco digite 5`)
console.log("------------------------------------------")


function votacao(autorizaçao){
    while (autorizaçao >= 2){
        var pessoas_votar = prompt("tem pessoas para votar?").toLowerCase();
        if(pessoas_votar != "sim"){
           break
        }else{
            console.log("------------------------------------------")
            var voto = +prompt("deseja votar em quem: ")
        }
        if(voto === 1 ){
            candidato1_Adrian += 1;
            console.log("Voce votou no candidato 1, Adrian");
        }else if(voto === 2){
            candidato2_vinicius += 1;
            console.log("Voce votou no candidato 2, Vinicius")
        }else if(voto === 3 ){
            candidato3_gabriel += 1
            console.log("Voce votou no candidato 3, Gabriel");
        }else if(voto === 4 ){
            votoNulo += 1;
            console.log("Voce votou no candidato 4, Nulo");
        }else if(voto === 5 ){
            votoBranco += 1;
            console.log("Voce votou no candidato 5, Em branco");
        }
    }
}
function resultado(){
// constrir ifs para selecionar o campeao e na proxima função exibir a colocação
}
function exibirResultados(resultado){
    onsole.log(candidato1_Adrian)
    console.log(candidato2_vinicius)
    console.log(candidato3_gabriel)
    console.log(votoBranco)
    console.log(votoNulo)
}
exibirResultados(resultado)
