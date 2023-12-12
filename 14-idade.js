/*Crie um laço de repetição para solicitar 5 idades e armazená-las em um array, use o
método every para verificar se todos os usuários são maiores de idade.*/

let idades = []

for(let i = 0; i < 5; i++){
    let perg = Number(prompt("Digite a idade do participante: "))
    idades.push(perg)

}

function verificacao(idade){
    return idade > 18
}

if(idades.every(verificacao)){
    alert(`${idades}\nTodos maiores de idade.`)
}else{
    alert(`${idades}\nAlgum dos componentes não é maior de idade.`)
}