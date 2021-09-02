const prompt = require('prompt-sync')();
var objetoscriados = []
var rodadasQuantidade = +prompt("quantas rodadas deseja jogar: ")
for(let i=0;i<rodadasQuantidade;i+=1){
    let obj = {};
    // for no for exmplo
    var qntdjgdor = +prompt("quantos vamo jogar: ")
      for(let i=0;i<qntdjgdor;i+=1)
        obj.dados = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
        obj.nomesJogadores = prompt("nome de jogadores: ")
        objetoscriados.push(obj)  
}
console.log(objetoscriados)   