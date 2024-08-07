const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um valor:"));

if(numero % 2 === 0){
    console.log ("O número" ,numero, "é par")
}else{
    console.log ("O número" ,numero, "é Impar")
}
