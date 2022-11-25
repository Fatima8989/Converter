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


leftInput.addEventListener("input",(e)=>{
    let v=1;
    if(e.target.value.trim() !==""){
    v=parseFloat(e.target.value.trim());
    }
    rightInput.value=Math.trunc((1/rate*v*100))/100;
});

convert()
from.addEventListener('keyup',getExchange)
async function getExchange(){
    let v1 = leftCurrencyButtons.value;
    let v2 = rightCurrencyButtons.value;
    fetch(`https://api.exchangerate.host/base=${v1}&symbols=${v2}`)
    .then((v)=>{
       return v.json(); 
    })
    .then((res)=>{
        rate=res.info.rate;
        let v=leftCurrencyButtons.value.trim(v);
        if(v !== ""){
            v=parseFloat(v);
        }
        else{v=1;
        }
        leftCurrencyButtons.value=rate*v;
    });
}

leftInput.addEventListener("change", getExchange);
rightInput.addEventListener("change", getExchange);
getExchange();