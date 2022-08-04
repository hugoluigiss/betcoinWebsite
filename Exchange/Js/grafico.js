const ctx = document.getElementsByClassName('grafico-de-linha');


const labels = ['1', '2', '3', '4', '5','6']
    
const data ={
    labels,
    datasets: [{
        data: [111,199,189,544,311,577,499,819,621],

        label:'',
        fill:true,
        backgroundColor:'#D0B045',
        borderColor: '#414141',
        
    }]
}



const config = {
    type: 'line',
    data,
    options: {
        responsive: true,
            animations: {
                tension: {
                 duration: 5000,
                easing: 'linear',
                from: 0.75,
                to: -0.05,
                loop: true
            }
        },

        scales:{
            y:{
                display: false,
                grid:{
                    display: false,
                }
            },

            x:{
                display: false,
                grid:{
                    display: false,
                }
            }
        },

        plugins: {
            background:{
                backgroundColor: 'silver'
            },
            title:{
                display:false,
            },
            legend: {
                display: false,
            
            }
        
        } 
    }
}

const meuGrafico = new Chart(ctx, config);