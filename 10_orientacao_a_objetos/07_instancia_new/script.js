function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

// Maneira correta de criar métodos

Cachorro.prototype.uivar = function () {
  console.log("Auuuu");
};

Cachorro.prototype.latir = function () {
  console.log("Au Au");
};

let husky = new Cachorro("Husky", 4, "Cinza");

husky.uivar();
husky.latir();

console.log(husky);
