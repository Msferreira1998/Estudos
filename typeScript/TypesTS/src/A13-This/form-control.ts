import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (e) => {
  const target = e.target as HTMLFormElement;
  e.preventDefault();
  hideErrorMessages(target);
  checkForEmptyField(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (checkInputs(target)) console.log('Formulário Enviado');
});

function checkForEmptyField(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, 'Este campo precisa ser preenchido');
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  const inputs = form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach((item) => {
      item.classList.remove(SHOW_ERROR_MESSAGES);
    });
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email não é valido');
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value)
    showErrorMessage(password2, 'Senhas devem combinar');
}

function checkInputs(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((val) => {
    send = false;
  });
  return send;
}
