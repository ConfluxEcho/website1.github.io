const statsselectBtn = document.getElementById("selectionButton");
const selectiondiv = document.getElementById("selectiondiv");
const statsBtn1 = document.getElementById("slctbtn1");
const statsBtn2 = document.getElementById("slctbtn2");
const statsBtn3 = document.getElementById("slctbtn3");
const statsBtn4 = document.getElementById("slctbtn4");
const mainH1 = document.getElementById("mainH1");
const spentLabel = document.getElementById("spentlabel");
const budgetLabel = document.getElementById("budgetlabel");
const earningsLabel = document.getElementById("earningslabel");
const balanceLabel = document.getElementById("sumlabel");
const savingsLabel = document.getElementById("savingslabel");
const goalLabel = document.getElementById("goallabel");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

statsselectBtn.addEventListener("click",(event) => {
    if(selectiondiv.classList.contains("displayblock")){
        selectiondiv.classList.remove("displayblock");
        selectiondiv.classList.add("displaynone");
    }
    else if(selectiondiv.classList.contains("displaynone")){
        selectiondiv.classList.remove("displaynone");
        selectiondiv.classList.add("displayblock");
    }
})

window.onload = function(){
    const users = JSON.parse(localStorage.getItem("users"));
    const user = localStorage.getItem("currentName");
    const name = users[user].name;
    mainH1.textContent = `Welcome, ${name}`;

    const spent = Number(users[user].spent).toFixed(2);
    const budget = Number(users[user].budget).toFixed(2);
    const earnings = Number(users[user].earnings).toFixed(2);
    const balance = Number(users[user].balance).toFixed(2);
    const savings = Number(users[user].savings).toFixed(2);
    const goal = Number(users[user].goal).toFixed(2);
    spentLabel.textContent = `Spent: ${spent}$`;
    budgetLabel.textContent = `Budget: ${budget}$`;
    earningsLabel.textContent = `Earnings: ${earnings}$`;
    balanceLabel.textContent = `Balance: ${balance}$`;
    savingsLabel.textContent = `Savings: ${savings}$`;
    goalLabel.textContent = `Goal: ${goal}$`;

    const spendPercent = spent / budget;
    const earnPercent = earnings / balance;
    const savePercent = savings / goal;
    bar1.style.width = `${spendPercent * 100}%`;
    bar2.style.width = `${earnPercent * 100}%`;
    bar3.style.width = `${savePercent * 100}%`;
}

function reload(arg){
    const users = JSON.parse(localStorage.getItem("users"));
    const user = localStorage.getItem("currentName");
    
    const newSpent = eval(`${users[user].spent} / arg`).toFixed(2);
    const newBudget = eval(`${users[user].budget} / arg`).toFixed(2);
    const newEarnings = eval(`${users[user].earnings} / arg`).toFixed(2);
    const newSavings = eval(`${users[user].savings} / arg`).toFixed(2);
    spentLabel.textContent = `Spent: ${newSpent}$`;
    budgetLabel.textContent = `Budget: ${newBudget}$`;
    earningsLabel.textContent = `Earnings: ${newEarnings}$`;
    savingsLabel.textContent = `Savings: ${newSavings}$`;

    const spendPercent = newSpent / newBudget;
    const earnPercent = newEarnings / users[user].balance;
    const savePercent = newSavings / users[user].goal;
    bar1.style.width = `${spendPercent * 100}%`;
    bar2.style.width = `${earnPercent * 100}%`;
    bar3.style.width = `${savePercent * 100}%`;
}

function selectStats(event){
    event.preventDefault();
    const time = event.target.textContent;
    statsselectBtn.textContent = `Statistics for: ${time}`;
    selectiondiv.classList.replace("displayblock","displaynone");
    switch(time){
        case "Day":
            reload(28);
            break;
        case "Week":
            reload(4);
            break;
        case "Month":
            reload(1);
            break;
        case "Year":
            reload(0.083);
            break;
    }
}

statsBtn1.addEventListener("click",selectStats);
statsBtn2.addEventListener("click",selectStats);
statsBtn3.addEventListener("click",selectStats);
statsBtn4.addEventListener("click",selectStats);