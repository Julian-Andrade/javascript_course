let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg() {
  console.log("Clicou em mim!");
}

btn.addEventListener("click", msg);

btn2.addEventListener("click", () => {
  btn.removeEventListener("click", msg);
});
