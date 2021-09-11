
const prompt = require('prompt-sync')();({sigint: true});
var autorizaçao = 1;
var candidato1_Adrian = 0;
var candidato2_vinicius = 0;
var candidato3_gabriel = 0;
var votoNulo = 0;
var votoBranco = 0;

function autorizaVoto(anoNascimento){
        if(anoNascimento >= 18 && anoNascimento <= 50){
          autorizaçao += 1;
          console.log(`Voce tem ${anoNascimento} anos,seu voto é OBRIGATORIO`);
        }else if(anoNascimento <= 15){
          console.log(`Voce tem ${anoNascimento} anos,seu voto foi NEGADO`);
        }else if (anoNascimento >= 70 || anoNascimento === 16 || anoNascimento === 17){
          autorizaçao += 1;
          console.log(`Voce tem ${anoNascimento} anos,seu voto é OPCIONAL`);
        }else{
          console.log("Erro,Digite novamente!")
        };
}
console.log();
console.log("ELEIÇÃO BLUE2021");
console.log("------------------------------------------");
let anoNascimento = +prompt("Digite sua idade para votar: ");
console.log("------------------------------------------");
autorizaVoto(anoNascimento);
console.log("----------------------------------------");
console.log(`Digite um numero para uma opçao: \npara: Adrian digite (1) \npara: vinicius digite (2) \npara: gabriel digite (3) \npara: VotoNulo digite (4) \npara: VotoEmBranco digite (5)`)
console.log("------------------------------------------");


function votacao(autorizaçao){
    while (autorizaçao >= 2){
        var pessoas_votar = prompt("tem pessoas para votar?").toLowerCase();
        if(pessoas_votar != "sim"){
           break
        }else{
            console.log("------------------------------------------");
            var voto = +prompt("deseja votar em quem: ");
        }
        if(voto === 1 ){
            candidato1_Adrian += 1;
            console.log("Voce votou no candidato (1), Adrian");
        }else if(voto === 2){
            candidato2_vinicius += 1;
            console.log("Voce votou no candidato (2), Vinicius");
        }else if(voto === 3 ){
            candidato3_gabriel += 1
            console.log("Voce votou no candidato (3), Gabriel");
        }else if(voto === 4 ){
            votoNulo += 1;
            console.log("Voce votou no candidato 4, Nulo");
        }else if(voto === 5 ){
            votoBranco += 1;
            console.log("Voce votou no candidato 5, Em branco");
        }else{
            console.log("Erro, Opção inexistente");
        };
    };
};
votacao(autorizaçao);

function exibirResultados(autorizaçao){
    if(candidato1_Adrian > candidato2_vinicius && candidato2_vinicius > candidato3_gabriel){
        console.log("------------------------------------------");
        console.log(`O vencedor das eleições: Com ${candidato1_Adrian} votos, foi Adrian !!!!
        Em segundo lugar, com ${candidato2_vinicius} votos, foi Vinicius !!!
        Em terceiro lugar, com ${candidato3_gabriel } votos, foi Gabriel !!
        Votos em Branco: ${votoBranco}
        Votos Nulos: ${votoNulo}`);
    }else if(candidato2_vinicius > candidato1_Adrian && candidato1_Adrian > candidato3_gabriel){
        console.log("------------------------------------------");
        console.log(`O vencedor das eleições: Com ${candidato2_vinicius} votos, foi Vinicius !!!!
        Em segundo lugar, com ${candidato1_Adrian} votos, foi Adrian !!!
        Em terceiro lugar, com ${candidato3_gabriel} votos, foi Gabriel !!
        Votos em Branco: ${votoBranco}
        Votos Nulos: ${votoNulo}`);
    }else if(candidato3_gabriel > candidato1_Adrian && candidato1_Adrian > candidato2_vinicius){
        console.log("------------------------------------------");
        console.log(`O vencedor das eleições: Com ${candidato3_gabriel } votos, foi Gabriel !!!!
        Em segundo lugar, com ${candidato1_Adrian} votos, foi Adrian !!!
        Em terceiro lugar, com ${candidato2_vinicius} votos, foi Vinicius !!
        Votos em Branco: ${votoBranco}
        Votos Nulos: ${votoNulo}`);
    }else if(candidato3_gabriel > candidato2_vinicius && candidato2_vinicius > candidato1_Adrian){
        console.log("------------------------------------------");
        console.log(`O vencedor das eleições: Com ${candidato3_gabriel} votos, foi Gabriel !!!!
        Em segundo lugar, com ${candidato2_vinicius} votos, foi Vinicius!!!
        Em terceiro lugar, com ${candidato1_Adrian} votos, foi Adrian !!
        Votos em Branco: ${votoBranco} 
        Votos Nulos: ${votoNulo}`);
    }else if(candidato2_vinicius > candidato3_gabriel && candidato3_gabriel > candidato1_Adrian){
        console.log("------------------------------------------");
        console.log(`O vencedor das eleições: Com ${candidato2_vinicius} votos, foi Vinicius !!!!
        Em segundo lugar, com ${candidato3_gabriel} votos, foi Gabriel!!!
        Em terceiro lugar, com ${candidato1_Adrian} votos, foi Adrian !!
        Votos em Branco: ${votoBranco}
        Votos Nulos: ${votoNulo}`);
    }else if(candidato1_Adrian > candidato3_gabriel && candidato3_gabriel > candidato2_vinicius){
        console.log("------------------------------------------");
        console.log(`O vencedor das eleições: Com ${candidato1_Adrian} votos, foi Adrian !!!!
        Em segundo lugar, com ${candidato3_gabriel} votos, foi Gabriel!!!
        Em terceiro lugar, com ${candidato2_vinicius} votos, foi Vinicius !!
        Votos em Branco: ${votoBranco}
        Votos Nulos: ${votoNulo}`);
    }else if(candidato1_Adrian === candidato3_gabriel && candidato3_gabriel === candidato2_vinicius && candidato1_Adrian != 0){
        console.log("------------------------------------------");
        console.log("Ouve um incrivel empate triplo!!");
    }else if(candidato1_Adrian === candidato3_gabriel && candidato3_gabriel < candidato2_vinicius){
        console.log("------------------------------------------");
        console.log("Ouve um incrivel empate Duplo, entre segundo e terceiro mas em priemrio lugar, Vinicius !!")
    }else if(candidato3_gabriel === candidato2_vinicius && candidato2_vinicius < candidato1_Adrian){
        console.log("------------------------------------------");
        console.log("Ouve um incrivel empate Duplo, entre segundo e terceiro mas em priemrio lugar, Adrian !!")
    }else if(candidato2_vinicius === candidato1_Adrian && candidato1_Adrian < candidato3_gabriel){
        console.log("------------------------------------------");
        console.log("Ouve um incrivel empate Duplo, entre segundo e terceiro mas em priemrio lugar, Gabriel !!")
    }else if(candidato1_Adrian === candidato3_gabriel && candidato3_gabriel > candidato2_vinicius){
        console.log("------------------------------------------");
        console.log("Ouve um incrivel empate Duplo, entre segundo e primeiro mas em terceiro lugar fica, Vinicius !!")
    }else if(candidato3_gabriel === candidato2_vinicius && candidato2_vinicius > candidato1_Adrian){
        console.log("------------------------------------------");
        console.log("Ouve um incrivel empate Duplo, entre segundo e primeiro mas em terceiro lugar fica, Adrian !!")
    }else if(candidato2_vinicius === candidato1_Adrian && candidato1_Adrian > candidato3_gabriel){
        console.log("------------------------------------------");
        console.log("Ouve um incrivel empate Duplo, entre segundo e primeiro mas em terceiro lugar fica, Gabriel !!")
    }else{
        console.log("Error//Somente Maiores de 16 pode votar !");
    };
};
exibirResultados();
