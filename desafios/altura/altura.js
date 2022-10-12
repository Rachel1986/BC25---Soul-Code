/*1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
a. A menor altura do grupo;
b. A maior altura do grupo; */

let listaAlt = []

for(let i = 1; i <= 15; i++) {
  let altura = parseInt(prompt(`Olá, digite a altura da ${i}° pessoa.`))
  listaAlt.push(altura)
}

let menor = Math.min(...listaAlt)
let maior = Math.max(...listaAlt)


alert(`A menor altura do grupo é ${menor}\n e a maior altura do grupo é ${maior}.`)
