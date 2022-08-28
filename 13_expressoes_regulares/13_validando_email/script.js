const validandoEmail = /\w+\@\w+\.\w+/;

console.log(validandoEmail.test("matheus@gmail.com"))
console.log(validandoEmail.test("matheus@gmail"))
console.log(validandoEmail.test("gmail.com"))