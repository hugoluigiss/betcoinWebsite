const botaoMenu = document.querySelector('.botaoMenu');
const botaoFechar = document.querySelector('.botaoFechar');
const sideBar =document.querySelector('aside');
const listaMenu =document.querySelector('.listaMenu');


botaoMenu.addEventListener('click', () => {
    if(sideBar.classList.contains('mostrarMenu')){
        sideBar.classList.remove('mostrarMenu');
    }else

    sideBar.classList.add('mostrarMenu');
});

botaoFechar.addEventListener('click', () => {
    if(sideBar.classList.contains('mostrarMenu')){
        sideBar.classList.remove('mostrarMenu');
    }else
    
    sideBar.classList.add('mostrarMenu');
});


     
