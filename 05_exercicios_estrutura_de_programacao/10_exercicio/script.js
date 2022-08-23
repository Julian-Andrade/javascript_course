// Verifique se o número é Primo!
// Número Primo = número natural, maior que 01 e apenas divisível por si próprio e por 1

let num = 7; // Dividendo
let div = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    div++;
  }
}

if (div == 2) {
  console.log(`O número ${num} primo e possui ${div} divisores.`);
} else {
  console.log(`O número ${num} não é primo e possui ${div} divisores.`);
}
