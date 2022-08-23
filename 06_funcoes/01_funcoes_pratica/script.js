function imprimirNoConsole() {
  console.log(`Hello World`);
}

imprimirNoConsole();

function somaNoConsole(x, y) {
  console.log(`A soma de ${x} + ${y} é: ${x + y}`);
}

somaNoConsole(5, 10);

const aleatoryNumber = function () {
  console.log(Math.random());
};

aleatoryNumber();
aleatoryNumber();

const aleatoryNumberArrowFunction = () => {
  console.log(Math.random());
};

aleatoryNumber();
aleatoryNumber();
