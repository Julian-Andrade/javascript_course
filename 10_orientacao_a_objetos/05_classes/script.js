let cachorro = {
  raca: "SRD",
  patas: 4,
  latir: function () {
    console.log("Au Au");
  },
};

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

let labrador = Object.create(cachorro);
labrador.raca = "Labrador";
labrador.patas = 4;
labrador.latir(); // Executa a função primeiro.

console.log(cachorro);
console.log(pastorAlemao.raca);
console.log(pastorAlemao);
console.log(labrador);
