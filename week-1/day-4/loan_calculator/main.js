let loanAmount = document.getElementById('loan-amount');
let interestRate = document.getElementById('interest-rate');
let yearsToPay = document.getElementById('years-to-pay');
function calculateLoan(e) {
    e.preventDefault();
    console.log("hey")

    const loan = loanAmount.value;
    const interest = interestRate.value;
    const years = yearsToPay.value;

    const total = loan * Math.pow(1 + interest / 100, years);
    loanAmount.value = '';
    interestRate.value = '';
    yearsToPay.value =  '';

    console.log(years);
}