document.getElementById("cashout-btn").addEventListener('click', function () {
    const cashoutNumber = getInputFrom("cahsout-number");
    if (cashoutNumber.length != 11) {
        alert("invalid number");
        return;
    }
    const cashoutAmount = getInputFrom("cahsout-amount");

    const balance = getBalance("balance");

    if (Number(cashoutAmount) > Number(balance) || Number(cashoutAmount) < 0) {
        alert("Invalid amount");
        return;
    }
    const pin = getInputFrom("pin");
    if (pin === '1234') {
        alert("Withdraw Successful");
        const newBalance = balance - Number(cashoutAmount);
        if (newBalance < 0) {
            alert("Invalid Amount");
            return;
        }

        setBalanece(newBalance);
    }
    else {
        alert("Invalid pin");
        return;
    }
})