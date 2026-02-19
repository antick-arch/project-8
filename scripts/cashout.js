document.getElementById("cashout-btn").addEventListener('click', function () {
    const cashoutNumber = getInputFrom("cahsout-number");
    if(cashoutNumber.length != 11){
        alert("invalid number");
        return;
    }
    const cashoutAmount = getInputFrom("cahsout-amount");

    const balanceInput = document.getElementById("balance");
    const balance = balanceInput.innerText;
    console.log(balance);

    if (Number(cashoutAmount) > Number(balance) || Number(cashoutAmount) < 0) {
        alert("Invalid amount");
        return;
    }
    const pin = getInputFrom("pin");
    if (pin === '1234') {
        alert("Withdraw Successful");
        const newBalance = Number(balance) - Number(cashoutAmount);
        if(newBalance<0){
            alert("Invalid Amount");
            return;
        }
        balanceInput.innerText = newBalance;
    }
    else{
        alert("Invalid pin");
        return;
    }
})