const botaoCopiarPix = document.querySelector('#CopiarPix');
const pixAtualizado = 'xml.mgn.sd5.9sr.7s6.rdc';
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
