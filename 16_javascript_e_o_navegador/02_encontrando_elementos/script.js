// Encontrando pela "TAG"
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("li"));

// Encontrando pelo "ID"
console.log(document.getElementById("titulo-principal"));

// Encontrando pela "CLASS"
console.log(document.getElementsByClassName("item-azul"));
console.log(document.getElementsByClassName("item-vermelho"));
console.log(document.getElementsByClassName("itens"));

// Encontrando pela "QUERY"
console.log(document.querySelector("#titulo-principal")); // ID
console.log(document.querySelector("#container h1")); // DIV => H1
console.log(document.querySelector(".itens")); // CLASSE
console.log(document.querySelector("h1")); // TAG
console.log(document.querySelector("div p")); // DIV => P
