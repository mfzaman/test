<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<title>Test project in GitHub</title>
<link rel="stylesheet" href="styles/default.css">
</head>

<body>
    
<form id="mortgageCalculator" action="go.html" method="post">
    
    <div class="mortgage personalInformation">
        <label for="customerNameField"></label>
        <input type="text" id="customerNameField" size="20" placeholder="Enter Name">
        <label for="customerEmailAddress"></label>
        <input type="email" id="customerEmailAddress" size="20" placeholder="Enter Email Address">
    </div>
    
    <div class="mortgage amount">
        <label for="mortgageAmount">Loan Amount</label>
        <input type="number" id="mortgageAmount" size="20" placeholder="$0">
    </div>
    
    <div class="mortgage income">
        <label for="monthlyIncome">Monthly Income</label>
        <input type="number" id="monthlyIncome" size="10" placeholder="$0">
    </div>
    
    <div class="mortgage expenses">
        <label for="monthlyExpenses" class="larger">Monthly Expenses<br/> </label>
        <p>List all expense including rent, existing mortgage, utilities, credit card payments, etc.</p>
        <fieldset id="monthlyExpenses" class="mortgage">
            <input type="number" id="residenceExpense" size="20" placeholder="Residence (rent)">
            <input type="number" id="utilities" size="20" placeholder="Utilities">
            <input type="number" id="creditCards" size="20" placeholder="Credit Cards">
            <input type="number" id="carPayments" size="20" placeholder="Car Payments">
            <input type="number" id="loans" size="20" placeholder="Outstanding Loans">
            <input type="number" id="alimony" size="20" placeholder="Alimony / Child Support">
            <input type="number" id="loans" size="20" placeholder="Outstanding Loans">
            <input type="number" id="other" size="20" placeholder="Other">
        </fieldset>
    </div>
    
    <div class="mortgage paymentTerms">
        <label for="paymentTerms" class="larger">Payment Terms</label>
        <input type="radio" name="paymentTerms" value="15 Year Mortgage">
    </div>
    
    <div class="mortgage submitForm">
        <input id="calculate" type="submit" value="Estimate Monthly Payment" >
    </div>
    
    <div class="mortgage monthlyPayment">
        <input type="number" id="monthlyPayment" size="15" placeholder="$0">
        <label for="monthlyPayment">Per Month</label>
    </div>
    
</form>

<div id="tabGroup">
    
    <div class="tab-content" id="tab1">
    <h3 class="tabHeader" id="header1">Monthly Payments</h3>
    <div id="content1">
        Use the form above to estimate your monthly payments.
    </div>
    </div>
    
    <div class="tab-content" id="tab2">
    <h3 class="tabHeader" id="header2">Interest &amp; Payments</h3>
    <div id="content2">
        Use the form above to find out how much interest you will pay.
    </div>
    </div>
    
    <div class="tab-content" id="tab3">
    <h3 class="tabHeader" id="header3">Compare 15 / 30</h3>
    <div id="content3">
        Use the form above to compare Mortgage Repayment Terms.
    </div>
    </div>
      
</div>

<div id="footer">
    <div class="footerContent">
        Temporary footer content.
    </div>
</div>

</body>
<script src="js/script.js" type="text/javascript"></script>
</html>
