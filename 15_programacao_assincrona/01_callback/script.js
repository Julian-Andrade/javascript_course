// Assincrono => Quando acontece sem depender de sicronia
// Conseguimos trabalhar com ações que podem ser executadas ao tempo todo sem uma "fila"

// Exemplo:
// O usuário em um checkout de e-commerce consegue modificar o seu endereço sem precisar voltar a página de endereço.
// Esses tipos de recursos são chamados de Ajax, quando algo é solicitado do backend sem recarregar a página.

console.log("1");

setTimeout(function () {
  console.log("5");
}, 2000);

console.log("2")
console.log("3")
console.log("4")
