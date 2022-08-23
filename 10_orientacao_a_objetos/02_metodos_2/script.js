// "this" se refencia ao próprio objeto.

let pessoa = {
  nome: "",
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
  getNome: function () {
    return this.nome;
  },
};

pessoa.setNome("Julian");

console.log(pessoa.nome);
console.log(pessoa.getNome());

// Outro exemplo

const cachorro = {
  raca: "SRD",
  uivar: function () {
    console.log("AU AU");
  },
  rosnar: function () {
    console.log("grrrr!");
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return this.raca;
  },
};

cachorro.uivar();
cachorro.rosnar();
cachorro.setRaca("Pastor Alemão");
console.log(cachorro.getRaca());
console.log(cachorro);
