//2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial

let num = parseInt(prompt("Digite um valor para saber o seu fatorial"))
let fatorial = 1
for(let i = 1; i <= num; i++) {
  fatorial = fatorial * i
}

alert(num + "! = " + fatorial)