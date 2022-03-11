/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
//  */

// ============================== OPCAO 1 ====================================================

// console.log("Boas vindas ao jogo de Blackjack!");
// //const carta = comprarCarta();

// const confirma = confirm("Quer iniciar uma nova rodada de Blackjack?");

// if (confirma == true) {
//   const user1 = comprarCarta();
//   const user2 = comprarCarta();

//   const comp1 = comprarCarta();
//   const comp2 = comprarCarta();

//   const userCards = user1.valor + user2.valor;
//   const compCards = comp1.valor + comp2.valor;

//   console.log(
//     `Cartas do usuario: ${user1.texto} ${user2.texto} - pontuacao ${userCards}`
//   );
//   console.log(
//     `Cartas do computador: ${comp1.texto} ${comp2.texto} - pontuacao ${compCards}`
//   );

//   if (userCards > compCards) {
//     console.log("Parabens, voce venceu!!");
//   } else if (userCards === compCards) {
//     console.log("Deu empate!!");
//   } else {
//     console.log("Que pena! O computador venceu!!");
//   }
// }
// if (confirma === false) {
//   console.log("O jogo acabou!!");
// }

// ============================== OPCAO 2 ====================================================

// console.log("Boas vindas ao jogo blackjack");

// const confirma = confirm("Quer iniciar uma nova rodada?");

// const jogador1 = comprarCarta();
// const jogador2 = comprarCarta();
// const computador1 = comprarCarta();
// const computador2 = comprarCarta();

// const userCards = jogador1.valor + jogador2.valor;
// const compCards = computador1.valor + computador2.valor;

// const game = (j1, j2, c1, c2) => {
//   if (confirma === true) {
//     console.log(`Usuario  - cartas: ${j1} ${j2}`);
//     console.log(`Computador - cartas: ${c1} ${c2}`);
//     if (userCards > compCards) {
//       console.log("Parabens, voce venceu!!");
//     } else if (userCards === compCards) {
//       console.log("Deu empate!!");
//     } else {
//       console.log("Que pena! O computador venceu!!");
//     }
//   } else {
//     console.log("bye bye jogo");
//   }
// };
// game(jogador1.texto, jogador2.texto, computador1.texto, computador2.texto);
