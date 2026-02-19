document.getElementById("add-money-btn").addEventListener('click',function(){
    const bankAcc = getInputFrom("add-money-bank");
    if(bankAcc === 'Select bank'){
        alert("Please select Bank");
        return;
    }
    const addMoneyNumber = getInputFrom("add-money-number");
    if(addMoneyNumber.length != 11){
        alert("Invalid Number");
        return;
    }
    const addMoneyAmount  = getInputFrom("add-money-amount");
    const newBalance = Number(addMoneyAmount) + getBalance("balance");
    const pin = getInputFrom("add-money-pin");
    if(pin === '1234'){
        alert(`New balance added from ${bankAcc} and your current balance is ${newBalance}
            ${new Date()}`)
        setBalanece(newBalance);
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        ${addMoneyAmount} bdt added from ${bankAcc} bank and your current balance is ${newBalance} ${new Date()}
            </div>
        `;
        history.append(newHistory);
    }
    else{
        alert("Invalid pin. \n Please try again");
        return;
    }
})