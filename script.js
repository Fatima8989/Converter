const leftCurrencyButtons = document.querySelectorAll(".one-button");
const rightCurrencyButtons = document.querySelectorAll(".two-button");
const leftInput = document.querySelector('.from');
const rightInput = document.querySelector('.to');
const leftCurrencyInfo = document.querySelector('.from1');
const rightCurrencyInfo = document.querySelector('.to1');

let liveCurrencyRate;
let leftCurrency = 'RUB';
let rightCurrency = 'USD';

for(let i = 0; i < 4; i++){
    leftCurrencyButtons[i].addEventListener('click', changeSelectedButton)
    rightCurrencyButtons[i].addEventListener('click', changeSelectedButton)
}

leftInput.addEventListener('keydown', correctFormat);
rightInput.addEventListener('keydown', correctFormat);
leftInput.addEventListener('keyup', changeRightInput);
rightInput.addEventListener('keyup', changeLeftInput);

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

async function changeCurrencies(){
    var getThis = `https://api.exchangerate.host/convert?from=${leftCurrency}&to=${rightCurrency}`;
    await fetch(getThis).then(response => response.json()).then((currency) => 
    {
        leftCurrencyInfo.innerHTML = `1 ${leftCurrency} = ${parseFloat(currency.info.rate.toFixed(4))} ${rightCurrency}`;
        rightCurrencyInfo.innerHTML = `1 ${rightCurrency} = ${parseFloat((1 / currency.info.rate).toFixed(4))} ${leftCurrency}`;            
        liveCurrencyRate = currency.info.rate; 
    });
}

function correctFormat(event) {
    console.log(event.key);
    console.log(event.which);
    if(event.target.value == '0' && event.key != '.') 
    event.target.value = event.target.value.replace('0', '');
}

function stringWithSpaces(x){
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");                     
    return parts.join(".");
}

function changeLeftInput(){
    let valueWithoutSpaces = rightInput.value.replaceAll(' ', '');
    rightInput.value = stringWithSpaces(rightInput.value);
    let changedLeftValue = parseFloat((valueWithoutSpaces * 1/liveCurrencyRate).toFixed(4));    
    
    if(valueWithoutSpaces == '') changedLeftValue = '';
    leftInput.value = stringWithSpaces(changedLeftValue);
}

function changeRightInput(){
    let valueWithoutSpaces = leftInput.value.replaceAll(' ', '');
    leftInput.value = stringWithSpaces(leftInput.value);
    let changedRightValue = parseFloat((valueWithoutSpaces * liveCurrencyRate).toFixed(4));    
    
    if(valueWithoutSpaces == '') changedRightValue = '';
    rightInput.value = stringWithSpaces(changedRightValue);
}

changeCurrencies();