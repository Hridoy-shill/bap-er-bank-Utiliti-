document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputFieldnewValue = getInputFieldValueById('deposit-field');
    
    const previwesDepositValue = getTextElemetnValueById('total-deposit');

    const newDepositValue = previwesDepositValue + inputFieldnewValue;

    setTextElementValueById('total-deposit', newDepositValue);

    const previwesTotalAmount = getTextElemetnValueById('total-balance')
    const newTotalAmount = previwesTotalAmount + newDepositValue;
    setTextElementValueById('total-balance', newTotalAmount);
})