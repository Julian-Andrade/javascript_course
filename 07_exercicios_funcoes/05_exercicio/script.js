function printUserAge(age) {
  if (age >= 18) {
    console.log(`Pode entrar na Autoescola.`);
  } else {
    console.log(`Não pode entrar na Autoescola, idade ${age} abaixo do permitido.`);
  }
}

console.log(printUserAge(18));
console.log(printUserAge(17));
