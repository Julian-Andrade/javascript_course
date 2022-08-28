// Diferente do "exec" o "match" executa no próprio dado.

const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número está aqui".match(/\d+/);

console.log(frase);
console.log(frase2);
