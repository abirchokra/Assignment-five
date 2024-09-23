document.getElementById('history-btn').addEventListener('click', function(){
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');
    const card = document.getElementById('card');
    card.classList.add('hidden');
    
    donationBtn.classList.remove('bg-lime-400');
    historyBtn.classList.add('bg-lime-400');



})

document.getElementById('donation-btn').addEventListener('click', function(){
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');
    const card = document.getElementById('card');
    card.classList.remove('hidden');
    donationBtn.classList.add('bg-lime-400');
    historyBtn.classList.remove('bg-lime-400');

})


document.getElementById('noakhali-btn').addEventListener('click',function(){
    const inputValue = getInputValue('noakhali-input');
    const textValue = document.getElementById('noakhali-amount');
    const myBalanceElement = document.getElementById('my-balance');
    const myBalance = parseFloat(myBalanceElement.innerText);
    if (isNaN(inputValue) || inputValue < 0) {
        alert('Put a valid amount number')
    }else if (myBalance >= inputValue) {
        textValue.innerText = inputValue;
        const currentBalance = myBalance - inputValue;
        myBalanceElement.innerText = currentBalance.toFixed(2);
        
    } else{
        alert('You do not have enough money to donate');
    }
})

document.getElementById('feni-btn').addEventListener('click',function(){
    const inputValue = getInputValue('feni-input');
    const textValue = document.getElementById('feni-amount');
    const myBalanceElement = document.getElementById('my-balance');
    const myBalance = parseFloat(myBalanceElement.innerText);
   
    if (isNaN(inputValue) || inputValue < 0) {
        alert('Put a valid amount number')
    }else if (myBalance >= inputValue) {
        textValue.innerText = inputValue;
        const currentBalance = myBalance - inputValue;
        myBalanceElement.innerText = currentBalance.toFixed(2);
        
    } else{
        alert('You do not have enough money to donate');
    }
  
})

document.getElementById('quota-btn').addEventListener('click',function(){
    const inputValue = getInputValue('quota-input');
    const textValue = document.getElementById('quota-amount');
    const myBalanceElement = document.getElementById('my-balance');
    const myBalance = parseFloat(myBalanceElement.innerText);
   
    if (isNaN(inputValue) || inputValue < 0) {
        alert('Put a valid amount number')
    }else if (myBalance >= inputValue) {
        textValue.innerText = inputValue;
        const currentBalance = myBalance - inputValue;
        myBalanceElement.innerText = currentBalance.toFixed(2);
        
    } else{
        alert('You do not have enough money to donate');
    }
  
})



document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "home.html";
    
})


