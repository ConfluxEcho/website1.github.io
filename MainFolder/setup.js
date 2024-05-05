const spenddiv = document.getElementById("spenddiv");
const budgetdiv = document.getElementById("budgetdiv");
const earndiv = document.getElementById("earningsdiv");
const balancediv = document.getElementById("balancediv");
const savediv = document.getElementById("savingsdiv");
const goaldiv = document.getElementById("goaldiv");
const spendinput = document.getElementById("spendinput");
const budgetinput = document.getElementById("budgetinput");
const earninput = document.getElementById("earningsinput");
const balanceinput = document.getElementById("balanceinput");
const saveinput = document.getElementById("savingsinput");
const goalinput = document.getElementById("goalinput");
const randomH4 = document.createElement("h4");

randomH4.style.fontSize = "2.5rem";
randomH4.style.color = "red";
randomH4.style.position = "relative";
randomH4.style.pointerEvents = "none";

function nextFrame(num){
    switch(num){
        case 1:
            spenddiv.style.display = "none";
            budgetdiv.style.display = "block";
            break;
        case 2:
            budgetdiv.style.display = "none";
            earndiv.style.display = "block";
            break;
        case 3:
            earndiv.style.display = "none";
            balancediv.style.display = "block";
            break;
        case 4:
            balancediv.style.display = "none";
            savediv.style.display = "block";
            break;
        case 5:
            savediv.style.display = "none";
            goaldiv.style.display = "block";
            break;
    }
}

function prevFrame(num){
    switch(num){
        case 2:
            budgetdiv.style.display = "none";
            spenddiv.style.display = "block";
            break;
        case 3:
            earndiv.style.display = "none";
            budgetdiv.style.display = "block";
            break;
        case 4:
            balancediv.style.display = "none";
            earndiv.style.display = "block";
            break;
        case 5:
            savediv.style.display = "none";
            balancediv.style.display = "block";
            break;
        case 6:
            goaldiv.style.display = "none";
            savediv.style.display = "block";
    }
}

function submit(){
    goaldiv.style.display = "none";
    if(randomH4){
        randomH4.remove();
    }
    switch(true){
        case isNaN(spendinput.value):
            spenddiv.style.display = "block";
            randomH4.style.left = "12%";
            randomH4.style.top = "50%";
            randomH4.textContent = "Enter a valid value";
            spenddiv.appendChild(randomH4);
            break;
        case isNaN(budgetinput.value):
            budgetdiv.style.display = "block";
            randomH4.style.left = "12%";
            randomH4.style.top = "50%";
            randomH4.textContent = "Enter a valid value";
            budgetdiv.appendChild(randomH4);
            break;
        case isNaN(earninput.value):
            earndiv.style.display = "block";
            randomH4.style.left = "12%";
            randomH4.style.top = "50%";
            randomH4.textContent = "Enter a valid value";
            earndiv.appendChild(randomH4);
            break;
        case isNaN(balanceinput.value):
            balancediv.style.display = "block";
            randomH4.style.left = "12%";
            randomH4.style.top = "50%";
            randomH4.textContent = "Enter a valid value";
            balancediv.appendChild(randomH4);
            break;
        case isNaN(saveinput.value):
            savediv.style.display = "block";
            randomH4.style.left = "12%";
            randomH4.style.top = "50%";
            randomH4.textContent = "Enter a valid value";
            savediv.appendChild(randomH4);
            break;
        case isNaN(goalinput.value):
            goaldiv.style.display = "block";
            randomH4.style.left = "12%";
            randomH4.style.top = "50%";
            randomH4.textContent = "Enter a valid value";
            goaldiv.appendChild(randomH4);
            break;
        default:
            switch(""){
                case spendinput.value:
                    spenddiv.style.display = "block";
                    randomH4.style.left = "12%";
                    randomH4.style.top = "50%";
                    randomH4.textContent = "Enter a valid value";
                    spenddiv.appendChild(randomH4);
                    break;
                case budgetinput.value:
                    budgetdiv.style.display = "block";
                    randomH4.style.left = "12%";
                    randomH4.style.top = "50%";
                    randomH4.textContent = "Enter a valid value";
                    budgetdiv.appendChild(randomH4);
                    break;
                case earninput.value:
                    earndiv.style.display = "block";
                    randomH4.style.left = "12%";
                    randomH4.style.top = "50%";
                    randomH4.textContent = "Enter a valid value";
                    earndiv.appendChild(randomH4);
                    break;
                case balanceinput.value:
                    balancediv.style.display = "block";
                    randomH4.style.left = "12%";
                    randomH4.style.top = "50%";
                    randomH4.textContent = "Enter a valid value";
                    balancediv.appendChild(randomH4);
                    break;
                case saveinput.value:
                    savediv.style.display = "block";
                    randomH4.style.left = "12%";
                    randomH4.style.top = "50%";
                    randomH4.textContent = "Enter a valid value";
                    savediv.appendChild(randomH4);
                    break;
                case goalinput.value:
                    goaldiv.style.display = "block";
                    randomH4.style.left = "12%";
                    randomH4.style.top = "50%";
                    randomH4.textContent = "Enter a valid value";
                    goaldiv.appendChild(randomH4);
                    break;
                default:
                    const users = JSON.parse(localStorage.getItem("users"));
                    const user = localStorage.getItem("currentName");
                    users[user].spent = spendinput.value;
                    users[user].budget = budgetinput.value;
                    users[user].earnings = earninput.value;
                    users[user].balance = balanceinput.value;
                    users[user].savings = saveinput.value;
                    users[user].goal = goalinput.value;
                    localStorage.setItem("users",JSON.stringify(users));
                    window.location.href = "overview.html";
            }
    }
}