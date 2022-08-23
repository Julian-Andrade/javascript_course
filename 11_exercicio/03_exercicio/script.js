// Crie uma classe que simula um endereço de um cliente;
// Propriedades da classe: Rua, Bairro, Cidade e Estado;
// No "construtor" o endereço deve ser definido por completo;
// Crie métodos para atualizar as propriedades;

class Address {
  constructor(street, district, city, state) {
    this.street = street;
    this.district = district;
    this.city = city;
    this.state = state;
  }

  set streetAtt(streetAtt) {
    this.street = streetAtt;
  }

  set districtAtt(districtAtt) {
    this.district = districtAtt;
  }

  set cityAtt(cityAtt) {
    this.city = cityAtt;
  }

  set stateAtt(stateAtt) {
    this.state = stateAtt;
  }
}

let addressOne = new Address(
  "Bartolomeu de Gusmão",
  "Sobradinho",
  "Feira de Santana",
  "Bahia"
);

console.log(addressOne);

addressOne.streetAtt = "Rua Rio Verde";

console.log(addressOne);
