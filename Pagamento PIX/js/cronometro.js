"use strict"
const contadorTela = document.querySelector('#counter');
const tituloContadorTela = document.querySelector('#counterTitulo');
let hh = 0;
let mm = 29;
let ss = 60;

let tempo = 1000;//Quantos milésimos valem 1 segundo?
let cron;


//Inicia o temporizador
function startCronometro() {
    cron = setInterval(() => { timer(); }, tempo);
    contadorTela.classList.add('mostrarContador');
    tituloContadorTela.classList.add('mostrarContador');
    
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss--; //Incrementa +1 na variável ss

    if (ss == 0) { //Verifica se deu 59 segundos
        ss = 60; //Volta os segundos para 0
        mm--; //Adiciona +1 na variável mm

        if (mm == 0) { //Verifica se deu 59 minutos
            mm = 60;//Volta os minutos para 0
            hh--;//Adiciona +1 na variável hora
        }

       
    } 
    if(mm === -1){
        stop();
        
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;

    
}