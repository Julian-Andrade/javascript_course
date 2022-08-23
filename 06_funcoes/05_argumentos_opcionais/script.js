function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log(`Esta função precisa ter dois argumentos!`);
  } else {
    return a + b;
  }
}

console.log(soma(1));

console.log(soma(5, 5));

// Outro exemplo

function saudacao(nome, idade) {
  if (idade === undefined) {
    console.log(`Olá ${nome}`);
  } else {
    console.log(`Olá ${nome}, você tem ${idade} anos.`);
  }
}

console.log(saudacao("Julian"));

console.log(saudacao("Julian", 31));

// Argumentos com valor Default

function potencia(base, exp = 2) {
  return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));
