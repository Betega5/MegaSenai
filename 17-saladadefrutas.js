/*Fazer um programa no qual o usuário deve montar uma salada de frutas com uma
cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando
for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”.
Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)*/

let salada = []
let adicionar = ``
while(adicionar !== `cereja`){
    adicionar = prompt(`Qual fruta adicionar?`)
    salada.push(adicionar)
    if(adicionar == `cereja`){
        adicionar = `cereja`
    }
}
alert(`Sua salada de frutas vai ter \n${salada}`)
