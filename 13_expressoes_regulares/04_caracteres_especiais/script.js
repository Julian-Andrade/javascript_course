// Expressão com dois dígitos númericos
const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);

const palavraTresLetas = /\w\w\w/;

console.log(palavraTresLetas.test("asd"));
console.log(palavraTresLetas.test("asdd"));
console.log(palavraTresLetas.test("as"));
