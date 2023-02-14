document.getElementById('withdraw-btn').addEventListener('click', function(){
    const inputFieldnewValue = getInputFieldValueById('withdraw-field');
    const previwesWithdrawValue = getTextElemetnValueById('total-withdraw');
    
    const totalWithdrawValue = previwesWithdrawValue + inputFieldnewValue;
    
    setTextElementValueById('total-withdraw', totalWithdrawValue);

    const previwesTotalBalance = getTextElemetnValueById('total-balance');
    const newTotalBalance = previwesTotalBalance - inputFieldnewValue;

    setTextElementValueById('total-balance', newTotalBalance);
})