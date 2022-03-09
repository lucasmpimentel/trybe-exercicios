//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarol = 22
let idadeMurilo = 25
let idadeBaeta = 26

if (idadeCarol < idadeMurilo && idadeCarol < idadeBaeta) {
  console.log("Carol é a pessoa mais nova")
}else if (idadeMurilo < idadeCarol && idadeMurilo < idadeBaeta) {
  console.log("Murilo é a pessoa mais nova")
}else{ 
  console.log("Baeta é a pessoa mais nova")
}