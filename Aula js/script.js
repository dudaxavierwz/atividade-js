



// let numero = 10;
// let texto = "20";
// let resultado = numero + texto;
// console.log(resultado);

// const idade1 = 20;
// if(idade>= 20){
// console.log("maior de idade!");
// }

// const idade2  = 15;
// if (idade >= 18) {
//     console.log("Você é maior de idade");
// } else {
//     console.log(" Você não é maior de idade")
// }

// const idade3  = Number(prompt(" Digite sua idade"));
// if (idade >= 18) {
//     console.log("Você  pode tirar a carteira de motorista!");
// } else {
//     console.log("Você ainda não pode dirigir.");
// }

// const idade4= 20;
// const temDocumento= true;
// const estaLista= true;
// if ( idade >= 18 && temDocumento && estaLista) {
//     console.log("Pode entrar!!");
// } else {
//     console.log("Aceso negado!!");
// }

// const temDinheiro = false;
// const temCartao = true; 
// const temPix = false;

// if (temDinheiro || temCartao || temPix) {
//     console.log("Pode pagar");
// } else {
//     console.log("Não pode pagar");
// }
// const usuario1 = " adimin";
// const senha1 = "1234";

// const senhaCorreta = (senha === "1234");
// const ehAdmin = (usuario === " admin");
// const ehGrente = (usuario=== " gerente");

// if (( ehAdmin && senhaCorreta) || (ehGrente && senhaCorreta )) {
//     console.log("Acesso liberado!");
// } else {
//     console.log("Acesso negado!");
// }
// if ((ehAdmin || ehGrente) && senhaCorreta) {
    
// } else {
    
// }


// const usuario = prompt("Usuário:");
// const senha = prompt("Senha:");

// const acessoAdmin = (usuario ==="admin" && senha ==="261724");
// const acessoUser =(usuario === "user" && senha === "senha261724")

// if (acessoAdmin || acessoUser) {
//     console.log("Acesso liberado!")
// } else {
//     console.log("Acesso negado!")
// } 

/**
 * 
 */
// const nota = 75;

// if (nota>= 80) {
//     console.log("Aprovado!");
// } else  if(nota >= 60){
//     console.log("Recuperação!");
// } else {
//     console.log("Reprovado!");
//}
/**

Exercício — Classificação da Temperatura

Crie um programa em JavaScript que solicite ao usuário uma temperatura em graus Celsius (°C) e classifique a temperatura de acordo com as faixas abaixo:

Temperatura	Classificação
Abaixo de 0°C	🥶 Muito frio
De 0°C a 15°C	❄️ Frio
De 16°C a 25°C	😊 Agradável
De 26°C a 35°C	🌡️ Quente
Acima de 35°C	🔥 Muito quente
*/


// const temp = prompt("Muito Frio");
// const temp2 = prompt("Frio");
// const temp3 = prompt("Agradável");
// const temp4 = prompt("Quente");
// const temp5 = prompt("Muito quente");

// const temperatura = Number (prompt(" Informe a temperatura"))

// if (Number .isNaN(temp));
















// let peso = Number(prompt("Peso (kg):"))
// let altura = Number(prompt("Altura (m):"))

// let imc = peso / altura  ** 2





// if ( imc <= 18) {
//     console.log("baixo")
// }
// else if ( imc > 18 && imc <= 24 ){
//     console.log("normal")
// }
// else{
//     console.log("sobre peso")
// }

// && -> condicao todas as condicoes devem ser true

// || -> se alguma condicao for certa,vai entrar no if

//! - significa NAO . Ele inverte o valor do booleano








/*
let idade = Number(prompt(" Informe sua idade"));
if (idade >= 18) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}




const numero = Number(prompt("Escolha um número"));
if (numero >= 1) {
    console.log("Número positivo");
} else {
    console.log("Número negativo");
}

const nota = Number(prompt("Consulte sua Aprovação"));
if (nota >=60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}*/

// let numero = Number(prompt("Escolha um número"));

// if (numero > 0) {
//     console.log("Positivo");
// } else  if (numero =0) {
//     console.log("Zero");
// }else{
//     console.log("Negativo")
// }
    



// const idade =Number(prompt("Digite sua idade"));
// if (idade <0) {
//     console.log("Idade inválida");
// } else if ( idade >0 && idade <=12) {
//     console.log(" Você é uma criança");
// } else if (idade >12  && idade <=17) {
//     console.log(" Você é um Adolecente");
// } else if (idade <=18) {
//     console.log("Você é um Adulto");
// } else {
    
// } {
    
// } {
    
// } {
// }    



// let numero =Number (prompt("Ímpar ou Par"))
// let resultado = numero % 2

// if (resultado === 0) {
//     console.log("Número par")
// }else{
//     console.log("Número ímpar")
// } 



const usuario = "admin";
const senha = "2617";

const senhaCorreta =( senha === "2617");
const ehAdmin =(usuario === "admin" );
const ehDuda = (usuario ===" duda");
if ((ehAdmin && senhaCorreta) || (ehDuda && senhaCorreta )) {
    console.log("Acesso liberado");
}else{
    console.log("Acesso negado");
}
if (ehAdmin || ehDuda && senhaCorreta) {
    
}else{

}
