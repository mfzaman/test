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

function resetTabs() {
    
    var headerClass = 'tabHeader';
    var contentClass = 'tabContent';
    
    var tabHeaders = document.getElementsByClassName('tabHeader');
    var tabContents = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabHeaders.length; i++) {
        tabHeaders[i].className = headerClass;
        tabContents[i].className = contentClass;
    }
};

function tabController() {
    document.getElementById('tabGroup').className = "ready";
    
    var tabHeaders = document.getElementsByClassName('tabHeader');
    for (var i = 0; i < tabHeaders.length; i++) {
        tabHeaders[i].addEventListener('click', activateTab);
    }
    
    function activateTab(event) {
        var myID = this.id, contentID = myID.replace('header', 'content');
        resetTabs();
        document.getElementById(myID).className = "tabHeader active";
        document.getElementById(contentID).className = "tabContent active";
        console.log(contentID);
        console.log(myID);
    }
};

function drawMap() {
var mapOptions = {
center: new google.maps.LatLng(40.6881559, -73.8325258),
zoom: 15
};
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}
    
window.onload; {  
document.getElementById('mortgageCalculator').addEventListener('submit', stopProcess);
document.addEventListener('DOMContentLoaded', tabController);
document.addEventListener('DOMContentLoaded', drawMap);
}


