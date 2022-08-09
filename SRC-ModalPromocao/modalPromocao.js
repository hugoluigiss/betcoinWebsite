const modalPromocaoFull = document.getElementById('modalPromocao');
const modalPromocaoLocal = document.querySelector('.modalPromocaoLocal');


const botaoFecharPromocao = document.getElementById("fecharModalPromocao");
botaoFecharPromocao.addEventListener('click', (e) => {
    elementoModal.classList.add('esconderModalPromocao');

})





setTimeout(() => {
    elementoModal.classList.add('mostrarModalPromocao');
}, 6000)

