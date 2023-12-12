/*Crie um array de preços e use o método filter para criar um novo array que contenha
apenas os preços inferioriores a R$ 50*/

let listaPreco = [100, 98, 34, 43, 12]
let result = listaPreco.filter(checar)
console.log(`Os preços menores que $50 são ${result}`)

function checar(valor){
    return valor <= 50
}
