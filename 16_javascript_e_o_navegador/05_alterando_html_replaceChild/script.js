let newElement = document.createElement("p");
let text = document.createTextNode("Algum Texto");

newElement.appendChild(text);

let heading = document.querySelector("#titulo-principal");
let principalHeading = heading.parentNode;

principalHeading.replaceChild(newElement, heading);
