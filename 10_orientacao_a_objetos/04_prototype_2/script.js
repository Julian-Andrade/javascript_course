let pessoa = {
  maos: 2,
};

console.log(pessoa);
console.log(Object.getPrototypeOf(pessoa)); // Verificar as propriedades do objeto!
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // Confirma que é um prototype

console.log(pessoa.hasOwnProperty("maos")); // Uma das Propriedades do Objeto!

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);
