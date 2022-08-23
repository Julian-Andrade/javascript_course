let calculadora = {
  somar: function (x, y) {
    return x + y;
  },
  subtrair: function (x, y) {
    return x - y;
  },
  multiplicar: function (x, y) {
    return x * y;
  },
  dividir: function (x, y) {
    return x / y;
  },
};

console.log(calculadora.somar(5, 5));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.multiplicar(5, 7));
console.log(calculadora.dividir(10, 5));
