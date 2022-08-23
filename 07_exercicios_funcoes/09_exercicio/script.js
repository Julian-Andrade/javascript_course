function twoNumbersResult(x, y) {
  return Math.pow(x, y);
}

console.log(twoNumbersResult(2, 2));
console.log(twoNumbersResult(4, 5));
console.log(twoNumbersResult(7, 3));

// Outra maneira

function twoNumbersPotency(x, y) {
  if (x > 0 && y > 0) {
    return x ** y;
  } else {
    console.log("É necessário preencher todos os campos!");
  }
}

console.log(twoNumbersPotency(2,2))
console.log(twoNumbersPotency(5,5))