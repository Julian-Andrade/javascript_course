// Generators funcionam semelhantes as Promises;
// As ações podem ser pausadas e continuadas depois;
// São caracterizados pelo function* e yield;
// O "yeld" pode salvar o estado da variável;

function* criadorId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

let criarId = criadorId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
