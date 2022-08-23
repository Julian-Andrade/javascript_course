let pessoa = {
  nome: "Matheus",
  idade: 29,
  profissao: "Programador",
};

console.log(pessoa.nome);

delete pessoa.nome; // Deleta propriedade

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = false; // Adiciona propriedade

console.log(pessoa);
