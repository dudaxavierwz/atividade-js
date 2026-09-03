// const numeros = [5,12,8,3,19,7,25]

// const procurado = 19

// for (const num of numeros){

//     console.log("Número analisando:" + num)
//     if(num === procurado){
//         console.log("Encontrado")
//         break;
//     }
// }
// console.log("Loop terminou")



console.log("Números Impares de 1 a 10")

for (let numero = 1; numero <= 10; numero ++ ) {

    if (numero % 2 == 0) {

        continue;
    }
    console.log(numero)
}


const nomes = ["Guilherme","Lailton","Rita","Miguel","Vanessa","Michael jackson"]

nomes.reverse()
console.log(nomes)


const alunos =[

    {nome:"Camilla", nota:10},
    {nome:"Duda", nota:10},
    {nome:"Lourenço", nota:9},
    {nome:"Lívia", nota:8},
    {nome:"Geovanna", nota:9},
    {nome:"Renan", nota:5},
    {nome:"Pedro", nota:4},
    {nome:"Kamilly", nota:8},
    {nome:"Chico", nota:2}]

let aprovados;

for(const aluno of alunos){
if(aluno.nota<7){
    continue;
}else {
    console.log(aluno.nome)
}

}

