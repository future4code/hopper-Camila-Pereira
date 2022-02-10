 
// aula de variaveis !!
//---------------------------------------------//
// 1

/*let a = 10
let b = 10
console.log(b) // sera exibido (10)
b = 5
console.log(a, b) // sera exibido (10, 5)
*/
//--------------------------------------------//
// 2

//let a = 10
//let b = 20
//c = a //10
//b = c //10
//a = b //10

//console.log(a, b, c) // sera exibido (10, 10, 10)

//---------------------------------------------//
//3

//let horasTrabalho = Number(prompt("Quantas horas voce trabalha por dia?"))
//let salarioDia = Number(prompt("Quanto voce recebe por dia?"))
//alert(`Voce recebe ${salarioDia/horasTrabalho} por hora`) 

//----------------------------------------------//
// exercicio de escrita 
// 1

let seuNome = "Nome"
let suaIdade = 12
console.log( typeof seuNome, typeof suaIdade)
// string sempre nas aspas, numeros reconhecidos como numeros

let esseNome = prompt("Qual seu nome?")
let essaIdade = prompt("qual sua idade?")
console.log("seu nome e", esseNome, " e sua idade e", essaIdade, "anos")
// deu erro pois as variaveis tinham mesmo nome, entao mudando o nome das seguintes variaveis o resultado foi impresso

console.log(typeof esseNome, typeof essaIdade)
// a idade segue como string mas num futuro teria q ser reconhecida como Number()

console.log("Ola", esseNome, "voce tem", essaIdade, "anos")

//-------------------------------------------------------------//
// 2

let roupa = prompt("Voce esta usando rosa hoje")
let cabelo = prompt("Voce tem uma bolsa verde?")
let sapato = prompt("Voce tem sapato vermelho?")
console.log("Voce esta usando rosa hoje - ", roupa) 
console.log("Voce tem uma bolsa verde? - ", cabelo) 
console.log("Voce tem sapato vermelho? - ",  sapato)

// -------------------------------------------------------------//
//3

let a = 10
let b = 25
c = a
a = b
b = c 
//a = c //c = 10
//b = a //a = 25
//c = b //b = 10
console.log(a, b, c)

// -------------------------------------------------//

//DESAFIO

let firstNumber = prompt("digite um numero")
let secondNumber = prompt("digite um outro numero")
let x = Number(firstNumber) + Number(secondNumber)
console.log( x )
let y = Number(firstNumber) * Number(secondNumber)
console.log(y)

// ---------------------------------------------------//