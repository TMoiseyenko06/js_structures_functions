let balanceText = document.getElementById("balance");
let depositBtn = document.getElementById("deposit");
let withdrawBtn = document.getElementById("withdraw");

let balance = 0;

const updateBalance = (amount) => {
  balanceText.textContent = `$${amount}`;
};

const withdraw = (amount) => {
    if (amount <= balance){
        balance -= amount;
        updateBalance(balance)
    } else{
        alert("You do not have that much money to withdraw!")
    }
};

const deposit = (amount) => {
  balance += amount;
  updateBalance(balance);
};


depositBtn.addEventListener("click",() => {
    if (amountInput.value){
        deposit(Number(amountInput.value))
    }else{
        alert("Please enter an amount!")
    }
    
});

withdrawBtn.addEventListener("click",() => {
    if (amountInput.value){
    withdraw(Number(amountInput.value))
    }else{
        alert("Please enter an amount!")
    }
});