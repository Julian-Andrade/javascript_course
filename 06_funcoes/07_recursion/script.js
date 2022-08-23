// Funcionalidade que permite uma função se chamar novamente;
// Não utilizar este recurso para chamar a função muitas vezes;

function recursao(n) {
  if (n - 1 < 2) {
    console.log(`Recursão parou!`);
  } else if (n % 2 != 0) {
    console.log(`Número Ímpar ${n}`);
    recursao(n - 1);
  } else {
    console.log(`Número Par ${n}`);
    recursao(n - 2);
  }
}

recursao(4);
recursao(39);
recursao(10);
recursao(55);
