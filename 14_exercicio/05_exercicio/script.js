const validarUsuario = /\w{3,16}[_][-][0-9]/; // => Desta maneira
const validarUsuario2 = /^(?=.{3,16})[a-z0-9-_]/; // => Desta maneira

console.log(validarUsuario.test("teste_-12345"));
console.log(validarUsuario.test("teste_-12345"));
console.log(validarUsuario.test("te"));

console.log(validarUsuario2.test("teste_-12345"));
console.log(validarUsuario2.test("teste_-12345"));
console.log(validarUsuario2.test("te"));
