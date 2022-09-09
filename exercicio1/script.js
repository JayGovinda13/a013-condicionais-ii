const num = prompt("Insira um numero");

if (num % 2 === 0) {
  console.log("Divisel por 2");
} else if (num % 3 === 0) {
  console.log("Divisivel 3");
} else {
  console.log("Não divisivel");
}

if (num % 2 === 0 || num % 3 === 0) {
  console.log("Divisivel por 2 ou 3");
} else {
  console.log("Não divisivel");
}
