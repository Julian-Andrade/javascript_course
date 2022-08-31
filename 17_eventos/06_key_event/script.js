window.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    console.log("Apertou a letra q.");
  } else if (e.key == "Enter") {
    console.log("Apertou o enter.");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    console.log("Soltou o enter.");
  }
});
