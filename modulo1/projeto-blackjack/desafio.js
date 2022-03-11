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

// const exibirCartas = () => {
//   const user1 = comprarCarta();
//   const user2 = comprarCarta();
//   const user3 = comprarCarta();
//   const userCards = user1.valor + user2.valor;

//   const comp1 = comprarCarta();
//   const comp2 = comprarCarta();
//   const compCards = comp1.valor + comp2.valor;

//   return [user1, user2, user3, comp1, comp2, userCards, compCards];
// };

// const continuar = (
//   msg = "Bem vindo ao jogo de blackjack!!\n Quer iniciar uma nova rodada?"
// ) => {
//   const embaralhaNovamenteUser = [];
//   const embaralhaNovamentePc = [];

//   if (confirm(msg)) {
//     const [userCards, compCards, user1, user3, user2, comp1, comp2] =
//       mostrarMsg();

//     embaralhaNovamenteUser.push(user1.texto, user2.texto);
//     embaralhaNovamentePc.push(comp1.texto, comp2.texto);

// // Se as cartas forem iguais A's

//     if (userCards === 22 || compCards === 22) {
//       if (confirm("Suas cartas vieram iguais, vamos sortear novamente?")) {
//         continuar();
//       } else {
//         alert("Nao foi dessa vez!!");
//         return;
//       }
//     }
// // cartas usuario menores que 21

//     while (userCards < 21) {
//       alert(
//         `Suas cartas sao ${user1.texto} ${user2.texto}. A carta revelada do computador e ${comp1.texto}. Deseja comprar mais uma carta?`
//       );
//       if (userCards > 21) {  alert(
//          `Suas cartas sao ${user1.texto} ${user2.texto} ${user3.texto}. A carta revelada do computador e ${comp1.texto}. Deseja comprar mais uma carta?`
//        );

//       } else {  alert(
//          `Usuario - cartas : ${user1.texto} ${user2.texto} ${user3.texto} - Pontuacao: ${userCards} Computador - cartas : ${comp1.texto} ${comp2.texto}.  - Pontuacao: ${compCards} `
//        );
//       }
//     }
//   }
// };

// // confirm(
// //   `Suas cartas sao ${user1.texto} ${user2.texto}. A carta revelada do computador e ${comp1.texto}. Deseja comprar mais uma carta?`
// // );

// // Se as duas cartas iniciais
// // do usuário ou do computador forem dois ases (A),
// // as cartas devem ser sorteadas novamente.

// // const cartasJogadores = [];
// // const cartaXX = {};

// // if (confirma === true) {
// //   confirm(
// //     `Suas cartas sao ${user1.texto} ${user2.texto}. A carta revelada do computador e ${comp1.texto}. Deseja comprar mais uma carta?`
// //   );
// // } else if (confirma)
// //   alert(
// //     `Usuario - cartas : ${user1.texto} ${user2.texto} ${user3.texto} - Pontuacao: ${userCards} Computador - cartas : ${comp1.texto} ${comp2.texto}.  - Pontuacao: ${compCards} `
// //   );
// // else if (confirma === false) {
// //   alert("O jogo acabou");
// // }
// // monstrarmsg();

// // const userCards = user1.valor + user2.valor + user3.valor;
// //   const compCards = comp1.valor + comp2.valor;

// //   return [user1, user2, user3, comp1, comp2, userCards, compCards];

let continuar = confirm(
  "Boas vindas ao jogo de Blackjack!\nDeseja iniciar uma Nova Rodada ?"
);

//arrays para armazenar os valores e os naipes
let cartasUserValor = [];
let cartasUserNaipe = [];
let cartasPcValor = [];
let cartasPcNaipe = [];

//variaveis globais para atualizar o valor
let totalUser2 = 0;
let totalPc = 0;

//primeira condição
if (continuar) {
  exibirCartas();
} else {
  confirm("o Jogo Acabou !");
  exibiResultado();
}

// se ok no confirm chama essa function
function exibirCartas() {
  carta1 = comprarCarta();
  carta2 = comprarCarta();
  carta3 = comprarCarta();
  carta4 = comprarCarta();

  let afirmacao = confirm(
    `Suas Cartas São: ${carta1.texto} ${carta2.texto}, A Carta revelada do computador é ${carta3.texto}\n Deseja comprar mais uma carta ?`
  );
  //verifica se as primeiras cartas sairam com 2 A's = 21 , se sim sorteia novamente
  if (
    (carta1.valor && carta2.valor == 11) ||
    (carta3.valor && carta4.valor == 11)
  ) {
    afirmacao;
  }
  //se pedir mais uma carta joga os valores no array e continua
  if (afirmacao == true) {
    cartasUserValor.push(carta1.valor, carta2.valor);
    cartasUserNaipe.push(carta1.texto, carta2.texto);
    cartasPcValor.push(carta3.valor, carta4.valor);
    cartasPcNaipe.push(carta3.texto, carta4.texto);
  } else {
    // se clicar em cancelar armazena os valores e chama o resultado
    cartasUserValor.push(carta1.valor, carta2.valor);
    cartasUserNaipe.push(carta1.texto, carta2.texto);
    cartasPcValor.push(carta3.valor, carta4.valor);
    cartasPcNaipe.push(carta3.texto, carta4.texto);
    exibiResultado();
  }

  //variaveis criadas para armazenar o valor dos confirms
  let validar;
  let validar1;
  let validar2;

  if (afirmacao == true) {
    //se os numeros forem maiores ou igual a 21 chama o resultado
    if (totalUser2 || totalPc >= 21) {
      exibiResultado();
    } else {
      carta5 = comprarCarta();
      carta7 = comprarCarta();
      cartasUserValor.push(carta5.valor);
      cartasUserNaipe.push(carta5.texto);
      cartasPcValor.push(carta7.valor);
      cartasPcNaipe.push(carta7.texto);
      validar = +confirm(
        `Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${carta5.texto} A Carta revelada do computador é ${carta7.texto}\n Deseja comprar mais uma carta ?`
      );
    }
  }
  //se clicar em cancelar chama o resultado se não continua o programa
  if (validar == 0) {
    exibiResultado();
  } else if (validar == 1) {
    //atualiza os valores que contem as pontuações
    atualizarValorTotal();
    //se for maior ou igual a 21 para se não continua
    if (totalUser2 >= 21) {
      exibiResultado();
    } else {
      carta6 = comprarCarta();
      carta7 = comprarCarta();
      validar1 = +confirm(
        `Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${cartasUserNaipe[2]}, ${carta6.texto} A Carta revelada do computador é ${carta7.texto}\n Deseja comprar mais uma carta ?`
      );
      cartasUserValor.push(carta6.valor);
      cartasUserNaipe.push(carta6.texto);
      cartasPcValor.push(carta7.valor);
      cartasPcNaipe.push(carta7.texto);
    }
  }
  if (validar1 == 0) {
    exibiResultado();
  } else if (validar1 == 1) {
    atualizarValorTotal();
    if (totalUser2 >= 21) {
      exibiResultado();
    } else {
      carta8 = comprarCarta();
      carta9 = comprarCarta();
      validar2 = +confirm(
        `Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${cartasUserNaipe[2]}, ${cartasUserNaipe[3]}, ${carta8.texto} A Carta revelada do computador é ${carta9.texto}\n Deseja comprar mais uma carta ?`
      );
      cartasUserValor.push(carta8.valor);
      cartasUserNaipe.push(carta8.texto);
      cartasPcValor.push(carta9.valor);
      cartasPcNaipe.push(carta9.texto);
    }
  }
  if (validar2 == 0) {
    exibiResultado();
  } else if (validar2 == 1) {
    atualizarValorTotal();
    if (totalUser2 >= 21) {
      exibiResultado();
    } else {
      carta10 = comprarCarta();
      carta11 = comprarCarta();
      confirm(
        `Suas Cartas São: ${cartasUserNaipe[0]}, ${cartasUserNaipe[1]}, ${cartasUserNaipe[2]}, ${cartasUserNaipe[3]}, ${cartasUserNaipe[4]}, ${carta10.texto} A Carta revelada do computador é ${carta11.texto}\n Deseja comprar mais uma carta ?`
      );
      cartasUserValor.push(carta10.valor);
      cartasUserNaipe.push(carta10.texto);
      cartasPcValor.push(carta11.valor);
      cartasPcNaipe.push(carta11.texto);
    }
  }
}

function exibiResultado() {
  //função que exibi o resultado
  atualizarValorTotal();

  let mensagem;

  if (
    (totalUser2 > 21 && totalPc <= 21) ||
    (totalUser2 < 21 && totalPc == 21)
  ) {
    mensagem = "O Computador Ganhou !";
  } else if (
    (totalPc > 21 && totalUser2 <= 21) ||
    (totalPc < 21 && totalUser2 == 21)
  ) {
    mensagem = "Você Ganhou !!";
  } else if (totalUser2 == 0 && totalPc == 0) {
    mensagem = "Você não quis jogar =/";
  } else if (totalUser2 == totalPc && totalUser2 && totalPc !== 0) {
    mensagem = "Empate !!";
  } else {
    mensagem = "Ninguem Ganhou =(";
  }
  alert(`O Jogo Terminou !
 Usuario - Cartas: ${cartasUserNaipe} - Pontuação ${totalUser2}
 Computador - Cartas: ${cartasPcNaipe} - Pontuação ${totalPc}
 ${mensagem}`);
}

function atualizarValorTotal() {
  totalUser2 = 0;
  totalPc = 0;
  for (let i in cartasUserValor) {
    totalUser2 += cartasUserValor[i];
  }
  for (let i in cartasPcValor) {
    totalPc += cartasPcValor[i];
  }
  return totalUser2, totalPc;
}
