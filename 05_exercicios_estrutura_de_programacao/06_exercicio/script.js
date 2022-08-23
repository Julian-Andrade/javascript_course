let age = 18;
let cnh = false;

if (age >= 18 && cnh == false) {
  console.log(`Você deve possuir CNH para dirigir!`);
} else if (age >= 18 && cnh == true) {
  console.log(`Você está apto a dirigir!`);
} else {
  console.log(`Inapto a dirigir, idade abaixo de 18 anos e não possui CNH!`);
}
