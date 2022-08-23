let consoleTeste = () => {
  console.log("Teste");
};

consoleTeste();

let myName = (name) => {
  console.log(name);
};

myName("Julian Andrade");

// Arrow Function Resumida
// Quando temos uma única linha de código, podemos resumir ainda mais a Arrow Function

const multiplicarPorDois = (x) => {
  return x * 2;
};

console.log(multiplicarPorDois(2));

const multiplicarPorDois2 = (x) => x * 2;

console.log(multiplicarPorDois2(4));
