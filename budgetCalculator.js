let calcBtn = document.getElementById('calculateBudget')
let result = document.getElementById('budgetResults')
try {
    calcBtn.addEventListener('click', function(){
        for (let i = 0; i<1;i++){
            let newP = document.createElement('p');
            let userIncome = Number(prompt("please enter your total monthly income"));
            let userExp = Number(prompt("Please enter you total monthly expenses"));
            if (isNaN(userIncome) || isNaN(userExp)){
                window.alert("your income or spending is not number, please reload to try again")
                break 
            }
            let userSav = userIncome-userExp;

            newP.textContent = `Monthly Income: ${userIncome.toFixed(2)}`;
            result.appendChild(newP);
    
            newP = document.createElement('p');
            newP.textContent = `Monthly Expenses: ${userExp.toFixed(2)}`;
            result.appendChild(newP);
    
            newP = document.createElement('p');
            newP.textContent = `Monthly Savings: ${userSav.toFixed(2)}`;
            result.appendChild(newP); 

            if (userSav<=0){
                newp = document.createElement('p');
                newP.textContent = "Warning! you are spending too much and are about to be in debt";
                result.appendChild(newP);
            }
        }
    })

} catch (error) {

} 