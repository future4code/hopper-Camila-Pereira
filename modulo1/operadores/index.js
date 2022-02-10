// Interpretacao de Codigo

//1

/*

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // resultado = false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // resultado = false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // resultado = true

console.log("d. ", typeof resultado) // booleano

//------------------------------------------------------------//

//2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // ira aprecer primeiroNumero concatenado no segundoNumero por serem string. 

//-------------------------------------------------------------//

// 3

Temos que incluir const soma = Numero(primeiroNumero) + Numero(segundoNumero)

//---------------------------------------------------------------//

*/

//Exercícios de escrita de código//

// 1

const idadeSua = prompt("Qual sua idade?")
const idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
const idadeMaior = idadeSua > idadeAmigo === true 
const idadeDiferente = Number(idadeSua) - Number(idadeAmigo)
 
console.log("Sua idade e maior do que a do seu amigo?", idadeMaior )
console.log("A diferenca de idade entre a gente e de", idadeDiferente, "anos")

//2

const numPar = prompt("Por favor insira um numero par")
const res = numPar % 2
console.log(res)
// c) todos dao zero, por ser todos divisores de 2
// d) todos dao espoente 1, por sempre sobrar 1 da divisao

//3

const idadeUsuario = prompt("Digite sua idade em anos")
const idadeMeses = Number(idadeUsuario) * 12
const idadeDias = Number(idadeUsuario) * 365
const idadeHoras = Number(idadeDias) * 24

console.log("Voce tem ", idadeMeses, "meses")
console.log("Voce tem ", idadeDias, "dias")
console.log("Voce tem ", idadeHoras, "horas")

//4

const umNumero = prompt("Digite 1 numero qualquer")
const doisNumeros = prompt("Digite outro numero qualquer")

const numeroMaior = umNumero > doisNumeros 
console.log(numeroMaior )

const numeroIgual = (umNumero === doisNumeros) 
console.log(numeroIgual )

const numeroDivi = (umNumero % doisNumeros === 0) 
console.log(numeroDivi )

const doisDivi = (doisNumeros % umNumero === 0) 
console.log(doisDivi )


//-------------------------------------------------------------//


