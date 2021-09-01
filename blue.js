// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores 
//joguem
// um dado e tenham resultados aleatórios.
// O programa tem que:
// •Perguntar quantas rodadas você quer fazer;
// •Perguntar quantos jogadores vão jogar;
// •Criar um objeto pra cada jogador com nome e número tirado;
// •Guarda todos os objetos em uma lista;
// •Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// •Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.

//Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
const prompt = require('prompt-sync')();
var objetosjgdores ={}
var arrayzin = []

var rodadasQuantidade = +prompt("quantas rodadas deseja jogar: ")
for(let i=0;i<rodadasQuantidade;i+=1){
    var dados = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    var nomesJogadores = prompt("nome de jogadores: ")
    let c = objetosjgdores = {nomesJogadores}
}    
let jogadoresQuantidade = prompt("quantos jogadores vao jogar: ")
for(let a =0;a<jogadoresQuantidade;a+=1){
    var dados = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    arrayzin.push(objetosjgdores)
    arrayzin.push(dados)
}
console.log(arrayzin) /// terminar


