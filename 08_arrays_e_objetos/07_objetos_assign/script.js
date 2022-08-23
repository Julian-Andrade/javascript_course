let carro = {
  portas: 2,
  portamalas: "200 L",
  motor: 2.0,
};

let add = {
  tetosolar: true,
  arcondicionado: true,
};

console.log(carro);
Object.assign(carro, add); // Adiciona as propriedades de um Objeto ao outro Objeto.
console.log(carro);
