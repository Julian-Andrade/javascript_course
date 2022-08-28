// let b = 2;

try {
  let a = 2 + b;
  console.log(a);
} catch (error) {
  // throw new Error("O parâmetro não foi definido.");
  console.log(error);
} finally {
  // o finally irá executar alguma ação mesmo que aconteca o try ou o catch;
  console.log("Executou");
}

console.log("teste");
