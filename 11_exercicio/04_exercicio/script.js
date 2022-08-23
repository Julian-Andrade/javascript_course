class Carro {
  constructor(marca, cor, combustivel, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.combustivel = combustivel;
    this.consumo = consumo;
  }

  dirigir(km) {
    let combustivelConsumido = km / this.consumo;

    this.combustivel -= combustivelConsumido;
  }

  abastecer(litro) {
    if (this.combustivel >= 20) {
      console.log("Não precisa abastecer");
    } else {
      this.combustivel += litro;
    }
  }
}

let carro = new Carro("Fiat", "Vermelho", 100, 10);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(50);

console.log(carro);

carro.dirigir(800);

console.log(carro);

carro.abastecer(90);

console.log(carro);
