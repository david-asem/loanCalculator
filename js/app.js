//listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//calculate results function
function calculateResults(e) {
  console.log('calculating....');

  //UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const lTerm = document.getElementById('loan-term');
  const monthly_payment = document.getElementById('monthly-payment');
  const total_interest = document.getElementById('total-interest');
  const total_payment = document.getElementById('total-payment');


  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  calculatedPayments = parseFloat(lTerm.value) * 12;


  //compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthly_payment.value = monthly.toFixed(3);
    total_payment.value = (monthly * calculatedPayments).toFixed(3);
  }
  e.preventDefault();
}