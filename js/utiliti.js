function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldnewValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldnewValue;
}

function getTextElemetnValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValueVariable){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValueVariable;
}