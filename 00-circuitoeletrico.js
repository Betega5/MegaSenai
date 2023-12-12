// function resistenciaDeCircuito(tesao, corrente){
//     result = tesao / corrente
//     return result
// }
// console.log(resistenciaDeCircuito(60, 30))

let resist = (tensao, corrente) => {
    let resistencia = tensao / corrente
    return resistencia
}
console.log(resist(5, 0.02))