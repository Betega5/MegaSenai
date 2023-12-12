// let qtdCanetas = Number(prompt("Quantas canetas deseja comprar ?"))
// valor = 1 * qtdCanetas
// promocao = valor * 0.70 
// if(qtdCanetas >= 5){
//    alert(`Promoção: de 5 canetas 30% de desconto, valor total a pagar de R$${promocao}`)
// }else{
//     alert(`Valor total a pagar de R$${valor}`)
// }

function calculadora(){
    valor = parseInt("Digite o valor : ")
    qtd = parentInt("Digite a quantidade de canetas: ")
    total = qtd * valor
    totalDesc = valor * (qtd * 0.7)
    if(qtd < 5){
        alert(`Total: R$${total.toFixed(2)}`)
    } else {
        alert(`Total com desconto de R$${totalDesc.toFixed(2)}`)
    }
}

