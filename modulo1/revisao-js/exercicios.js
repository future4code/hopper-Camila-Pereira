// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse(array);
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((par) => par % 2 === 0);
}

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
  let pares = array.filter((num) => num % 2 === 0);
  let resultado = pares.map((num) => num ** 2);
  return resultado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  for (numero of array) {
    if (numero > maior) {
      maior = numero;
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior;

  let divisivel;
  let diferenca = num1 - num2;
  if (num1 > num2) {
    divisivel = false;
  } else {
    divisivel = true;
  }
  if (num1 > num2) {
    maior = num1;
  } else {
    maior = num2;
  }

  let objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: divisivel,
    diferenca: Math.abs(diferenca),
  };

  return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let maior = [];
  for (let i = 0; maior.length < n; i++) {
    if (i % 2 === 0) {
      maior.push(i);
    }
  }
  return maior;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let escaleno = "Escaleno";
  let equilatero = "Equilátero";
  let isosceles = "Isósceles";
  if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    return escaleno;
  } else if (ladoA === ladoB && ladoA === ladoC) {
    return equilatero;
  } else if (ladoA === ladoB && ladoA !== ladoC) {
    return isosceles;
  } else if (ladoA === ladoC && ladoA !== ladoB) {
    return isosceles;
  } else if (ladoA !== ladoB && ladoB === ladoC) {
    return isosceles;
  }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let array2 = [];
  let segundoMaior;
  let segundoMenor;
  const novoArray = array.sort((a, b) => a - b);
  segundoMenor = novoArray[1];
  segundoMaior = novoArray[novoArray.length - 2];

  array2.push(segundoMaior, segundoMenor);
  return array2;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return `Venha assistir ao filme ${filme.nome}, de 2006, dirigido por ${
    filme.diretor
  } e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa.nome = "ANÔNIMO";
  return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasComPermissao = [];
  let pessoasSemPermissao = [];
  for (let pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasComPermissao.push(pessoa);
    } else {
      pessoasSemPermissao.push(pessoa);
    }
  }
  return pessoasComPermissao;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasComPermissao = [];
  let pessoasSemPermissao = [];
  for (let pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasComPermissao.push(pessoa);
    } else {
      pessoasSemPermissao.push(pessoa);
    }
  }
  return pessoasSemPermissao;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.map(function (item) {
    let saldoCliente = item.compras.reduce(
      (accumulator, value) => accumulator + value,
      0
    );
    item.saldoTotal -= saldoCliente;
    item.compras = [];
  });

  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const sorted = consultas.sort((name1, name2) => {
    if (name1.nome < name2.nome) {
      return -1;
    }
    if (name1.nome > name2.nome) {
      return 1;
    } else {
      return 0;
    }
  });
  return sorted;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  consultas.sort((x, y) => {
    x = x.dataDaConsulta.split("/").reverse().join();
    y = y.dataDaConsulta.split("/").reverse().join();
    return x.localeCompare(y);
  });
  return consultas;
}
