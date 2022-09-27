/* Faça um programa em Javascript que leia um vetor de seis elementos numéricos inteiros, calcule e mostre:
a) A quantidade de números pares
b) Quais os números pares
c) A quantidade de números ímpares
d) Quais os números ímpares */

// Criar um novo array
const numeros = [];

// Criar uma repetição que execute 6 vezes
for(i= 1; i <= 6; i++) {
  let num = parseInt(prompt(`Digite o ${i}° número`))
  numeros.push(num)
}

//separar os pares dos ímpares
const pares = [];
const impares = [];

//percorrer o array com os números informados
//criar uma váriável que guardará os valores de cada posição do array
// o array que iremos percorrer

for (let numero of numeros) {
  /**
   * Separar os valores pares dos ímpares
   */
  if (numero % 2 === 0) {
    pares.push(numero)
  } else {
    impares.push(numero)
  }
}

alert(`Nós temos ${pares.length} valores pares: ${pares.join(', ')}`)
alert(`Nós temos ${impares.length} valores ímpares: ${impares.join(', ')}`)
