// Cria o elemento de tag "p"
let newElement = document.createElement("p");
// Adiciona ao elemento de tag "p" o texto "Algum texto"
let text = document.createTextNode("Algum texto");
// Integra o newElement com text
newElement.appendChild(text);

// Seleciona o elemento de id "#paragrafo-principal"
let p = document.querySelector("#paragrafo-principal");
// Integra o id selecionado
let principal = p.parentNode;
// Adiciona após o elemento selecionado o "newElement" com o "text"
principal.appendChild(newElement);
