window.addEventListener("load", () => {
  alert("Assine os nossos termos de uso!");
});

// Depreciado!
window.addEventListener("beforeunload", (e) => {
  event.returnValue = null;
});
