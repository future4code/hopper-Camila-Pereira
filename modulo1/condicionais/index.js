// Exercícios de interpretação de código

// 1-
/*

======================================================================================
a)

O codigo pergunta ao usuario o numero, em seguida transforma string em Number,
... Se o numero der resto zero e' exibido"passou no teste", caso o numero nao seja resto zero 
... entao sera exibido "Nao passou no teste"

b)

O modulo retorna o inteiro restante da divisão dos dois operandos, entao todos os numeros pares

c)

todos os numeros impares

======================================================================================

// 2-

a) o codigo serve para mostrar o preco das frutas de acordo com o que o cliente pergunta

b) O preço da fruta Maçã é R$2.25

c) Ele cai direto no default que sera R$ 5


======================================================================================

// 3-

a) A primeira linha esta perguntando ao usuario um numero e transformando essa string em numero

b) Se o usuario digitar 10 a mensagem exibida sera" Esse número passou no teste".
... Caso usuario digite -10 dara um erro pois a variavel mensagem so pode ser lida dentro do if()

c) a variavel mensagem tem que ser criada apos o fechamento de chaves do if, para ser um opcao caso 
... caso o numero seja menor que zero.

======================================================================================
*/

// Exercícios de escrita de código

// 1-

let idade = Number(prompt("Qual sua idade?"));

if (idade >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir.");
}

// ======================================================================================

// 2 -

let nome = prompt(
  "Digite seu turno => M (matutino) ou V (Vespertino) ou N (Noturno)"
);

if (nome == "M") {
  console.log("Bom Dia!");
} else if (nome == "V") {
  console.log("Boa Tarde!");
} else if (nome == "N") {
  console.log("Boa Noite!");
}

// ======================================================================================

//3 -

let turno = prompt(
  "Digite seu turno => M (matutino) ou V (Vespertino) ou N (Noturno)"
);
switch (turno.toUpperCase()) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("BoaTarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
  default:
    console.log("turno nao encontrado");
    break;
}

// ======================================================================================

// 4-

let generoDoFilme = prompt("qual o gênero de filme que vão assistir?");
let precoDoIngresso = prompt("Qual preco do ingresso que conseguem pagar?");
let amigo;

if (generoDoFilme == "fantasia" && precoDoIngresso <= 15) {
  console.log("Bom Filme!");
} else {
  console.log("Escolha outro filme :(");
}

// ======================================================================================

// Desafio 1

let generoDoFilme = prompt("qual o gênero de filme que vão assistir?");
let precoDoIngresso = prompt("Qual preco do ingresso que conseguem pagar?");
let lanchinho;

if (generoDoFilme == "fantasia" && precoDoIngresso <= 15) {
  let lanchinho = prompt("Qual snack que voce que comprar?");
  console.log("Bom filme!");
  console.log(`Aproveite o seu ${lanchinho}`);
} else {
  console.log("Escolha outro filme :(");
}

// ======================================================================================

// Desafio 2

let nomeCompleto = prompt("Qual seu nome completo?");
let tipoDeJogo = prompt(
  "Qual tipo de jogo? Digite IN para internacional ou DO para domestico"
);
let etapaDeJogo = prompt(
  "Qual etapa do jogo? Digite SF para semi-final, DT para decisao de terceiro lugar ou FI para etapa final"
);
let categoria = Number(prompt("Qual categoria? 1, 2, 3 ou 4?"));
let ingresso = Number(prompt("Qual quantidade de ingressos?"));

let tipoDeJogoIN, etapaDeJogo2, valorDoIngresso;

let domestico = {
  cat1: [(sf1 = 1320), (dt1 = 660), (fi1 = 1980)],

  cat2: [(sf2 = 880), (dt2 = 440), (fi2 = 1320)],

  cat3: [(sf3 = 550), (dt3 = 330), (fi3 = 880)],

  cat4: [(sf4 = 220), (dt4 = 170), (fi4 = 330)],
};

if (etapaDeJogo == "sf" && categoria == 1) {
  valorDoIngresso = domestico.cat1[0];
} else if (etapaDeJogo == "dt" && categoria == 1) {
  valorDoIngresso = domestico.cat1[1];
} else if (etapaDeJogo == "fi" && categoria == 1) {
  valorDoIngresso = domestico.cat1[2];
} else if (etapaDeJogo == "sf" && categoria == 2) {
  valorDoIngresso = domestico.cat2[0];
} else if (etapaDeJogo == "dt" && categoria == 2) {
  valorDoIngresso = domestico.cat2[1];
} else if (etapaDeJogo == "fi" && categoria == 2) {
  valorDoIngresso = domestico.cat2[2];
} else if (etapaDeJogo == "sf" && categoria == 3) {
  valorDoIngresso = domestico.cat3[0];
} else if (etapaDeJogo == "dt" && categoria == 3) {
  valorDoIngresso = domestico.cat3[1];
} else if (etapaDeJogo == "fi" && categoria == 3) {
  valorDoIngresso = domestico.cat3[2];
} else if (etapaDeJogo == "sf" && categoria == 4) {
  valorDoIngresso = domestico.cat4[0];
} else if (etapaDeJogo == "dt" && categoria == 4) {
  valorDoIngresso = domestico.cat4[1];
} else if (etapaDeJogo == "fi" && categoria == 4) {
  valorDoIngresso = domestico.cat4[2];
}

let valorTotal = ingresso * valorDoIngresso;

switch (tipoDeJogo.toLowerCase()) {
  case "in":
    tipoDeJogoIN = "Internacional";
    break;
  case "do":
    tipoDeJogoIN = "Domestico";
    break;
}

switch (etapaDeJogo.toLowerCase()) {
  case "sf":
    etapaDeJogo2 = "Semi-Final";
    break;
  case "dt":
    etapaDeJogo2 = "Decisao do Terceiro Lugar";
    break;
  case "fi":
    etapaDeJogo2 = "Etapa Final";
}
if (tipoDeJogo == "do") {
  console.log(" ---Dados da compra--- ");
  console.log(`Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${tipoDeJogoIN}
Etapa do jogo: ${etapaDeJogo2}
Categoria: ${categoria}
Quantidade de ingresso: ${ingresso} ingressos`);
  console.log(" ---Valores---");
  console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
  console.log(` Valor Total : R$ ${valorTotal}`);
} else if (tipoDeJogo == "in") {
  console.log(" ---Dados da compra--- ");
  console.log(`Nome do cliente: ${nomeCompleto}
  Tipo do jogo: ${tipoDeJogoIN}
  Etapa do jogo: ${etapaDeJogo2}
  Categoria: ${categoria}
  Quantidade de ingresso: ${ingresso} ingressos`);
  console.log(" ---Valores---");
  console.log(` Valor do ingresso: R$ ${valorDoIngresso * 4.1}`);
  console.log(` Valor Total : R$ ${valorTotal * 4.1}`);
}
