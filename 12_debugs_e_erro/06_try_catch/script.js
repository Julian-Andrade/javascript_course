// let b = 2;

try {
  let a = 2 + b;
  console.log(a);
} catch (error) {
  // throw new Error("O parâmetro não foi definido.");
  console.log(error);
}

console.log("TESTE");
// TryCatch não para o programa por causa do erro
// Porém se utilizamos um "throw new Error("error"), o programa irá parar.
