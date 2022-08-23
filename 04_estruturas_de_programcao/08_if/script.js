let idade = 19;
if (idade == 19) {
  console.log(`A idade é ${idade}`);
}

if (idade > 25) {
  console.log("A idade é maior que 25");
}

let name = "Matheus";
if (name == "Matheus" && idade > 10) {
  console.log("Liberado");
}

let passaporte = true;
if ((name == "Matheus" && idade > 30) || passaporte == true) {
  console.log(`Liberado!`);
}
