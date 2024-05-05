const selectButton = document.getElementById("problemButton");
const choice1 = document.getElementById("pb1");
const choice2 = document.getElementById("pb2");
const choice3 = document.getElementById("pb3");
const submitButton = document.getElementById("submitButton");
const nameinput = document.getElementById("nameinput");
const emailinput = document.getElementById("emailinput");
const problemtypeinput = document.getElementById("problemButton");
const probleminput = document.getElementById("probleminput");
const form = document.getElementById("form");
const bigdiv = document.getElementById("formdiv");

const randomH2 = document.createElement("h2");
form.appendChild(randomH2);
randomH2.style.position = "absolute";
randomH2.style.top = "50%";
randomH2.style.left = "50%";
randomH2.style.color = "red";
randomH2.style.zIndex = "2";
randomH2.style.pointerEvents = "none";

function buttonSelect(event){
    event.preventDefault();
    
    if(choice1.style.display != "none"){
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
    }
    else{
        choice1.style.display = "block";
        choice2.style.display = "block";
        choice3.style.display = "block";
    }
}

function choiceSelect(event){
    event.preventDefault();

    if(event.target.id == "pb1"){
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";

        selectButton.textContent = "Website suggestion/problem";
        selectButton.style.width = "50%";
        selectButton.style.fontSize = "2rem";
        selectButton.style.height = "8%";
    }
    else if(event.target.id =="pb2"){
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";

        selectButton.textContent = "Payment issues";
        selectButton.style.width = "30%";
        selectButton.style.fontSize = "2rem";
        selectButton.style.height = "8%";
    }
    else if(event.target.id == "pb3"){
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";

        selectButton.textContent = "Service issues";
        selectButton.style.width = "30%";
        selectButton.style.fontSize = "2rem";
        selectButton.style.height = "8%";
    }
}

function submit(event){
    event.preventDefault();
    randomH2.textContent = "";
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    if(nameinput.value == ""){
        randomH2.textContent = "Please enter your name";
        randomH2.style.top = "5%";
        randomH2.style.left = "28%";
    }
    else if(emailinput.value == ""){
        randomH2.textContent = "Please enter your email";
        randomH2.style.top = "20%";
        randomH2.style.left = "28%";
    }
    else if(problemtypeinput.textContent == "Select"){
        randomH2.textContent = "Please enter the problem type";
        randomH2.style.top = "43%";
        randomH2.style.left = "50%";
    }
    else if(probleminput.value == ""){
        randomH2.textContent = "Please enter the problem details";
        randomH2.style.top = "60%";
        randomH2.style.left = "5%";
    }
    else{
        bigdiv.innerHTML = "";
        bigdiv.appendChild(randomH2);
        randomH2.innerHTML = "Thanks for filling in our support form!<br>Your input may or may not be reviewed.";
        randomH2.style.color = "black";
        randomH2.style.fontWeight = "bold";
        randomH2.style.fontSize = "2rem";
        randomH2.style.top = "40%";
        randomH2.style.left = "17%";
    }
}

selectButton.addEventListener("click",buttonSelect);

choice1.addEventListener("click",choiceSelect);
choice2.addEventListener("click",choiceSelect);
choice3.addEventListener("click",choiceSelect);

submitButton.addEventListener("click",submit);

nameinput.addEventListener("click",() => randomH2.textContent = "");
emailinput.addEventListener("click",() => randomH2.textContent = "");
problemtypeinput.addEventListener("click",() => randomH2.textContent = "");
probleminput.addEventListener("click",() => randomH2.textContent = "");