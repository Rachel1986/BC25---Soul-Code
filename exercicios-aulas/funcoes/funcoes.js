/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * definí-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/* Parâmetros são valores que passamos para as funções, para que elas utilizem esses valores
dentro delas. */

//passar um valor como parâmetro para passá-lo dentro do alert
  function cumprimentar(mensagem, repetir = 1) /* 7 */{
    for(let i = 1; i <= repetir; i++) {
    alert(mensagem.toUpperCase())
  }
}

function soma(num, num2) {
  let result = num + num2
  return result  
}

function maiorValor(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

let resultado = soma(5, 9) //11
console.log(`O valor da variável resultado é ${resultado}`) //14

/*const num1 = parseInt(prompt("Informe o primeiro número"))
const num2 = parseInt(prompt("Informe o segundo número"))*/

//alert(`O maior número entre esses é ${maiorValor(num1, num2)}`)

//cumprimentar("Olá, mundo", )
/* cumprimentar("Eu amo javascript")
cumprimentar("Javascript sola o C#") */

/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */
// a: 1; b: -1; c: -12 ---> resultado: 4 e -3

function equacaoSegundoGrau(a, b, c) {
  const delta = b ** 2 - 4 * a * c
  const raizDelta = Math.sqrt(delta)
  const x1 = (-b + raizDelta) / (2 * a)
  const x2 = (-b - raizDelta) / (2 * a)

  return [x1, x2]
}
console.log(equacaoSegundoGrau(1, -1, -12)) // [-3, 4]


