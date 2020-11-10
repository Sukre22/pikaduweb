// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
});

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');



const listUsers = [
  {
    id: '01',
    email: 'maks@mail.com',
    password: '12345',
    displayName: 'MaksJs'
  },
  {
    id: '02',
    email: 'kate@mail.com',
    password: '123456',
    displayName: 'KateKillMaks'
  }
];

const setUsers = {
  user: null,
  logIn(email, password) {
   const user = this.getUser(email);
   if (user && user.password === password) {
     this.authorizedUser(user)
   } else {
     alert('Пользователь с такими данными не найден')
   }
  },
  logOut() {
    console.log('выход')
  },
  signUp(email, password) {    
    if (!this.getUser(email)) {
     listUsers.push({email, password, displayName: email})
     console.log(listUsers);
    } else {
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user) {
    this.user = user;
  }
};

const toggleAuthDom = () => {
    const user = setUsers.user;
    console.log('user: ', user);

    if (user) {
      loginElem.style.display = 'none';
      userElem.style.display = '';
      userNameElem = user.displayName;
    } else {
      loginElem.style.display = '';
      userElem.style.display = 'none';
    }
};


loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = emailInput.value; 
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value; 
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue);
});

toggleAuthDom(); 




