const botaoCopiarPix = document.querySelector('#CopiarPix');
const pixAtualizado = 'betcoin.br@gmail.com';
const marcaCopiadoSucesso = document.querySelector('#copiadoSucesso');


copiado();

botaoCopiarPix.addEventListener('click', clipboardCopy);
async function clipboardCopy() {
    await navigator.clipboard.writeText(pixAtualizado);
    setTimeout(function () {
        botaoCopiarPix.classList.add('mostrarBotoes');
        marcaCopiadoSucesso.classList.remove('mostrarBotoes');
    }, 2000);
}


function copiado() {
    botaoCopiarPix.addEventListener('click', () => {
        setTimeout(function () {
            botaoCopiarPix.classList.remove('mostrarBotoes');
            marcaCopiadoSucesso.classList.add('mostrarBotoes');
        }, 200);
    })

}
