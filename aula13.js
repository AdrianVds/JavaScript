const prompt = require('prompt-sync')();
let rodadas = parseInt(prompt("quantas rodadas: "))   
for (let c = 0; c < rodadas; c++) {
    let jogos = [];
    let qtsJogadores = parseInt(prompt("quantos jogadores: "))
    for (let i = 0; i < qtsJogadores; i++) {
        let jogo = {
            nome: "Jogador" + (i + 1),
            numero: Math.floor(Math.random() * 6 + 1),
        };
        jogos.push(jogo);

        jogos.sort((a, b) => {
            if (b.numero < a.numero) {
                return -1;
            } else {
                return true;
            }
        });
    }