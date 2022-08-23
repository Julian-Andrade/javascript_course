let array = ["Julian", "Matheus", "Pedro", "João", "Guilherme"];

const arrayIncludes = () => {
  if (array.includes("Julian")) {
    console.log(`Existe o nome ${array[0]} no array.`);
  } else {
    console.log(`Este nome não existe.`);
  }
};

arrayIncludes();
