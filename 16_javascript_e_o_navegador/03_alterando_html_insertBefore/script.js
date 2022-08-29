let newElement = document.createElement("p");
let targetElement = document.querySelector("#titulo-principal");
let principalElement = document.querySelector("#container-principal");

principalElement.insertBefore(newElement, targetElement);
