/* Tendo como dados de entrada a altura e o sexo de uma pessoa, construa 
um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
--> para homens: (72.7 * h) - 58;
--> para mulheres: (62.1 * h) - 44.7.
*/

const height = parseFloat(
  prompt('Digite a sua altura.')
);
const sexo = prompt(
  'Qual o seu sexo? Digite "M" se masculino ou "F" se feminino.'
);

if(sexo.toUpperCase() == "M") {
const pesoIdeal = (height * 72.7) - 58;
alert(`O seu peso ideal é ${pesoIdeal.toFixed(2)}`)
} else if(sexo.toUpperCase() == "F") {
  const pesoIdeal = (height * 62.1) - 44.7;
  alert(`O seu peso ideal é ${pesoIdeal.toFixed(2)}`)
}