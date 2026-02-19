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

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Withdraw ${cashoutAmount} bdt from main balance ${balance} ${new Date()}
            </div>
        `;
        history.append(newHistory);

    }
    else {
        alert("Invalid pin");
        return;
    }
})