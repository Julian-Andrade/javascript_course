let numbers = [0, 1, 2, 3, 4, 5];

console.log(numbers.slice(2, 3)); // Retorna a partir do índice 2 até o índice 3.
console.log(numbers.slice(3)); // Retorna a partir do índice 3.

let peoples = ["Julian", "Matheus", "Lucas", "Pedro", "Gabriel", "João"];

console.log(peoples.slice(2, 3));
console.log(peoples.slice(4));
console.log(peoples.slice(-4)); // Números negativos, decrementa o Array.
console.log(peoples.slice(2, -1));
