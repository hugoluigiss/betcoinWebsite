const botaoMostrarPix = document.querySelector('.botaoMostrarPix');
const formpix2 = document.querySelector('.formPix2');
const chavePixLocal = document.querySelector('#chavePixLocal');
const confirmarPagamento = document.querySelector('#confirmarPagamento');
const cancelarPagamento = document.querySelector('#cancelarPagamento');
const tituloFormPix2 = document.querySelector(".tituloFormPix2");



formpix2.addEventListener('submit', (e) => {
    e.preventDefault();
    chavePixLocal.textContent = 'betcoin.br@gmail.com'
    confirmarPagamento.classList.add('mostrarBotoes');
    cancelarPagamento.classList.add('mostrarBotoes');
    startCronometro();
    botaoMostrarPix.classList.add('esconderBTN');
    botaoCopiarPix.classList.add('mostrarBotoes');
    
});