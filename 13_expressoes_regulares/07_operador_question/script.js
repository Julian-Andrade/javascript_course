// Operador question, torna opcional o elemento anterior a ele.
const padrao = /Abacax?i/;

console.log(padrao.test("Abacai"));
console.log(padrao.test("Abacax"));
console.log(padrao.test("Abacaxi"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));
