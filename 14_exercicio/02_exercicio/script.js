const string = /[^0-9]\w+\ID/;

console.log(string.test("julian"));
console.log(string.test("julianID"));
console.log(string.test("12345"));

// Outra Forma

const stringValidacao = /\d+ID\b/;

console.log(stringValidacao.test("julian"));
console.log(stringValidacao.test("julianID"));
console.log(stringValidacao.test("12345ID"));
