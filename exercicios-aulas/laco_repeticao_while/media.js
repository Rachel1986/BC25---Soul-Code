/* 
 * Crie um algoritmo para ler N números, some-os e faça a média entre os números
 */
const array = [];
let soma = 0;
let somaMediaArray = 0;

let confirma = prompt("Gostaria de inserir mais numeros?")
while (confirma == "sim") {
    const numeros = parseInt(prompt("insira um numero")) 
    array.push(numeros)
    soma = array.reduce((total, numero) => total + numero, 0)
    somaMediaArray = soma / array.length
    confirma = prompt("Gostaria de inserir mais numeros?")
 }
 
 alert("Array original: "+ array + "A soma da array é: " + soma + " e a média da array é: " + somaMediaArray)