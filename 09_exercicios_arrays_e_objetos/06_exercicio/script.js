let arr = [1, 2, 3, 4, 5, 6];

let arr1 = [6, 7, 8, 9];

// Este método funciona, porém, se tivessemos uma grande quantidade de arrays a ser verificada, não funcionaria!
const verifyElements = () => {
  if (arr.length || arr1.length >= 5) {
    console.log(`Possui muitos elementos!`);
  } else {
    console.log(`Possui poucos elementos!`);
  }
};

verifyElements();

// Outra maneira

const verifyArrays = (arr) => {
  if (arr.length >= 5) {
    console.log(`Possui muitos elementos!`);
  } else {
    console.log(`Possui poucos elementos!`);
  }
};

verifyArrays(arr);
verifyArrays(arr1);
