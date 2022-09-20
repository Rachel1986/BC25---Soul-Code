// Delimitação de Strings
const aspasSimples = 'Olá, mundo!';
console.log(aspasSimples);

//caracteres de escapa

const aspasDuplas = "Olá, eu sou o \nJavascript. Eu sou melhor que o Python";
console.log(aspasDuplas); // \n quebra a linha ao imprimir.

const textoComCrase = `Olá, eu sou o Javascript. Eu sou melhor que o Python`
console.log(textoComCrase)

//métodos das strings
const texto = "O Javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana.";

console.log(texto);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.concat(" A linguagem C é a mãe de todas as linguagens."));//concatenou com o valor da variável texto.
console.log(texto[2]);
console.log(texto.substring(2, 12));
console.log(texto.replace("Javascript", "Rust" )); //substitui a primeira ocorrência da pesquisa.
console.log(texto.replaceAll("Javascript", "Kotlin"))
console.log(texto.replace(/Javascript/g, "PHP"));//substitui a palavra Javascript globalmente.
console.log(texto.replace(/Javascript/gi, "PHP"));//substitui a palavra Javascript, mesmo se estiver c/ primeira letra minúscula.

const html = '<!DOCTYPE html>\n<html></html>';
console.log(html.startsWith('<!DOCTYPE html>')); //true, pois a minha variável se inicia com esse trecho.
console.log(html.startsWith('batata')); //false
console.log(html.endsWith('</body>'));//false, pois o término da mesma não é esse 

const mensagem = "                          Olá, mundo!                 ";
console.log(mensagem);
console.log(mensagem.trim());//imprime sem o excesso de espaçamento

let senha = "sonic";
console.log(senha.length); //mostra quantos caracteres tem no texto.
console.log(senha.length >= 8); //false, pois 8 ultrapassa o número de caracteres do meu texto.






