const validarDataNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNascimento.test("20/05/1990"));
console.log(validarDataNascimento.test("27/11/1990"));
console.log(validarDataNascimento.test("27-11-1990"));
