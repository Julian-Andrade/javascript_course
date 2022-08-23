class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
  constuctor(patas, raca) {
    patas, patas;
    this.raca = raca;
  }

  latir() {
    console.log("Au Au");
  }
}

let pug = new Cachorro(4, "PUG");

console.log(pug.patas);

pug.latir();

// Verifica se Cachorro/coiote é instancia de Mamifero
console.log(new Cachorro() instanceof Mamifero);
console.log(coiote instanceof Mamifero);
