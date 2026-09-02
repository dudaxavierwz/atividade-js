



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


// const nota = 75;

// if (nota>= 80) {
//     console.log("Aprovado!");
// } else  if(nota >= 60){
//     console.log("Recuperação!");
// } else {
//     console.log("Reprovado!");
//}





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





// const numeroSecreto = Math.floor(Math.random ()* 10) + 1;
// let palpite ; 
// let tentativas1
// alert("Adivinhe o número entre 1 a 10")

// do {
//    alert(Math.floor(Math.random()* 10))

//     palpite=Number(prompt("Seu palpite"))
//     tentativas1++

//     if(Number.isNaN(palpite)){
//         alert("Digite um número válido")
//     }

//      else if (palpite == numeroSecreto){
//         alert("Acertou!!!" + "Em" + tentativas1 + " tentativas")
//     }
//     else if (palpite < numeroSecreto){
//         alert("Muito baixo! Tente maior")
//     }
//     else if (palpite > numeroSecreto){
//         alert("Muito alto! Tente um menor")
//     }
// } while (palpite != numeroSecreto);







// for (let conta = 0; conta < 10; conta++) {
//     console.log(conta)
// }
// console.log("O loop terminou.")


// const numero = Number(prompt("Tabuada de qual número?"))

// if (Number.isNaN(numero)) {
//     console.log("❌ número inválido.")
// } else {
//     console.log(`\n TABUADA DO ${numero} \n`)

//     for (let i = 1; i <= 10; i++) {
//         const resultado = numero * i

//         console.log(`${numero} x ${i} = ${resultado}`)


//     }


// }




// console.log("Números pares de 0 a 20:\n")

// for(let pares= 0; pares <=20; pares += 2 ){
//     console.log(pares)
// }


















// for(let numero = 1; numero <=3; numero++){
// let resultado = "";
//     for(let vezes = 1; vezes <=3; vezes++){
//         resultado += numero+ " "
//     }

//     console.log(resultado)

// }



// for (let ast = 1; ast <= 5; ast++) {
//     let resultado = "";
//     for (let vezes = 1; vezes <= ast; vezes++) {
//         resultado += "* "

//     }
//     console.log(resultado)
// }



// for (let conta =0; conta <= 10; conta++){
//     console.log(conta)
// }
// console.log(  )




// const numero = Number(prompt("Tabuada de qual número?"))
// if (Number.isNaN(numero)){
//     alert("Número inválido.")

// } else {
//     console.log(`\n TABUADA DO ${numero} \n`)}
//     for(let i = 1; i<=10; i++){


// const resultado = numero * i

// console.log(` ${numero} x ${i}= ${resultado}`)

// }










// console.log("Números pares de 1 a 50 :\n")

// for (let pares= 0; pares <=50; pares +=2){
//     console.log(pares)
// }



// const numeroSecreto = Math.floor(Math.random()*100) + 1;
// let palpite ;
// let tentativas =0;
// alert ("Adivinhe o número entre 1 a 100")
// do{
// palpite =Number(prompt("Seu palpite"))
// tentativas++

// if(Number . isNaN(palpite)){
//     alert("Número inválido")
// }

// else if(palpite == numeroSecreto){
//     alert ("Acertou!!!"+ "Em" +tentativas + "tentativas")
// }
// else if (palpite < numeroSecreto){
//     alert("Muito baixo! Tente um maior")
// }
// else if (palpite > numeroSecreto){
//     alert("Muito alto! Tente um menor")
// }
// }while (palpite != numeroSecreto);


// let tempo = Number(prompt("Contagem regressiva: \n"))
// let regressiva =Number(prompt("Informe um número"))
// for (regressiva; regressiva>= 0; regressiva--){
// console.log(regressiva)
// }



// const numeros = [1, 2, 3, 4, 5]
// const nomes = ["ana", "caio", "lucas", "duda", "camilla"]

// console.log(numeros[0])
// console.log(nomes[0])

// console.log(nomes.length)

// for (let i = 0; i < nomes.length; i++) {

//     console.log(nomes[i])
// }



// const frutas = ["maçã", "laranja", "uva", "morango"]

// for (const fruta of frutas) {
//     console.log(fruta)
// }


// const listaNumeros = [10, 25, 8, 42, 15, 7]
// let soma = 0;
// for (const numero of listaNumeros) {
//     soma += numero
// }
// console.log("Numeros ", listaNumeros)
// console.log("Soma ", soma)


// const notas = [7.5, 9.0, 6.5, 8.8, 10.0, 5.5];
// let maiorNota = notas[0];

// for (const nota of notas) {
//     if (nota > maiorNota)
//         maiorNota = nota
// }

// console.log("Maior nota é;", maiorNota);


// const pessoa = {
//     nome: "Lucas",
//     idade: 33,
//     email: "email@teste.com",
//     genero: "M",
//     cpf: "497.755.999.99"
// }

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa["idade"])

// for (const chave in pessoa) {



//     console.log(pessoa[chave])

// }




// const aluno = {

//     nome: "Ana",
//     matricula: "202609021",
//     curso: "Javascript",
//     nota: 9.5

// }

// console.log("Dados do aluno:\n")
// for (const chave in aluno) {

//     const valor = aluno[chave]
//     console.log("chave:" + chave + "valor" + valor)
// }

// const carrinho = [
//     {produtos: "camiseta", preco: 49.90, quantidade: 2 },

//     {produtos: "calça jeans", preco: 150.90, quantidade: 1 },

//     {produtos: "tenis", preco: 199.90, quantidade: 1 },
// ]

// for(const itemDoMercado of carrinho){

// console.log(itemDoMercado.produtos)
// console.log(itemDoMercado.preco)

// }


// const pedidos = [

//     { produto: "Baconturbo", preco: 55.50, quantidade: 1 },

//     { produto: "Cheddarbacon", preco: 49.90, quantidade: 2 },

//     { produto: "Cheddarchiken", preco: 45.50, quantidade: 1 },

//     { produto: "Tastybacon", preco: 49.90, quantidade: 1 },
// ]

// let maiorValor = 0;
// let totalPedido = 0;

// for (const itensDoCarrinhos of pedidos) {

//     let valorTotal = Number((itensDoCarrinhos.preco * itensDoCarrinhos.quantidade).toFixed(2));

//     console.log("Produto" + itensDoCarrinhos.produto)
//     console.log("Quantidade" + itensDoCarrinhos.quantidade)
//     console.log("Valor total: r$" + valorTotal)

//     totalPedido += valorTotal;

//     if (valorTotal > maiorValor) {
//         maiorValor = valorTotal;
//     }

// }

// console.log("Maior valor: R$" + maiorValor);
// console.log("Total do pedido: R$" + totalPedido);

