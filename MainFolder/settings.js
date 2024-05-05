const submitButton = document.getElementById("submitButton");
const nameinput = document.getElementById("nameinput");
const userinput = document.getElementById("userinput");
const passinput = document.getElementById("passinput");
const logoutButton = document.getElementById("logoutButton");

function settings(event){
    event.preventDefault();
    const name = nameinput.value;
    const user = userinput.value;
    const pass = passinput.value;
    const oldUser = localStorage.getItem("currentName");
    const users = localStorage.getItem("users");
    const parsedUsers = JSON.parse(users);
    if(user != oldUser){
        parsedUsers[user] = parsedUsers[oldUser];
        delete parsedUsers[oldUser];
    }
    console.log(parsedUsers);
    parsedUsers[user].password = pass;
    parsedUsers[user].name = name;
    localStorage.setItem("users",JSON.stringify(parsedUsers));
    localStorage.setItem("currentName",user);
    submitButton.textContent = "Changes saved";
    setTimeout(() => submitButton.textContent = "Apply changes",1000);
}

function logOut(event){
    event.preventDefault();
    const loggedIn = "false";
    localStorage.setItem("loginsave",loggedIn);
    window.location.href = "../StartFolder/index.html";
    localStorage.setItem("currentName","");
}

window.onload = function(){
    const users = JSON.parse(localStorage.getItem("users"));
    const user = localStorage.getItem("currentName");
    const name = users[user].name;
    const pass = users[user].password;
    nameinput.value = name;
    userinput.value = user;
    passinput.value = pass;
}

submitButton.addEventListener("click",settings);
logoutButton.addEventListener("click",logOut);