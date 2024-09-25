function getInputValue (id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}
function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}