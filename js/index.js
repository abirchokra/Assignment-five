document.getElementById('history-btn').addEventListener('click', function () {
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');
    const card = document.getElementById('card');
    const history = document.getElementById('history-section');
    const footer = document.getElementById('footer-section');



    card.classList.add('hidden');
    history.classList.remove('hidden');
    footer.classList.add('hidden');

    donationBtn.classList.remove('bg-lime-400');
    historyBtn.classList.add('bg-lime-400');



})

document.getElementById('donation-btn').addEventListener('click', function () {
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');
    const card = document.getElementById('card');
    const history = document.getElementById('history-section');
    const footer = document.getElementById('footer-section');



    history.classList.add('hidden');
    footer.classList.remove('hidden');
    card.classList.remove('hidden');
    donationBtn.classList.add('bg-lime-400');
    historyBtn.classList.remove('bg-lime-400');

})


document.getElementById('noakhali-btn').addEventListener('click', function () {
    const inputValue = getInputValue('noakhali-input');
    const congrats = document.getElementById('Congrates-noa');



    const textValue = document.getElementById('noakhali-amount');
    const myBalanceElement = document.getElementById('my-balance');
    const myBalance = parseFloat(myBalanceElement.innerText);
    const historyNew = document.createElement('div');
    historyNew.className = 'border border-gray-400 rounded-lg shadow-lg p-4 h-[150px] flex flex-col justify-center space-y-3 mx-4 md:mx-0';

    const historyDiv = document.getElementById('history-section');

    const currentDateTime = new Date();

    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();


    if (isNaN(inputValue) || inputValue < 0) {
        alert('Put a valid amount number');
    } else if (myBalance >= inputValue) {
        textValue.innerText = inputValue.toFixed(2);
        const currentBalance = myBalance - inputValue;
        myBalanceElement.innerText = currentBalance.toFixed(2);
        congrats.classList.remove('hidden');
        historyNew.innerHTML = `
        
        <h2 class='text-xl font-bold'> ${inputValue.toFixed(2)} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h2>
        <p class='text-gray-500'>Date: ${formattedDate} ${formattedTime} GMT +0600 (Bangladesh Standard Time)</p>
       
    
    
    `
        historyDiv.insertBefore(historyNew, historyDiv.firstChild);

    } else {
        alert('You do not have enough money to donate');
    }
})

document.getElementById('feni-btn').addEventListener('click', function () {
    const inputValue = getInputValue('feni-input');
    const congrats = document.getElementById('Congrates-feni');
    const textValue = document.getElementById('feni-amount');
    const myBalanceElement = document.getElementById('my-balance');
    const myBalance = parseFloat(myBalanceElement.innerText);
    const historyNew = document.createElement('div');
    historyNew.className = 'border border-gray-400 rounded-lg shadow-lg p-4 h-[150px] flex flex-col justify-center space-y-3 mx-4 md:mx-0';

    const historyDiv = document.getElementById('history-section');

    const currentDateTime = new Date();

    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();
    historyNew.innerHTML = `
        
        <h2 class='text-xl font-bold'> ${inputValue.toFixed(2)} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <p class='text-gray-500'>Date: ${formattedDate} ${formattedTime} GMT +0600 (Bangladesh Standard Time)</p>
        
    
    
    `
    historyDiv.insertBefore(historyNew, historyDiv.firstChild);

    if (isNaN(inputValue) || inputValue < 0) {
        alert('Put a valid amount number');
    } else if (myBalance >= inputValue) {
        textValue.innerText = inputValue.toFixed(2);
        const currentBalance = myBalance - inputValue;
        myBalanceElement.innerText = currentBalance.toFixed(2);
        congrats.classList.remove('hidden');

    } else {
        alert('You do not have enough money to donate');
    }

})

document.getElementById('quota-btn').addEventListener('click', function () {
    const inputValue = getInputValue('quota-input');
    const congrats = document.getElementById('Congrates-quota');
    const textValue = document.getElementById('quota-amount');
    const myBalanceElement = document.getElementById('my-balance');
    const myBalance = parseFloat(myBalanceElement.innerText);
    const historyNew = document.createElement('div');
    historyNew.className = 'border border-gray-400 rounded-lg shadow-lg p-4 h-[150px] flex flex-col justify-center space-y-3 mx-4 md:mx-0';

    const historyDiv = document.getElementById('history-section');

    const currentDateTime = new Date();

    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();
    const warning = document.getElementById('alert');
    historyNew.innerHTML = `
        
        <h2 class='text-xl font-bold'> ${inputValue.toFixed(2)} Taka is Donated for famine-2024 at Quota Movement, Bangladesh</h2>
        <p class='text-gray-500'>Date: ${formattedDate} ${formattedTime} GMT +0600 (Bangladesh Standard Time)</p>
        
    
    
    `
    historyDiv.insertBefore(historyNew, historyDiv.firstChild);


    if (isNaN(inputValue) || inputValue < 0) {
        alert('Put a valid amount number')
    } else if (myBalance >= inputValue) {
        textValue.innerText = inputValue.toFixed(2);
        const currentBalance = myBalance - inputValue;
        myBalanceElement.innerText = currentBalance.toFixed(2);
        congrats.classList.remove('hidden');

    } else {
        alert('You do not have enough money to donate');


    }

})



document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "home.html";

})


document.getElementById('close-noa').addEventListener('click', function () {
    const congrats = document.getElementById('Congrates-noa');
    congrats.classList.add('hidden');
})
document.getElementById('close-feni').addEventListener('click', function () {
    const congrats = document.getElementById('Congrates-feni');
    congrats.classList.add('hidden');
})
document.getElementById('close-quota').addEventListener('click', function () {
    const congrats = document.getElementById('Congrates-quota');
    congrats.classList.add('hidden');
})