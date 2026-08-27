



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









// let idade = Number(prompt(" Informe sua idade"));
// if (idade >= 18) {
//     console.log("Acesso liberado");
// } else {
//     console.log("Acesso negado");
// }




// const numero1 = Number(prompt("Escolha um número"));
// if (numero1 >= 1) {
//     console.log("Número positivo");
// } else {
//     console.log("Número negativo");
// }

// const nota = Number(prompt("Consulte sua Aprovação"));
// if (nota >= 60) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

// let numero = Number(prompt("Escolha um número"));

// if (numero > 0) {
//     console.log("Positivo");
// } else if (numero = 0) {
//     console.log("Zero");
// } else {
//     console.log("Negativo")
// }




// const idade1 = Number(prompt("Digite sua idade"));
// if (idade1 < 0) {
//     console.log("Idade inválida");
// } else if (idade1 > 0 && idade1 <= 12) {
//     console.log(" Você é uma criança");
// } else if (idade1 > 12 && idade1 <= 17) {
//     console.log(" Você é um Adolecente");
// } else if (idade1 <= 18) {
//     console.log("Você é um Adulto");
// } else {

// } {

// } {

// } {
// }



// let numero2 = Number(prompt("Ímpar ou Par"))
// let resultado = numero2 % 2

// if (resultado === 0) {
//     console.log("Número par")
// } else {
//     console.log("Número ímpar")
// }



// const usuario = "admin";
// const senha = "2617";

// const senhaCorreta1 = (senha === "2617");
// const ehAdmin = (usuario === "admin");
// const ehDuda = (usuario === " duda");
// if ((ehAdmin && senhaCorreta1) || (ehDuda && senhaCorreta)) {
//    console.log("Login bem sucedido");
// } else  {
//  console.log("Acesso negado");
// }



// // const ano = Number(prompt("Digite um ano"))
// // //if ((ano % 4 === 0 && ano %  100 == 0) || (ano % 400 === 0)) {
// //     alert(ano + "Ano bissexto.")
// // } else {
// //     alert(ano+"Ano não bissexto")
// // } 


// //while(true){
//    // console.log("Ao Infinito e ... Além")
// //}


// let contador =1
// while (contador <=5){
//     console.log("Contagem:"  + contador)

//     contador = (contador +1)
// }

// let tempo = 10

// while (tempo > 0){
//     console.log(tempo)

//     tempo--
// }
//  console.log("Codigo acabou")



// const senhaCorreta = "148supersenha"
// let tentativa = ""


// while (tentativa != senhaCorreta) {


//     tentativa = prompt("Digite a senha:")

//     if (tentativa === senhaCorreta) {
//         console.log("Senha correta ! Acesso liberado.")
//     }
//     else {
//         console.log("Senha incorreta. Tente novamente")
//     }
// }

// let soma = 0;
// let numero3 = 0;

// while (soma <= 100) {

//     numero3 = Number(prompt("Informe um número"))
//     soma = soma + numero3

// }

// console.log("A soma dos números chegou em:" + soma)



// let repitir = false

// do {
//     console.log("Só uma vez.")
// } while (repitir)

// let num = 10;
// while (num < 5) {
//     console.log("Isso NÂO vai aparecer")
// }
// do {
//     console.log("Isso VAI aparecer pelo menos 1x")
// }
// while (num < 5)





    const numeroSecreto = Math.floor(Math.raddom()* 10) + 1;
    let palpite ; 
    let tentativas1
    alert("Adivinhe o número entre 1 a 10")

    do {
       alert(Math.floor(Math.random()* 10))

        palpite=Number(prompt("Seu palpite"))
        tentativas1++

        if(Number.isNaN(palpite)){
            alert("Digite um número válido")
        }

         else if (palpite == numeroSecreto){
            alert("Acertou!!!" + "Em" + tentativas1 + " tentativas")
        }
        else if (palpite < numeroSecreto){
            alert("Muito baixo! Tente maior")
        }
        else if (palpite > numeroSecreto){
            alert("Muito alto! Tente um menor")
        }
    } while (palpite != numeroSecreto);