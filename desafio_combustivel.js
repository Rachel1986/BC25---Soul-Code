/* Um posto está vendendo combustíveis com os seguintes descontos:
ÁLCOOL --> Até 25 litros, desconto de 2% por litro.
       --> Acima de 25 litros, desconto de 4% por litro.

GASOLINA --> Até 25 litros, desconto de 3% por litro.
         --> Acima de 25 litros, desconto de 5% por litro.

    Escreva um algoritmo que leia o número de litros vendidos e o tipo de 
    combustível(codificado da seguinte forma: A-ácool, G-gasolina), calcule 
    e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro
    da gasolina é R$2,70 e o preço do litro do álcool é de R$1,90.
    */

const litroGasolina = 2.7;
const litroAlcool = 1.9;
const qtdLitros = parseFloat(
  prompt('Digite a quantidade de litros de combustível.')
);
const tipoCombustivel = prompt(
  'Digite A para álcool ou digite G para gasolina'
);

if (tipoCombustivel.toUpperCase() == 'A' && qtdLitros <= 25) {
  const descontoAlcool = litroAlcool * 0.98;
  const precoFinal = descontoAlcool * qtdLitros;
  alert(
    `O preço final do alcool com desconto é de ${precoFinal.toFixed(2)} reais.`
  );
} else if (tipoCombustivel.toUpperCase() == 'A' && qtdLitros > 25) {
  const descontoAlcool = litroAlcool * 0.96;
  const precoFinal = descontoAlcool * qtdLitros;
  alert(
    `O preço final do alcool com desconto é de ${precoFinal.toFixed(2)} reais.`
  );
} else if (tipoCombustivel.toUpperCase() == 'G' && qtdLitros <= 25) {
  const descontoGasolina = litroGasolina * 0.97;
  const precoFinal = descontoGasolina * qtdLitros;
  alert(
    `O preço final da gasolina com desconto é de ${precoFinal.toFixed(
      2
    )} reais.`
  );
} else {
  const descontoGasolina = litroGasolina * 0.95;
  const precoFinal = descontoGasolina * qtdLitros;
  alert(
    `O preço final da gasolina com desconto é de ${precoFinal.toFixed(
      2
    )} reais.`
  );
}
