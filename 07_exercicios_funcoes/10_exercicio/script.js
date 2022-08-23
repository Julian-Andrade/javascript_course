function parOrImpar(n) {
  while (n > 0) {
    if (n % 2 == 0) {
      console.log(`O número ${n} é par.`);
      n--;
    } else {
      console.log(`O número ${n} não é par.`);
      n--;
    }
  }
}

parOrImpar(100);

// Outra maneira

function printPar(num) {
  for (i = num; num >= 0; num--) {
    if (num % 2 == 0) {
      console.log(`Número ${num} par.`);
    }
  }
}

printPar(5)