//========================================================================================================

// Exercícios de interpretação de código

// 1-

// a) tera 3 objetos/ 3 array [0], [1], [2]

// b) tera 1 array com 3 nomes

// c) tera 1 array com 2 objetos  (diferentes de Chijo)

//========================================================================================================

// Exercícios de escrita de código

// 1-

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a)

const apenasNomes = pets.map((nomes) => nomes.nome);
console.log(apenasNomes);

//b

const apenasSalsicha = pets.filter(
  (salsichinha) => salsichinha.raca === "Salsicha"
);
console.log(apenasSalsicha);

//c

const poodles = pets.filter((cachorro) => cachorro.raca === "Poodle");
const pegarNome = (item) => {
  return item.nome;
};
const mensagemParaPoodles = pets.map((item) => {
  if (item.raca === "Poodle") {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`;
  } else {
    return item.nome;
  }
});
console.log(mensagemParaPoodles);

//========================================================================================================

// 2-

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a)

const nomeDeCadaItem = produtos.map((nomes) => nomes.nome);
console.log(nomeDeCadaItem);

// b)

const precoEDesc = produtos.map((item, index, array) => {
  return {
    nome: item.nome,
    preco: (item.preco - item.preco * 0.05).toFixed(2),
  };
});
console.log(precoEDesc);

// c)

const apenasBebidas = produtos.filter(
  (bebida) => bebida.categoria === "Bebidas"
);
console.log(apenasBebidas);

// d)

const objetos = produtos.filter((ype) => {
  if (ype.nome.includes("Ypê")) {
    return ype;
  }
});
console.log(objetos);

// e)

const compreYpe = produtos
  .filter((item) => item.nome.includes("Ypê"))
  .map((item) => `Compre ${item.nome} por ${item.preco}!`);
console.log(compreYpe);
