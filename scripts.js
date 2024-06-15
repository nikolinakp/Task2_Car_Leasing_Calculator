document.addEventListener('DOMContentLoaded', function() {
    const carType = document.getElementById('carType');
    const leasePeriod = document.getElementById('leasePeriod');
    const carValue = document.getElementById('carValue');
    const downPayment = document.getElementById('downPayment');

    const leasingCost = document.getElementById('leasingCost');
    const downPaymentValue = document.getElementById('downPaymentValue');
    const monthlyInstallment = document.getElementById('monthlyInstallment');
    const interestRate = document.getElementById('interestRate');

    function calculateLease() {
        const carValueNumber = parseFloat(carValue.value);
        const downPaymentPercentage = parseFloat(downPayment.value);
        const leasePeriodNumber = parseInt(leasePeriod.value);

        let rate;
        if (carType.value === 'new') {
            rate = 2.99;
        } else {
            rate = 3.7;
        }

        const downPaymentAmount = (carValueNumber * downPaymentPercentage) / 100;
        const amountFinanced = carValueNumber - downPaymentAmount;
        const monthlyRate = rate / 100 / 12;
        const monthlyPayment = amountFinanced * monthlyRate / (1 - Math.pow((1 + monthlyRate), -leasePeriodNumber));
        const totalLeaseCost = (monthlyPayment * leasePeriodNumber) + downPaymentAmount;

        leasingCost.textContent = `€${totalLeaseCost.toFixed(2)}`;
        downPaymentValue.textContent = `€${downPaymentAmount.toFixed(2)}`;
        monthlyInstallment.textContent = `€${monthlyPayment.toFixed(2)}`;
        interestRate.textContent = `${rate.toFixed(2)}%`;
    }

    carType.addEventListener('change', calculateLease);
    leasePeriod.addEventListener('input', calculateLease);
    carValue.addEventListener('input', calculateLease);
    downPayment.addEventListener('input', calculateLease);

    calculateLease();
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
