//código a ser reescrito
const nome = prompt("Qual seu nome?")

/*if (nome === "José") {
  console.log("Oi, Zé!");
} else {
  console.log("Olá, " + nome);
}*/

console.log(nome === "José" ? "Oi, Zé!" : "Olá, " + nome);

/*if (idade >= 18) {
  console.log("pode tirar carteira de motorista!");
} else {
  console.log("Ainda não pode tirar carteira de motorista");
}*/

const idade =prompt("Quantos anos?")
console.log(idade >= 18 ? "pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista")
