let nomes = ["Matheus", "Maria", "José"];

console.log(nomes);

let deleteFirstName = nomes.shift(); // Retira um dado do início do array.

console.log(deleteFirstName); // Imprime o dado retiado com pop();
console.log(nomes);

nomes.unshift("Julian"); // Adiciona um novo dado no início do array.

console.log(nomes);

// Outro Exemplo

let cars = ["Audi", "BMW", "Volkswagen", "Fiat", "Peugeot"];

let deleteFirstCar = cars.shift();

console.log(cars);
console.log(deleteFirstCar);

let addFirstCar = cars.unshift("Toyota");

console.log(cars);

let addLastCar = cars.push(deleteFirstCar);

console.log(cars);
