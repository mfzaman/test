window.onload; {  

document.getElementById('mortgageCalculator').addEventListener('submit', stopProcess);

    var monthlyIncome = document.getElementById('monthlyIncome').parseInt
    var monthyExpenses = document.getElementById('residenceExpense').parseInt
    var balance = monthlyIncome - residenceExpense
    
function calculateMortgagePayment() {
    document.getElementById('monthlyPayment').innerHTML = balance; 
};

function stopProcess(event) {
    event.preventDefault();
    alert('whoa');
    calculateMortgagePayment();  
}










}

