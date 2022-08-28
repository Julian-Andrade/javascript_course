const reg1 = new RegExp("Bola");

console.log(reg1.test("Tem Bola?"));
console.log(reg1.test("Não Tem!"));

const reg2 = /bola/;

let text = "Tem bola na cesta.";

console.log(reg1.test("Tem Bola?"));
console.log(reg1.test("Não Tem!"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado."));
