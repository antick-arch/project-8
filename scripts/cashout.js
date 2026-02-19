document.getElementById("cashout-btn").addEventListener('click', function () {
    const cashoutNumberInput = document.getElementById("cahsout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);

    const cashoutAmountInut = document.getElementById("cahsout-amount");
    const cashoutAmount = cashoutAmountInut.value;
    console.log(cashoutAmount);

    const balanceInput = document.getElementById("balance")
    const balance = balanceInput.innerText;
    console.log(balance);

    if (Number(cashoutAmount) > Number(balance)) {
        alert("Invalid amount");
        return;
    }
    const pinInput = document.getElementById("pin");
    const pin = pinInput.value;
    console.log(pin);
    if (pin === '1234') {
        alert("Withdraw Successful");
        const newBalance = Number(balance) - Number(cashoutAmount);
        balanceInput.innerText = newBalance;
    }
    else{
        alert("Invalid pin");
        return;
    }
})