
// =====================================================================================//

// Exercícios de interpretação de código

// 1-

/* 

a) 10 e 50
b) Nao apareceria nada no console, 
afinal voce nao pediu nenhuma funcao de "aparecer do console."

// =====================================================================================//
// 2 -

a) A funcao vai chamar o  texto do prompt como resposta, porem o return 
pede para as letras serem minusculas e encontrar "cenoura".
Como cenoura nao existe na frase do prompt, o console.log mostra false

b)
i) true
ii) true
iii) true


*/
//========================================================================================//


// Exercícios de escrita de código

//1

//a

//const perguntas = () => {
//   console.log(`Eu sou Camila, tenho 37 anos, moro em São Paulo e sou estudante.`)
//}
//perguntas()
const perguntas = () => {
    const respondendo = " Eu sou Camila, tenho 37 anos, moro em São Paulo e sou estudante. "
    return respondendo
}
console.log(perguntas())
// b

const receberQuatroParametros = (nome, idade, endereco, profissao) => {
   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}

receberQuatroParametros("Camila", '26', "Rua Banda, 525", "Administradora")

//========================================================================================//

// 2- 
//a)

const receberDoisNumeros = (a, b) => {
    const resultado = a + b
    return resultado
}
console.log(receberDoisNumeros(2, 5))

//b)

const retorneBooleano = (um, dois) => {
    const maiorNum = um >= dois
    return maiorNum
}
console.log(retorneBooleano(10, 5))

//c)

const numPar = (n) => {
     return n % 2 == 0
}
let res  = numPar(13)
console.log(`O Resultado e par? ${res}`)

//d)

const funcaoString = (mensagem) => {
    
    
    return mensagem.toUpperCase()
}
console.log(funcaoString("We are love"))
console.log(funcaoString("We are love").length)

//3

const soma = (num1, num2) => {
    let somando = num1 + num2
    return somando
}

const subt = (num3, num4) => {
    let subtraindo = num3 - num4
    return subtraindo
}

const mult = (num5, num6) => {
    let multiplicando = num5 * num6
    return multiplicando
}

const div = (num7, num8) =>{
    let dividindo = num7 / num8
    return dividindo
}

let valor1 = Number(prompt("Digite apenas 1 numero"))
let valor2 = Number(prompt("Digite um outro numero"))

console.log(`A soma dos numeros fica ${soma(valor1, valor2)}. 
A subtracao dos numeros fica ${subt(valor1, valor2)}.
A multiplicacao dos numeros fica ${mult(valor1, valor2)}.
A divisao dos numeros fica ${div(valor1, valor2)}  `)

//Desafios

//1 -

//a

const parametro = (parametro1) => 
console.log(parametro1)

//b

const outroParametro = (param1, param2) =>
    param1 + param2;
parametro(outroParametro(23, 41))
