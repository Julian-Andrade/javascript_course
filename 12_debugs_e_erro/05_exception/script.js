function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("O parâmetro nome precisar ser uma string.");
  } else {
    console.log(`Olá ${nome}.`);
  }
}

saudacao("Julian");
