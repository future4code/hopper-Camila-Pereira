// Exercícios de interpretação de código

// 1.

// console.log(filme.elenco[0])
// Matheus Nachtergaele

// console.log(filme.elenco[filme.elenco.length - 1])
// Virginia Cavendish

// console.log(filme.transmissoesHoje[2]) 
// {canal: "Globo", horario: "14h"}

//==============================================================================//

// 2.

// a)

//console.log(cachorro)
// {nome: "Juca", idade: 3, raca: "SRD" }
//console.log(gato)
// {nome: "Juba", idade: 3, raca: "SRD" }
//console.log(tartaruga)
// {nome: "Jubo", idade: 3, raca: "SRD" }

// b)

// sintaxe dos 3 pontos chamada spread, cria/expande uma lista de argumentos

//======================================================================================//

// 3-

//a)

//console.log(minhaFuncao(pessoa, "backender"))
// false
//console.log(minhaFuncao(pessoa, "altura"))
// undefined

//b)
//console.log(minhaFuncao(pessoa, "backender"))
// false pois backender esta definido como "false" e foi pedido a propriedade dentro de argumento
//console.log(minhaFuncao(pessoa, "altura"))
// undefined pois nao foi listado a altura dentro do objeto, nao foi definida.


// Exercícios de escrita de código

// 1-

// a)

const pessoa = {
    nome: 'Camila',
    apelidos: ['Camis', 'Cah', "Mica"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

// b)

const outroApelido = {... pessoa, apelidos: ["Caca", "Coisinha", "Camilinha"]}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${outroApelido.apelidos[0]}, ${outroApelido.apelidos[1]} ou ${outroApelido.apelidos[2]}`)

// 2-



const peoples1 = 
    {nome: 'Carlos', idade: 23, profissao: 'Engenheiro',}

const peoples2 = 
    {nome: 'Leandro', idade: 56, profissao: 'Mecanico',}

const printArray = (obj) => {
    
    return [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]

     
}

console.log(printArray(peoples1))
console.log(printArray(peoples2))


// 3-

const carrinho = []

const frutasSacolao = 
[
{nome: 'pera', disponibilidade: true },
{nome: 'banana', disponibilidade: false},
{nome: 'laranja', disponibilidade: true},
]

function objetoFruta(fruta){
carrinho.push(fruta)
}

objetoFruta(frutasSacolao)
console.log(carrinho)

//========================================================================//

//DESAFIOS

//1-

let clientePergunta1 = prompt("Qual seu nome?") 
let clientePergunta2 = prompt("Qual sua idade?")
let clientePergunta3 = prompt("Qual sua profissao?")

const novoUsuario = (name, age, profession) =>

console.log(



cliente = { 
    nome: clientePergunta1, 
    idade: clientePergunta2, 
    profissao: clientePergunta3 }

)
novoUsuario(clientePergunta1, clientePergunta2, clientePergunta3)



