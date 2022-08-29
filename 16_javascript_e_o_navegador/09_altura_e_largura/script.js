let element = document.querySelector("#titulo-principal");

// Considerando as Bordas
console.log("largura: " + element.offsetWidth);
console.log("altura: " + element.offsetHeight);

// Desconsiderando as Bordas
console.log("largura: " + element.clientWidth);
console.log("altura: " + element.clientHeight);
