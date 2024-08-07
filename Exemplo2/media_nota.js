const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite a nota:"));
let nota2 = parseFloat(prompt("Digite a outra nota:"));
let nota3 = parseFloat(prompt("Digite a outra nota:"));

let media = ((nota+nota2+nota3)/3)

if(media<4){
    console.log("O aluno esta reprovado")
}
else if(media<5.9){
    console.log("O aluno esta de recuperacao")
}
else{
    console.log("O aluno esta aprovado")
}