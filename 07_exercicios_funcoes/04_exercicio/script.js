function getNumberRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getNumberRandom(5, 10));
console.log(getNumberRandom(10, 100));
console.log(getNumberRandom(100, 1000));
