const prompt = require('prompt-sync')();({sigint: true});
function enviararquivo(mensagem,callback){
    setTimeout(function(){
      console.log(`arquivo: ${mensagem}`)
      console.log(`mensagem foi enviada`)
      callback()
    }), 0000;
  }
  console.log("primeiro")
let mensagens = prompt("qual a mensagem? ")
enviararquivo(mensagens,function(){console.log("me pagaaa")}

)
