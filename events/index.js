/**
 * Criar uma função responsável por mostrar o alerta na tela
 */
 let contadorBtn = 0;
 const avisoContador = document.getElementById("aviso")

function mostrarAlerta() {
/* O objeto document é uma representação do HTML do seu site
dentro do Javascript */
/* A propiedade classList retorna um array com todas as classes CSS
que um elemento possui */
/* classList.add() serve para adicionar novas classes dinamicamente
dentro de um elemento HTML*/
    contadorBtn++
    avisoContador.innerHTML = contadorBtn
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add("mostrar")
}

function fecharAlerta() {
  /* classList.remove() serve para remover classes dinamicamente
dentro de um elemento HTML*/
  const divAlerta = document.getElementById("alerta")
  divAlerta.classList.remove("mostrar")
}

const btnMostrar = document.getElementById("mostrar")
const btnFechar = document.getElementById("fechar")




/* Se eu precisar passar uma função como parâmetro para outra
eu passo a referencia dela, ou seja, a função s/ os parênteses na frente*/
btnMostrar.addEventListener("click", mostrarAlerta)
btnFechar.addEventListener("click", fecharAlerta)


