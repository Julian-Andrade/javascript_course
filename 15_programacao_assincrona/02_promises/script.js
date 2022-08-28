// As promises são ações assíncronas que podem produzir um valor em algum momento no código;
// Uma forma de dizer a linguagem que um valor pode estar presente em um futuro código;
// O objeto das promises é "Promise", "resolve" é o método que resolve uma Promise, o "then" é o que poder ser executada no futuro.

let p = Promise.resolve(5);

console.log("Outros Códigos");

console.log(p);

// Pode-se utilizar o then diversas vezes afim de executar a Promise.
p.then((value) => {
  return value + 5;
}).then((value) => {
  console.log(`O valor é ${value}.`);
});
