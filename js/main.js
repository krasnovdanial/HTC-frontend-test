let modal = document.querySelector('#modal-Btn');
let modalForm = document.querySelector('#btn');

modalForm.addEventListener('click', function () {
    document.querySelector('#modal-Btn').style.display = 'block';
});
let modalClose = document.querySelector('.header__registration-close');
modalClose.addEventListener('click', function () {
    document.querySelector('#modal-Btn').style.display = 'none';
});

let buttonActive = document.querySelector('#filmtab');
buttonActive.addEventListener('click', function () {
    this.classList.remove('active');
});
let buttonActive = document.querySelector('#tvtab');
buttonActive.addEventListener('click', function () {
    this.classList.add('active');
});


let filmTab = document.querySelector('#filmtab');
filmTab.addEventListener('click', function () {
    openTab(event, 'films');
});

let tvTab = document.querySelector('#tvtab');
tvTab.addEventListener('click', function () {
    openTab(event, 'tvchanels');
})

function openTab(evt, tabName) {
    let i, tabcontent;

    tabcontent = document.querySelector('.tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    document.querySelector(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

const loginBtn = document.querySelector('#btn');
const formOverlay = document.querySelector('#modal-Btn');
const submitBtn = document.querySelector('#submit-btn');
const authLogin = document.querySelector('#auth-login');
const loginName = document.querySelector('#login-name');
const psw = document.querySelector('#password');
const loginAddition = document.querySelector('#log');
const emailInput = document.querySelector('#login-input');

authLogin.style.display = 'none';
submitBtn.addEventListener('click', () => {
    if (psw === '') {
        loginBtn.style.display = 'block';
    } else {
        authLogin.style.display = 'none';
    }
});

let authLoginBtn = document.querySelector('#auth-login__btn');

authLoginBtn.addEventListener('click', () => {
    if (loginBtn.style.display = 'none') {
        loginBtn.style.display = 'block';
        authLogin.style.display = 'none';
        loginAddition.style.display = 'none';
    }
});

loginName.addEventListener('click', function () {
    if (loginAddition.style.display = 'none') {
        loginAddition.style.display = 'block';
        loginName.style.display = 'none';
    }
});

loginAddition.addEventListener('click', function () {
    loginAddition.style.display = 'none';
    loginName.style.display = 'block';
});
const inputName = document.querySelector('#login');

inputName.addEventListener('change', (inputValue) => {
    inputValue = inputName.value;
    loginName.innerHTML = inputValue;
    rememberMe(inputValue);
})

const checkBox = document.querySelector('.header__checkbox-label');

let rememberMe = function (inputValue) {
    checkBox.checked = 'true';
    if (checkBox.checked) {
        console.log('check');
        localStorage.setItem('check-name', inputValue);
        if (localStorage.getItem('check-name') != null) {
            let checkName = localStorage.getItem('check-name');
            console.log(checkName);
            loginName.innerHTML = checkName;

        } else {
            loginName.innerHTML = inputValue;
        }
    }
};
let outerCheck = localStorage.getItem('check-name');

if (outerCheck) {
    loginName.innerHTML = outerCheck
    authLogin.style.display = 'flex';
    loginBtn.style.display = 'none';
}

