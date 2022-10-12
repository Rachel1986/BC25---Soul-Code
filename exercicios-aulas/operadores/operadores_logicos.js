// Operador && --> todas as condições precisam ser verdadeiras.

//V -> Verdadeiro 
//F -> Falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 */

//média precisa ser maior ou igual a 7 e preciso ter, no mínimo, 80% de presença
const media = (7 + 10 + 10) / 3;
const presenca = 0.95;

console.log(media >= 7 && presenca >= 0.8) //true

// Operador OU (||)
/**
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
 */

console.log(4 > 7 || 3 < 2) //false
console.log(5 > 3.5 || 7 > 8)//true

const estado = "MG";
console.log(estado == "SP" || estado == "MG")// true

//Operador NOT

/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3; //false
console.log(!resultado) //true será o resultado aqui, pois há o sinal de negação antes da variável




