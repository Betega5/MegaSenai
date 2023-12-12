//-----Equivalente ao Push-----
let lista = [1,2,3,5,6,7,8,9]

// let qtd = lista.length
// lista[qtd] = 4 
// console.log(lista)

//-----Equivalente ao unshift-----
// for(let i = lista.length; i > 0; i--){
//     lista[i] = lista[i-1]
// }
// lista[0] = 4
// console.log(lista)

//-----Adicionar em determida posição-----

// function setPosition(pos, elemento){
//         for(let i = lista.length; i > pos; i--){
//                 lista[i] = lista[i -1]
//         }
//         lista[pos] = elemento
// }
// setPosition(3, 4)
// console.log(lista)

//-----Contar a qtd de elementos num Array-----

lista[1280] = 56
//console.log(lista)


let cont = 0
for(let i = 0; i < 100000; i++){
        if(lista[i] != null){
            cont = i
        }
}
console.log(`Qtd: ${lista.length}`)
/*
-----Espaços vazios-----
lista[12] = 56
console.log(lista)
console.log(`Qtd: ${lista.length}`)

lista[12] = 56
console.log(lista)
[Running] node "c:\Users\bruno_betega\Desktop\array\vetor.js"
[ 1, 2, 3, 5, 6, 7, 8, 9, <4 empty items>, 56 ]

[Done] exited with code=0 in 0.089 seconds*/