// Exercícios de interpretação de código

// 1 -

// O codigo abaixo ira mostrar o valor = 10, pois na hora de
// passar os valores menores que 5 ele ira somar os 4 valores anteriores,
// sendo eles 4+3+2+1 (=10)

// ====================================================================================================//

// 2 -

// a) Sera impresso os numeros :  19, 21, 23, 25, 27, 30
// b) Nao seria suficiente, teria que usar o for apenas

// ====================================================================================================//

// 3 -

// Resultado sera 4 linhas com asteriscos < 4, entao (*/**/***/****)

// ====================================================================================================//

// SE O USUARIO DIGITAR 'V', A SAIDA DEVE SER:

// const quantidadeTotal = prompt("Digite a quantidade de linhas: ");
// let quantidadeAtual = 0;
// if (quantidadeTotal === "V") {
//   console.log("Boa Tarde!");
// }
// while (quantidadeAtual < quantidadeTotal) {
//   let linha = "";
//   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//     linha += "*";
//   }

//   console.log(linha);
//   quantidadeAtual++;
// }

// ====================================================================================================//

// Exercícios de escrita de código

// 1-

let bichinhos = Number(prompt("quantos bichinhos vc tem?"));
let nomeDosBichos = [];
if (bichinhos === 0) {
  console.log("Que pena! Voce pode adotar um pet");
} else if (bichinhos > 0) {
  for (let i = 0; i < bichinhos; i++) {
    let nomesPet = prompt("Qual nome deles?");
    nomeDosBichos.push(nomesPet);
  }
  console.log(`O nome dos bichinhos sao: ${nomeDosBichos}`);
}

// ====================================================================================================//

// 2-
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// A-
function imprimeArrayOriginal(arrayNova) {
  for (newArray of arrayOriginal) {
  }
  console.log(arrayNova);
}
imprimeArrayOriginal(arrayOriginal);

// ====================================================================================================//

// B-
function valoresDivididos(arrayDiv) {
  const novoArray1 = [];
  for (let numero of arrayDiv) {
    novoArray1.push(numero / 10);
  }
  return novoArray1;
}
console.log(valoresDivididos(arrayOriginal));
// ====================================================================================================//

// C -
function somenteNumerosPares(arrayPar) {
  let novoArray = [];
  for (novo of arrayPar) {
    if (novo % 2 === 0) {
      novoArray.push(novo);
    }
  }
  console.log(novoArray);
}
somenteNumerosPares(arrayOriginal);

// ====================================================================================================//

// D -
function novaFuncao(array) {
  let numero = [];
  for (let index = 0; index < arrayOriginal.length; index++) {
    const outroNumero = array[index];
    numero.push(`O elemento do index ${index} é ${outroNumero}`);
  }
  console.log(numero);
}
novaFuncao(arrayOriginal);

// ====================================================================================================//

// E-

let maiorNum = 0;
let menorNum = 0;
function mostrarMaiorMenor(array) {
  for (let num = 0; num < array.length; num++) {
    if (array[num] > maiorNum) {
      maiorNum = array[num];
    } else {
      menorNum = array[num];
    }
  }
  console.log(`O maior eh: ${maiorNum}, O menor valor eh: ${menorNum}`);
}

mostrarMaiorMenor(arrayOriginal);
//console.log(resultado);
// ====================================================================================================//
