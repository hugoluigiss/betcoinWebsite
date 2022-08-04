const botao1 = document.querySelector('#botaoFaixa1');
const texto1 = document.querySelector('#elementoTexto1');
const botao2 = document.querySelector('#botaoFaixa2');
const texto2 = document.querySelector('#elementoTexto2');
const botao3 = document.querySelector('#botaoFaixa3');
const texto3 = document.querySelector('#elementoTexto3');
const botao4 = document.querySelector('#botaoFaixa4');
const texto4 = document.querySelector('#elementoTexto4');





function botaoFaq (botao, texto){
botao.addEventListener('click', () => {

    texto.classList.toggle('mostrarTexto');
})
}

botaoFaq (botao1, texto1);
botaoFaq (botao2, texto2);
botaoFaq (botao3, texto3);
botaoFaq (botao4, texto4);



