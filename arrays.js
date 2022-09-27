/**
 * Arrays ou vetores é um tipo especial que te permite armazenar
 * diversos valores em apenas um local.
 */

//Criando um array ou array
/*let arr = new Array();
let arr2 = new Array(); */
let arr = [10, 15, 9.8, "Eu sou um texto dentro de um array", "Olá, mundo", true, false, false];
console.log(arr[20]); //undefined
console.log(arr[6]); //false, 
arr[6] = "Outro texto";
console.log(arr[6]); // Outro texto
console.log(arr[8]); // undefined
arr[8] = "Agora a posição  existe dentro de arr "

const lista = ["João", "Maria", "Paulo", "Pedro", "Vitória", "Augusto", "Fábio", "Larissa"] 
console.log(lista)
lista.push("Roberta") //adiciona um valor no final do array
console.log(lista)
lista.unshift("Gustavo")
console.log(lista)
lista.pop() //remove o último valor da array
console.log(lista)
lista.shift() //remove p primeiro valor de um array
console.log(lista)
console.log(lista.concat("Júlio")) //gera outra lista adicionando o valor de parâmetro
console.log(lista) // já imprimirá sem o "Júlio"
console.log(lista.join("-> ")) //João-> Maria-> ...




