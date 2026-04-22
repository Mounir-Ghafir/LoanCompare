export function calculateMonthlyPayment(amount, rate, years) {
  const months = years * 12;
  
  if (rate === 0) {
    return amount / months;
  }
  
  const monthlyRate = rate / 100 / 12;
  const payment = (amount * monthlyRate) / (1 - 1 / Math.pow(1 + monthlyRate, months));
  
  return Math.round(payment * 100) / 100;
}

export function calculateTotalCost(payment, years) {
  return payment * years * 12;
}