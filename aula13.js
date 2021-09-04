const prompt = require('prompt-sync')();({sigint: true});
let rodadas = +prompt("quantas rodadas: ");  
for (let c = 0; c < rodadas; c++) {
  var jogos = [];
  var z = 1;
  let qtsJogadores = +prompt("quantos jogadores: ")
  for (let i = 0; i < qtsJogadores; i++,z++) {
    var jogo = {
    nome: prompt("nome de jogador: "),
    numero: Math.floor(Math.random() * (6 - 1 + 1) ) + 1,
    };
    jogos.push(jogo);
    jogos.sort((a, b) => b.numero - a.numero)
}
}console.log(jogos)
console.log()
console.log("Podio dos 3 primeiros colocados:")
console.log("------------------------------------------------------")
console.log(`Em primeiro lugar!!, temos: ${jogos[0].nome}, com o numero: ${jogos[0].numero}`)
console.log("------------------------------------------------------")
console.log(`Em segundo lugar!!, temos: ${jogos[1].nome}, com o numero: ${jogos[1].numero}`)
console.log("------------------------------------------------------")
console.log(`Em terceiro lugar!!, temos: ${jogos[2].nome}, com o numero: ${jogos[2].numero}`)
console.log("------------------------------------------------------")

