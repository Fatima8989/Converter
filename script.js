const leftCurrencyButtons = document.querySelectorAll(".one-button");
const rightCurrencyButtons = document.querySelectorAll(".two-button");
const leftInput = document.querySelector('.from');
const rightInput = document.querySelector('.to');
const leftCurrencyInfo = document.querySelector('.from1');
const rightCurrencyInfo = document.querySelector('.to1');
let rate=0;

let liveCurrencyRate;
let leftCurrency = 'RUB';
let rightCurrency = 'USD';

for(let i = 0; i < 4; i++){
    leftCurrencyButtons[i].addEventListener('click', changeSelectedButton)
    rightCurrencyButtons[i].addEventListener('click', changeSelectedButton)
}

function changeSelectedButton(event){    
    event.target.style.backgroundColor = '#833AE0'; 
    event.target.style.color = 'white';
    
    if(event.target.className == 'one-button') leftCurrency = event.target.innerHTML;        
    else rightCurrency = event.target.innerHTML


for(let i = 0; i < 4; i++){
    if(event.target != event.target.parentElement.children[i]){
        event.target.parentElement.children[i].style.backgroundColor = 'white';
        event.target.parentElement.children[i].style.color = '#9F9F9F';
    }
}
    changeCurrencies();
}


leftInput.addEventListener("input",(e)=>{
    let v=1;
    if(e.target.value.trim() !==""){
    v=parseFloat(e.target.value.trim());
    }
    rightInput.value=Math.trunc((1/rate*v*100))/100;
});

async function changeCurrencies(){
    var getThis = `https://api.exchangerate.host/convert?from=${leftCurrency}&to=${rightCurrency}`;
    await fetch(getThis).then(response => response.json()).then((currency) => 
    {
        leftCurrencyInfo.innerHTML = 1 ${leftCurrency} = ${parseFloat(currency.info.rate.toFixed(4))} ${rightCurrency};
        rightCurrencyInfo.innerHTML = 1 ${rightCurrency} = ${parseFloat((1 / currency.info.rate).toFixed(4))} ${leftCurrency};            
        liveCurrencyRate = currency.info.rate; 
    });
}
leftInput.addEventListener("change", getExchange);
rightInput.addEventListener("change", getExchange);
