// включение валидации вызовом enableValidation
// все настройки передаются при вызов
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_reset',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function enableValidation(validationConfig) {
  const forms = [...document.querySelectorAll(validationConfig.formSelector)]
  forms.forEach((form) => setFormListener(form, validationConfig))
}
function setFormListener(form, config) {
  form.addEventListener('submit', handlerSubmit);
  form.addEventListener('input',  () => setSubmitButtonState(form, config))
  const inputs = [...form.querySelectorAll(config.inputSelector)]

  inputs.forEach(inputElement => {
  inputElement.addEventListener('input',
  () => handleFieldValidation(inputElement, form, config))
  })
  setSubmitButtonState(form, config);
}
function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.submitButtonSelector);

  button.disabled = !form.checkValidity();
  button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
}
function handlerSubmit(evt) {
  evt.preventDefault()
}

function handleFieldValidation(input, form, config) {
  if (!input.validity.valid) {
  showError(input, form, config)
  } else {
  hideError(input, form, config)
  }
}
function showError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}
function hideError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

enableValidation(config)