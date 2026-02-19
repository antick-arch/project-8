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

function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");

    const selectedId = document.getElementById(id);
    selectedId.classList.remove("hidden");
}