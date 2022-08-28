const notLowerCase = /[^a-b][^0-9]\w+/;

console.log(notLowerCase.test("ABC"));
console.log(notLowerCase.test("abc"));
console.log(notLowerCase.test("123"));
console.log(notLowerCase.test(" "));

// Outa forma de executar

const somenteMaiuscula = /[A-Z]/
console.log(somenteMaiuscula.test("ABC"));
console.log(somenteMaiuscula.test("abc"));
console.log(somenteMaiuscula.test("123"));
console.log(somenteMaiuscula.test(" "));