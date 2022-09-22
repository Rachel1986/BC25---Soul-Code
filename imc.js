/* O IMC - Índice de Massa Corporal é um critério da Organização 
Mundial de Saúde para dar uma indicação sobre a condição de peso de 
uma pessoa adulta. A fórmula é IMC = peso / (altura * altura). Elabore
um algoritmo que leia o peso e a altura de um adulto e mostre sua condição
de acordo com os seguintes dados:
- Abaixo de 18.5 --> Abaixo do peso;
- Entre 18.5 e 25 --> Peso normal;
- Entre 25 e 30 --> Acima do peso;
- Acima de 30 --> Obeso.
*/

const peso = parseFloat(
  prompt('Digite o seu peso.')
);
const altura = parseFloat
  prompt(
  'Digite a sua altura.'
);
const imc = peso / (altura * altura);

if(imc < 18.5) {
  alert(`Você está abaixo do peso`)
} else if(imc >= 18.5 && imc <= 25) {
  alert(`Você está com o peso normal.`)
} else if(imc >= 25 && imc <= 30) {
  alert(`Você está acima do peso.`)
} else {
  alert(`Você está obeso(a).`)
}
