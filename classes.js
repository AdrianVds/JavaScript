const prompt = require('prompt-sync')();({sigint: true});
// Crie uma classe Pessoa, com os atributos:
//  nome, peso, idade 
//  e os métodos:
//  envelhecer, engordar, emagrecer, dados
//  envelhecer aumenta 1 na idade
//  emagrecer diminui 1 no peso
//  engordar aumenta 1 no peso
//  dados mostra todos os atributos (nome, idade peso).

//  Depois crie 2 objetos dessa classe e teste se os métodos
//  estão todos funcionando para cada um
class pessoa{
    constructor(nome,peso,idade){
        this.nome = nome,
        this.peso = peso,
        this.idade = idade
    }
    envelhecer(){
        this.idade = idade+=1
    }
    engordar(){
        this.engordar = engordar+=1
    }
    dados(){
        console.log(` seu nome é ${this.nome}, voce tem ${this.idade} anos de idade, e pesa ${this.peso}`)
    }
}
// let nome = prompt("digite seu nome")
let pesos = prompt("digite o peso da pessoa: ")
let pessoa1 = new pessoa("adrian",pesos,20);

pessoa1.dados();