let calcBtn = document.getElementById('calculateBudget')
calcBtn.addEventListener('click', function(){
    for (let i = 0; i<12;i++){
        let userIncome = Number(prompt("please enter your total monthly income"));
        let userExp = Number(prompt("Please enter you total monthly expenses"));
        let userSav = userIncome-userExp;
        if (userSav<=0){
            window.alert("Warning: Spending exceeds income!")
        }
        document.getElementById("budgetResults").textContent = '$' + userExp.toFixed(2); 
        document.getElementById("budgetResults").textContent = '$' + userIncome.toFixed(2);
        document.getElementById("budgetResults").textContent = '$' + userSav.toFixed(2);
    }
})
