/*Crie um laço de repetição para solicitar 5 números, armazene-os em um array e use o
método reduce para encontrar e mostrar o maior valor no array.*/
let lista = []

for(let i = 0; i < 5; i++){
    let num = Number(prompt("Digite números aleatorios: "))
    lista.push(num)
}

function menor(total, nun){
    return total - nun
}

alert(lista)