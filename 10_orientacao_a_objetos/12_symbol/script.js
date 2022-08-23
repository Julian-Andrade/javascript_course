class Cachorro {
  constructor(raca, cor) {
    (this.raca = raca), (this.cor = cor);
  }

  latir() {
    console.log("Au Au");
  }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.olhos = 2;
Cachorro.prototype.patas = 4;

let orelhas = Symbol();

Cachorro.prototype[orelhas] = 2;

// Acessando o Symbol
console.log(Cachorro.prototype[orelhas]);

let labrador = new Cachorro("Labrador", "Amarelo");

// console.log(labrador);
// console.log(labrador.olhos);
// labrador.latir();
// console.log(Cachorro.prototype.raca);
// console.log(labrador.raca);
// console.log(labrador.patas);
console.log(labrador[orelhas]);
console.log(labrador);
