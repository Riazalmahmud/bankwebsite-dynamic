


function getinputvalue() {
    const depositeInput = document.getElementById('deposit-amount');
    const depositText = depositeInput.value;
    const newDeposit = parseFloat(depositText);
    // clear input field 
    depositeInput.value = '';
    return newDeposit;

}





document.getElementById('deposit-submit').addEventListener('click', function () {

    // get deposit section 
    // const depositeInput = document.getElementById('deposit-amount');
    // const depositText = depositeInput.value;
    // const newDeposit = parseFloat(depositText);

    const newDeposit = getinputvalue();

    // get deposit balance and transfer deposit box 
    const depositBalance = document.getElementById('deposit-total');
    const DepositBalanceText = depositBalance.innerText;
    const priviousDepositBalance = parseFloat(DepositBalanceText);
    const totalDeposit = priviousDepositBalance + newDeposit;
    depositBalance.innerText = totalDeposit;

    // total balance box 

    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const priviousBalance = parseFloat(balanceText);
    const totalBalance = priviousBalance + newDeposit;
    balance.innerText = totalBalance;
    // clear input field 
    // depositeInput.value = '';

})


// get withdrow balance 

document.getElementById('withdow-submit').addEventListener('click', function () {

    // get new withdrow Balance 
    const withdrowInput = document.getElementById('withdow-amount');
    const withDrowtext = withdrowInput.value;
    const newWithdrow = parseFloat(withDrowtext);
    console.log('newWithdrow')

    // get add withdrow balance 
    const withdrow = document.getElementById('withdow-total');
    const withdrowText = withdrow.innerText;
    const previousWithdrow = parseFloat(withdrowText);
    const totalWithdrow = previousWithdrow + newWithdrow;
    withdrow.innerText = totalWithdrow;

    // get withdrow subtraction balance 
    const balanceWithdrow = document.getElementById('balance-total');
    const balanceWithdrowText = balanceWithdrow.innerText;
    const priviousWithdrowBalance = parseFloat(balanceWithdrowText);
    const totalWithdrowBalance = priviousWithdrowBalance - newWithdrow;
    balanceWithdrow.innerText = totalWithdrowBalance;

    // clear withdrow Field 
    withdrowInput.value = '';
})