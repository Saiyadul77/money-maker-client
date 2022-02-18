const totalIncome = document.getElementById('income-total');
const totalFood = document.getElementById('food-total');
const totalRent = document.getElementById('rent-total');
const totalClothes = document.getElementById('clothes-total');
const totalCalculation = document.getElementById('calculate-all');
const totalExpense = document.getElementById('total-expenses');
const totalBalance = document.getElementById('total-balance');
const savePercentage = document.getElementById('save-percentage');
const calculateSave = document.getElementById('calculate-save');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');
// function for input value
function getInputValue(boxID) {
    let inputBox = document.getElementById(boxID);
    let inputAmount = parseFloat(inputBox.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.value = '';
        return alert('Please input valid number');
    }
    // inputBox.value = '';
    return inputAmount;
}
// calculate all input like income, cost
totalCalculation.addEventListener('click', function (event) {
    let inputAmount = getInputValue('income-total');
    let totalFood = getInputValue('food-total');
    let totalRent = getInputValue('rent-total');
    let totalClothes = getInputValue('clothes-total');
    if (inputAmount < (totalFood + totalRent + totalClothes)) {
        totalBalance.innerText = '0';
        totalExpense.innerText = '0';
        return alert('You have no available balance.')
    }
    if (isNaN(inputAmount) || inputAmount < 0) {
        totalBalance.innerText = '0';
        totalExpense.innerText = '0';
        return alert('Please input valid number')
    }
    totalExpense.innerText = totalFood + totalRent + totalClothes;
    let cost = parseFloat(totalExpense.innerText);
    totalBalance.innerText = inputAmount - cost;
})

// calculate saving amount
calculateSave.addEventListener('click', function () {
    saveUpdateValue();
})

function saveUpdateValue(boxID) {
    let inputAmount = getInputValue('save-percentage');
    if (isNaN(inputAmount) || inputAmount < 0) {
        savingAmount.innerText = '0';
        remainingBalance.innerText = '0';
        return alert('Please input valid number')
    }
    let saveAmount = (inputAmount * parseFloat(totalBalance.innerText)) / 100;
    savingAmount.innerText = saveAmount;
    remainingBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(savingAmount.innerText);
}