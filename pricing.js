const chart = document.querySelector('#chart').getContext('2d');

// create a new chart instance //
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mart', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mart', 'Apr'],

        datasets: [
            {
                label: 'GOLD',
                data: [1796, 1908, 1936, 1895, 1836, 1807, 1765, 1710, 1660, 1632, 1768, 1822, 1928, 1881],
                borderColor: 'green',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [2688, 2922, 3282, 2728, 1940, 1071, 1679, 1554, 1328, 1572, 1294, 1194, 1585, 1677],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

// show or hide sidebar //

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// change theme //
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})








var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});