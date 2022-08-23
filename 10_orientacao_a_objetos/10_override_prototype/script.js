class Cachorro {
  constructor(raca, patas, cor) {
    (this.raca = raca), (this.patas = patas), (this.cor = cor);
  }

  latir() {
    console.log("Au Au");
  }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.olhos = 2;

let labrador = new Cachorro("Labrador", 4, "Amarelo");

console.log(labrador);
console.log(labrador.olhos);
labrador.latir();
console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
