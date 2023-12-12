/*Crie uma função anônima para gerar uma mensagem de convite de casamento, que
deve receber nomeConvidado, data, horário, local e nomeNoivos e a partir disso
monte uma mensagem convidando a pessoa para o casamento. Realize pelo menos 3
chamadas para ela e valide se o retorno foi o esperado*/

let convite = function (nomeConvidado, data, horário, local, nomeDoNoivo, nomeDaNoiva){
let mensagem = `Caro(a) Senhor(a) ${nomeConvidado}, é com grande alegria que digo que você foi convidado(a) ao casamento de ${nomeDoNoivo} e ${nomeDaNoiva}, no dia ${data}, as ${horário} no local ${local}, estamos ansiosos para sua presença.`
return mensagem
}
casamento1 = convite("Jacinto Pinto", "17 de julho", "14:00", "Casa das bundas", "Thomas Turbando", "Sofia da Puta")
casamento2 = convite("Breno da Cruz", "23 de Maio", "17:00", "Vale Tropical", "Nicolau Flameu", "Elizabeth Freeman")
casamento3 = convite("Marcela Andrade", "02 de Dezembro", "12:00", "Fazenda da Familia Bungues", "Carlos Burgues", "Camile Astorion")
console.log(casamento1)
console.log(casamento2)
console.log(casamento3)