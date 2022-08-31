let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let submit = document.querySelector("#submit");

function msg(e) {
  console.log("clicou em mim!");
  e.stopPropagation(); // Evita de executar dois eventos ao mesmo tempo!
}

btn.addEventListener("click", msg);

btn2.addEventListener("click", (e) => {
  console.log(e);
});

p.addEventListener("click", () => {
  console.log("clicou no parágrafo!");
});

// Evento default do submit é enviar o formulário e recarregar a página
// e.preventDefault() impede dele executar este evento default
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("O formulário não foi enviado!");
});
