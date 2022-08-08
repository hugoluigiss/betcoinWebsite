const formInicialPix = document.querySelector('.formInicialPix');
let nomeInput = document.querySelector('#nomeInput');
let documentoInput = document.querySelector('#documentoInput');
let emailInput = document.querySelector('#emailInput');
let telefoneInput = document.querySelector('#telefoneInput');
const btnCalcular = document.querySelector('.btnCalcularPix');
const btnConfirmar = document.querySelector('.avancarFormPix');
let qtdBetcoin = document.querySelector('#quantidadeBET');
let qtdReal = document.querySelector('#realInput');
let cotacaoEmRealBET = 0.44;
const erroValorMinimo = document.getElementById('erroValorMinimo');

const modal = document.querySelector('#modalPix');
const botaoFecharModal = document.querySelector('#fecharModalPix');



btnCalcular.addEventListener('click', () => {
    if(qtdReal.value < 70){
        erroValorMinimo.innerHTML = "O valor mínimo é R$70,00."
        return;
    } else{
        erroValorMinimo.innerHTML = ""
    }
    let valorCalculado = Math.round(parseInt(qtdReal.value) / cotacaoEmRealBET);
    qtdBetcoin.textContent = `R$${qtdReal.value} = ${valorCalculado}BET`
});

let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    if(qtdReal.value < 70){
        erroValorMinimo.innerHTML = "O valor mínimo é R$70,00."
        return;
    }else{
        erroValorMinimo.innerHTML = ""
    }
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    });
    
    modal.style.display = "block";
    limparFormulario();
});

//formInicialPix.addEventListener('submit', (e) => {
 //   e.preventDefault();
 //   modal.style.display = "block";

//});

botaoFecharModal.addEventListener('click', () => {
    modal.style.display = "none";

});


function limparFormulario(){
    qtdReal.value = '';
    nomeInput.value ='';
    emailInput.value='';
    documentoInput.value='';
    telefoneInput.value=''; 
}




