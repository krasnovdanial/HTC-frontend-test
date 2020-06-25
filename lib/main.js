var modal = document.getElementById('modal-Btn');
var modalForm = document.getElementById('btn');

modalForm.addEventListener('click', function () {
  document.getElementById('modal-Btn').style.display = 'block';
});

var modalClose = document.querySelector('.header__registration-close');
modalClose.addEventListener('click', function () {
  document.getElementById('modal-Btn').style.display = 'none';
});

var buttonActive = document.querySelector('#filmtab');
buttonActive.addEventListener('click', function () {
  this.classList.remove('active');
});

var buttonActive = document.querySelector('#tvtab');
buttonActive.addEventListener('click', function () {
  this.classList.add('active');
});

var filmTab = document.getElementById('filmtab');
filmTab.addEventListener('click', function () {
  openTab(event, 'films');
});

var tvTab = document.getElementById('tvtab');
tvTab.addEventListener('click', function () {
  openTab(event, 'tvchanels');
});

function openTab(evt, tabName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName('tabcontent');

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

var loginBtn = document.getElementById('btn');
var formOverlay = document.getElementById('modal-Btn');
var submitBtn = document.getElementById('submit-btn');
var authLogin = document.getElementById('auth-login');
var loginName = document.getElementById('login-name');
var psw = document.getElementById('password');
var loginAddition = document.getElementById('log');
var emailInput = document.getElementById('logininput');

authLogin.style.display = 'none';
submitBtn.addEventListener('click', function () {
  if (psw === '') {
    loginBtn.style.display = 'block';
  } else {
    authLogin.style.display = 'none';
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

var authLoginBtn = document.getElementById('auth-login__btn');
authLoginBtn.addEventListener('click', function () {
  if (loginBtn.style.display = 'none') {
    loginBtn.style.display = 'block';
    authLogin.style.display = 'none';
    loginAddition.style.display = 'none';
  }
});
var inputName = document.getElementById('login');
inputName.addEventListener('change', function (inputValue) {
  inputValue = inputName.value;
  loginName.innerHTML = inputValue;
  rememberMe(inputValue);
});
var checkBox = document.getElementById('remember');

var rememberMe = function rememberMe(inputValue) {
  checkBox.checked = 'true';
  if (checkBox.checked) {
    console.log('check');
    localStorage.setItem('check-name', inputValue);

    if (localStorage.getItem('check-name') != null) {
      var checkName = localStorage.getItem('check-name');
      console.log(checkName);
      loginName.innerHTML = checkName;
    } else {
      loginName.innerHTML = inputValue;
    }
  }
};

var outerCheck = localStorage.getItem('check-name');
if (outerCheck) {
  loginName.innerHTML = outerCheck;
  authLogin.style.display = 'flex';
  loginBtn.style.display = 'none';
}