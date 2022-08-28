const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6."));
console.log(reg1.test("Temos o número 12345."));
console.log(reg1.test("Temos o número 25"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 9"));
console.log(reg2.test("Temos o número"));
