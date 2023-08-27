import { createNotification } from '../components/notification.js';

const from = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const formBtn = document.querySelector('#form-btn');
const notification = document.querySelector('#notification');

// regex
const NAME_VALIDATION = /^[A-ZÑ][a-zñ]{2,10} [A-ZÑ][a-zñ]{4,16}$/;
const EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_VALIDATION = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[.!*+]).{8,20}$/;

// validation
let nameValidation = false;
let emailValidation = false;
let passwordValidation = false;
let matchValidation = false;

const validation = (input, regexValidation) => {
  formBtn.disabled = nameValidation && emailValidation && passwordValidation && matchValidation ? false : true;
  if (input.value === '') {
    input.classList.add('focus:outline-indigo-700');
    input.classList.remove('outline-green-700', 'outline-2', 'outline');
    input.classList.remove('outline-red-700', 'outline-2', 'outline');
  } else if (regexValidation) {
    input.classList.remove('focus:outline-indigo-700');
    input.classList.remove('outline-red-700', 'outline-2', 'outline');
    input.classList.add('outline-green-700', 'outline-2', 'outline');
  } else if (!regexValidation) {
    input.classList.remove('focus:outline-indigo-700');
    input.classList.remove('outline-green-700', 'outline-2', 'outline');
    input.classList.add('outline-red-700', 'outline-2', 'outline');
  }
};

// Event
nameInput.addEventListener('input', e => {
  nameValidation = NAME_VALIDATION.test(e.target.value);
  validation(nameInput, nameValidation);
});

emailInput.addEventListener('input', e => {
  emailValidation = EMAIL_VALIDATION.test(e.target.value);
  validation(emailInput, emailValidation);
});

passwordInput.addEventListener('input', e => {
  passwordValidation = PASSWORD_VALIDATION.test(e.target.value);
  matchValidation = e.target.value === matchInput.value;
  validation(passwordInput, passwordValidation);
  validation(matchInput, matchValidation);
});

matchInput.addEventListener('input', e => {
  matchValidation = e.target.value === passwordInput.value;
  validation(matchInput, matchValidation);
});

from.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    // eslint-disable-next-line no-undef
    const { data } = await axios.post('/api/users', newUser);
    createNotification(false, data);
    setTimeout(() => {
      notification.innerHTML = '';
    }, 5000);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    matchInput.value = '';
    validation(nameInput, false);
    validation(emailInput, false);
    validation(passwordInput, false);
    validation(matchInput, false);
  } catch (error) {
    createNotification(true, error.response.data.error);
    setTimeout(() => {
      notification.innerHTML = '';
    }, 5000);
  }


});