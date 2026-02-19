function getInputFrom(id){
    const inputText= document.getElementById(id);
    const inputValue = inputText.value;
    console.log(inputValue);
    return inputValue;
}

function getBalance(id){
    const balanceInput = document.getElementById("balance");
    const balance = balanceInput.innerText;
    console.log(balance);
    return Number(balance);
}
function setBalanece(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}