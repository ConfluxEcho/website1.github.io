const usernameinput = document.getElementById("user");
const passwordinput = document.getElementById("pass");
const h2signup = document.getElementById("dumbH2");

const loginuserinput = document.getElementById("loguser");
const loginpassinput = document.getElementById("logpass");
const h2login = document.getElementById("loginH2");

let loggedIn = false;
let currentName = "none";

const users = {
    user1:{password:"pass1234",name:"user1",spent:0,budget:0,earnings:0,balance:0,savings:0,goal:0}
}

function signup(){
    const user = usernameinput.value;
    const pass = passwordinput.value;
    const storedUsers = localStorage.getItem("users");
    const parsedUsers = storedUsers ? JSON.parse(storedUsers) : {user1:{password:"pass1234",name:"user1",spent:0,budget:0,earnings:0,balance:0,savings:0,goal:0}};
    if(user.length === 0 || pass.length === 0 || user in parsedUsers){
        h2signup.textContent = "Try again";
        setTimeout(() => {
            h2signup.textContent = "Sign up"
        },1000);
    }
    else{
        parsedUsers[user] = {password:pass,name:user,spent:0,budget:0,earnings:0,balance:0,savings:0,goal:0};
        loggedIn = "true";
        currentName = usernameinput.value;
        localStorage.setItem("currentName",currentName);
        localStorage.setItem("loginsave",loggedIn);
        localStorage.setItem("users",JSON.stringify(parsedUsers));
        window.location.href = "../MainFolder/setup.html";
    }
}

function login(){
    const user = loginuserinput.value;
    const pass = loginpassinput.value;
    const storedUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(storedUsers);
    if(parsedUsers == null){
            h2login.textContent = "Incorrect";
            setTimeout(() => {
                h2login.textContent = "Log in"
            },1000);
        return;
    }
    if(user in parsedUsers){
        if(parsedUsers[user].password == pass){
            loggedIn = true;
            localStorage.setItem("loginsave",loggedIn);
            localStorage.setItem("currentName",user);
            window.location.href = "../MainFolder/overview.html";
        }
        else{
            console.log(parsedUsers);
            h2login.textContent = "Incorrect";
            setTimeout(() => {
                h2login.textContent = "Log in"
            },1000);
        }
    }
    else{
        console.log(parsedUsers);
        h2login.textContent = "Incorrect";
        setTimeout(() => {
            h2login.textContent = "Log in"
        },1000);
    }
}