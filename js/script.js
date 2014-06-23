function stopProcess(event) {
    event.preventDefault();
    
    var monthlyIncome = parseInt(document.getElementById('monthlyIncome').value, 10) || 0,
    residenceExpense = parseInt(document.getElementById('residenceExpense').value, 10) || 0,
    utilities = parseInt(document.getElementById('utilities').value, 10) || 0,
    creditCards = parseInt(document.getElementById('creditCards').value, 10) || 0,
    carPayments = parseInt(document.getElementById('carPayments').value, 10) || 0,
    loans = parseInt(document.getElementById('loans').value, 10) || 0,
    alimony = parseInt(document.getElementById('alimony').value, 10) || 0,
    other = parseInt(document.getElementById('other').value, 10) || 0;
    
    
    var balance = (residenceExpense + utilities + creditCards + carPayments + loans + alimony +  loans + other) - monthlyIncome;
    
    function calculateMortgagePayment() {
    document.getElementById('monthlyPayment').value = balance;
    
    if (document.getElementById('monthlyIncome').value === '') {
        alert('please enter Monthly Income');
        document.getElementById('monthlyIncome').focus();
    }
    
    };

calculateMortgagePayment();
    
};

function tabController() {
    document.getElementById('tabGroup').className = "ready";
    
    var tabHeaders = document.getElementsByClassName('tabHeader');
    for (var i = 0; i < tabHeaders.length; i++) {
        tabHeaders[i].addEventListener('click', activateTab);
    }
    
    function activateTab(event) {
        var myID = this.id;
        console.log(myID);
    }
    
};

window.onload; {  

document.getElementById('mortgageCalculator').addEventListener('submit', stopProcess);
document.addEventListener('DOMContentLoaded', tabController);

}

