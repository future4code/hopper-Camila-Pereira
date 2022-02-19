// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("digite a altura do triangulo"))
const largura = Number(prompt("digite a largura do triangulo"))
const area = (altura * largura)
console.log(area) 

} 

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoNasc = Number(prompt("qual ano voce nasceu"))
const anoAtual = Number(prompt("qual ano que estamos"))
const idade = anoNasc - anoAtual
console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("nome")
const idade = prompt("idade")
const email = prompt("email")
console.log( `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("cor1")
  const cor2 = prompt("cor2")
  const cor3 = prompt("cor3")
  const cores = [cor1, cor2, cor3]
  

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui


return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const lastElement = array[array.length - 1]
console.log(lastElement)

return lastElement
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  //array reserva vira primeiro array
let arrayReserva = array[0] 
  // primeiro array vira ultimo
array[0]= array[array.length-1]
 //entao array ultimo vira primeiro
array[array.length -1] = arrayReserva
console.log(array)

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
    const anoHoje = Number(prompt("Digite o ano que estamos hoje:"))
    const anoNasc = Number(prompt("Digite o ano em que você nasceu:"))
    const anoRG = Number(prompt("Digite o ano da emissao do seu RG:"))
  
    const idadePessoa = anoHoje - anoNasc
    const idadeRG = anoHoje - anoRG
  
   const idadeUm = idadePessoa <= 20 && idadeRG >= 5
   const idadeDois = (idadePessoa >= 20 && idadePessoa <= 50) && idadeRG >= 10
   const idadeTres = idadePessoa > 50 && idadeRG > 15
 
   console.log(idadeUm || idadeDois || idadeTres)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
// calculo e comparacao em uma linha so 
let divisivelpor4 = ano % 4 === 0;
let naoDivisivelpor100 = ano % 100 !== 0;
let divisivelpor400 = ano % 400 === 0;

return (divisivelpor4 && naoDivisivelpor100) || divisivelpor400;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDe18 = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let sim = "sim"

 
   console.log((maiorDe18 == sim) && (ensinoMedio == sim) && (disponibilidade == sim) )
   
  }
  
