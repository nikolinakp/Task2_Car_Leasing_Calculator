document.addEventListener('DOMContentLoaded', function() {
    const carTypeElement = document.getElementById('carType');
    const leasePeriodElement = document.getElementById('leasePeriod');
    const carValueElement = document.getElementById('carValue');
    const downPaymentElement = document.getElementById('downPayment');
    
    const leasingCostElement = document.getElementById('leasingCost');
    const downPaymentValueElement = document.getElementById('downPaymentValue');
    const monthlyInstallmentElement = document.getElementById('monthlyInstallment');
    const interestRateElement = document.getElementById('interestRate');
    
    function updateCalculator() {
        const carType = carTypeElement.value;
        const leasePeriod = parseInt(leasePeriodElement.value);
        const carValue = parseFloat(carValueElement.value);
        const downPaymentPercent = parseFloat(downPaymentElement.value);
        
        const downPayment = carValue * (downPaymentPercent / 100);
        const interestRate = carType === 'new' ? 2.99 : 3.7;
        const principal = carValue - downPayment;
        const monthlyRate = (interestRate / 100) / 12;
        const numberOfPayments = leasePeriod;
        
        const monthlyInstallment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        const totalLeasingCost = (monthlyInstallment * numberOfPayments) + downPayment;
        
        leasingCostElement.textContent = `€${totalLeasingCost.toFixed(2)}`;
        downPaymentValueElement.textContent = `€${downPayment.toFixed(2)}`;
        monthlyInstallmentElement.textContent = `€${monthlyInstallment.toFixed(2)}`;
        interestRateElement.textContent = `${interestRate.toFixed(2)}%`;
    }
    
    carTypeElement.addEventListener('change', updateCalculator);
    leasePeriodElement.addEventListener('input', updateCalculator);
    carValueElement.addEventListener('input', updateCalculator);
    downPaymentElement.addEventListener('input', updateCalculator);
    
    updateCalculator();

});


document.getElementById('leasingForm').addEventListener('input', function() {
    const carValue = document.getElementById('carValue').value;
    const leasePeriod = document.getElementById('leasePeriod').value;
    const downPayment = document.getElementById('downPayment').value;
    
    // Изчисления за подробностите по лизинга (примерни изчисления)
    const downPaymentValue = (carValue * (downPayment / 100)).toFixed(2);
    const totalLeasingCost = (parseFloat(carValue) + parseFloat(downPaymentValue)).toFixed(2);
    const monthlyInstallment = (totalLeasingCost / leasePeriod).toFixed(2);
    const interestRate = 2.99; // Примерна стойност
    
    document.getElementById('downPaymentValue').textContent = `€${downPaymentValue}`;
    document.getElementById('leasingCost').textContent = `€${totalLeasingCost}`;
    document.getElementById('monthlyInstallment').textContent = `€${monthlyInstallment}`;
    document.getElementById('interestRate').textContent = `${interestRate}%`;
});

function updateCarValue(value) {
    document.getElementById('carValue').value = value;
}

function updateDownPayment(value) {
    document.getElementById('downPayment').value = value;
}
