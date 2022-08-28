const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("88117-50"));

// Telefone 9.9168-9558
const telefone = /\d{1}\.\d{4}-\d{4}/;

console.log(telefone.test("9.9168-9558"));
console.log(telefone.test("9.91689558"));
console.log(telefone.test("991689558"));

// Telefone (75) 99168-9558
// d{4,5} => Valida 4 ou 5 números
const celular = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(celular.test("(75)99168-9558"));
