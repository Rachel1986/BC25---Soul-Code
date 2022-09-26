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


