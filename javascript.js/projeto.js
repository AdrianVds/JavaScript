const prompt = require('prompt-sync')();

// /Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto, 
// cada objeto precisa ter os seguintes atributos:
// - Nome
// - Duração
// - Ano
// - Diretor
// - Atores principais(lista)
// - Dados (função anônima que retorna uma string com os dados do filme)
// No final mostra no console os dados de todos os filmes ao mesmo 
// tempo.
let filmes1 = {
    filme: "harry potter",
    duraçao: "2 horas",
    ano: 2000,
    diretor: "J. K",
    atores: ["hermione", "ronald"],
    dados: function(){
        return ` nome do filme é ${this.filme}, a  duraçao de ${this.duraçao},
    feito no ano de ${this.ano}, seu diretor é ${this.diretor} e os atores são
    ${this.atores} `
    }
}
let filmes2 = {
    filme: "mad max",
    duraçao: "3 horas",
    ano: 1980,
    diretor: "George Miller",
    atores: ["mel"," tom"],
    dados1: function(){
        return ` nome do filme é ${this.filme}, a  duraçao de ${this.duraçao},
    feito no ano de ${this.ano}, e diretor é ${this.diretor} e os atores são
    ${this.atores} `
    }
}
let filmes3 = {
    filme: "velozes e furiosos",
    duraçao: "2 horas",
    ano: 2005,
    diretor: "Rob Cohen",
    atores: ["toredo"," bryan"],
    dados2: function(){
        return ` nome do filme é ${this.filme}, a  duraçao de ${this.duraçao},
    feito no ano de ${this.ano}, seudiretor é ${this.diretor} e os atores são
    ${this.atores} `
    }
}
let lista_arrays = []
lista_arrays.push(filmes1.dados)
lista_arrays.push(filmes2.dados1)
lista_arrays.push(filmes3.dados2)
console.log(lista_arrays[0])

console.log(filmes1.dados())
console.log()
console.log(filmes2.dados1())
console.log()
console.log(filmes3.dados2())
