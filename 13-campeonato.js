/*Crie um programa que recebe 10 números de inscrição para um campeonato, a partir
desses números, crie um array para os jogadores do time de números pares e um
outro para os jogadores do time de números ímpares e exiba na tela se os times
estão com a mesma quantidade de jogadores.*/


let listaImpar = []
let listaPar = []

for(let i = 0; i < 10; i++){
    let inscricao = Number(prompt("Digite seu número de inscrição: "))
    if(inscricao % 2 == 0){
        listaPar.push(inscricao)
    }else{
        listaImpar.push(inscricao)
    }
}
if(listaImpar.length == listaPar.length){
    alert(`Os jogadores do time impar serão: ${listaImpar}.\nOs jogadores do time par serão: ${listaPar}. `)
}else{
    alert(`Os times estão desequilibrados;\n${listaImpar} para o time impar e ${listaPar} para o time par\n ARRUME!!!`)
}