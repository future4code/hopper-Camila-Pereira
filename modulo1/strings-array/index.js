//Exercícios de interpretação de código

/*

1-

let array;
console.log('a. ', array) // a. erro

array = null
console.log('b. ', array) // b. invalido

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array)// e. 19

const valor = array[i+6]
console.log('f. ', valor) //f. 9

2-

SUBI NUM ONIBUS EM MIRROCOS 27
*/

//======================================================================//

// Exercícios de escrita de código 

// 1

const seuNome = prompt("Digite seu nome")
const emailUsusario = prompt("Digite seu email")
console.log(`O e-mail ${emailUsusario} foi cadastrado com sucesso. 
Seja bem-vinda(o), ${seuNome}!`)

//2

const listaComida = ["bolo", "bis", "pasta", "pizza", "danone"]

console.log(listaComida)
console.log("Essas sao minhas comidas favoritas:",'\n' ,listaComida[0], '\n',listaComida[1], '\n', listaComida[2], '\n', listaComida[3], '\n', listaComida[4])
console.log(`Essas sao minhas comidas favoritas:",
${listaComida[0]}, 
${listaComida[1]}`)
const favfood = prompt("qual sua comida preferida")

listaComida.splice(1, 1, favfood)

console.log(listaComida)

//3

const listaDeTarefas = []
const perguntaUm = prompt("Fale 1 tarefa que voce precisa realizar hoje")
const perguntaDois = prompt("Fale mais 1 tarefa que voce precisa realizar hoje")
const perguntaTres = prompt("Fale outra tarefa que voce precisa realizar hoje")
listaDeTarefas[0] = perguntaUm
listaDeTarefas[1] = perguntaDois
listaDeTarefas[2] = perguntaTres

console.log(listaDeTarefas)

let usuario = prompt("Digite qual tarefa voce ja fez, 1, 2 ou 3?")
listaDeTarefas.splice(usuario-1, 1)
console.log(listaDeTarefas)








