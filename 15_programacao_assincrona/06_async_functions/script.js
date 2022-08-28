// Podemos criar funções assíncronas com a palavra reservada async
// Elas retornam uma Promise, pois podemos utilizar os comandos da Promise junto a ela, "then", "catch"
// Se retornar algo a promessa é resolvida, se der algum erro ela é rejeitada

async function somar(a, b) {
  return a + b;
}

somar(2, 5)
  .then(function (value) {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
