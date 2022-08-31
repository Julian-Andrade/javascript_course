let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e) {
  console.log("Clicou em mim!");
  e.stopPropagation(); // Evita de executar dois eventos ao mesmo tempo!
}

btn.addEventListener("click", msg);

btn2.addEventListener("click", (e) => {
  console.log(e);
});

p.addEventListener("click", () => {
  console.log("clicou no parágrafo!");
});
