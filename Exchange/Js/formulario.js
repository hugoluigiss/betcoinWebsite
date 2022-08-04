const moedaDeCompra = document.querySelector('#moedaCompra');
const opcoesMoedaCompra = document.querySelectorAll('#btnMoedaCompra');
const novoInput =document.querySelector('.novoInput');
const botaoConfirmar =document.querySelector('#botaoConfirmar');
const fromulario = document.querySelector('form');
const balance = document.querySelector('#balance');



moedaDeCompra.addEventListener('click', () => {
   novoInput.setAttribute('type', 'text');
   novoInput.setAttribute('name', 'quantidadeMoedaCompra');
   novoInput.setAttribute('id', 'quantidadeModedaCompra');
   novoInput.setAttribute('required', 'required');
   novoInput.setAttribute('placeholder', `Quanto em ${moedaDeCompra.value} deseja comprar?`);
   balance.textContent =`SALDO: ? ${moedaDeCompra.value}`
    
});

fromulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Transação em processamento...')
    fromulario.reset();

});
