const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const LOCALSTORAGE_USERNAME = "username";

function loginSubmit(event){
    event.preventDefault(); //브라우저의 기본 동작을 막는 것
    const username = loginInput.value;
    loginForm.className = HIDDEN_CLASSNAME;
    localStorage.setItem(LOCALSTORAGE_USERNAME, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(LOCALSTORAGE_USERNAME);

if(saveUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreeting(saveUsername);
}
