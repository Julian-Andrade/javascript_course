// Async functions podemos determinar uma instrução await;
// Await => esper uma promise ser resolvida para apresentar os resultados;

function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b);
    }, 4000);
  });
}

async function soma(a, b, c, d) {
  let x = somaComDelay(a, b);
  let y = somaComDelay(c, d);

  return (await x) + (await y);
}

soma(2, 4, 6, 8).then((y) => console.log(y));
