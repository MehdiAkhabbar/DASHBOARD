const chart = document.querySelector("#chart").getContext('2d');

// new chart instance 

new Chart(chart, {
    type: 'line',
    data:{
        labels: ['Jan' , 'Feb' , 'Mar' , 'Apr' ,'May' ,'Jun' ,'Jul' ,'Aug' , 'Sep' ,'Oct' ,'Nov', 'Dec'],

        datasets: [
            {
                label: 'Budget',
                data: [27174, 39536, 34974, 30536, 43374, 23436, 27374, 31236, 13974, 44536, 33065, 19678],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'Expenses',
                data: [23174, 35536, 24974, 32536, 23374, 33436, 24374, 32236, 23974, 24536, 43065, 59678],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})


// SHOW / HIDE SIDEBAR

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
        sidebar.style.display='none';
})


//theme light

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active')
    ;  
    themeBtn.querySelector('span:last-child').classList.toggle('active')
    ;  
    
})