// JSON = JavaScript Object Notation
// Utilizado para comunicação entre serviços => backend - frontend

// JSON so aceita aspas duplas ""
// JSON não aceita comentários

// Estrutura Básica em JSON
// {
//     "name": "Matheus",
//     "age": 29,
//     "position": "Developer",
//     "languages": ["PHP", "JavaScript", "Python"]
// }

let pessoa = {
  "name": "Julian Andrade",
  "idade": 31,
  "position": "Engenheiro Civil",
};

console.log(pessoa.name);
console.log(pessoa.idade);

// Convertendo JSON para String
// Necessário conversão de JSON para JavaScript afim de usá-lo na homepage

const car = {
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
}

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson)