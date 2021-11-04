// включение валидации вызовом enableValidation
// все настройки передаются при вызов
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_reset",
  inputErrorClass: "popup__input_type_error",
  errorClass: 'error_visible'
};

function hideError(input, form, config) {
  // функция скрытия ошибки при выполнении условий валидации
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass); //скрываем строку
  errorElement.textContent = ""; // скрываем стандартный текст ошибки
}

function showError(input, form, config) {
  //функция показа ошибки валидации
  const errorElement = form.querySelector(`#${input.id}-error`); //выбираем элемент
  input.classList.add(config.inputErrorClass); //добавляем строку класса, делаем видимым
  errorElement.textContent = input.validationMessage; // добавляем стандартный текст браузерной  ошибки
}

function setFormListener(form, config) {
  // функция обработки формы
  form.addEventListener("submit", handlerSubmit);
  form.addEventListener("input", () => setSubmitButtonState(form, config));
  const inputs = [...form.querySelectorAll(config.inputSelector)]; // ищем поля формы

inputs.forEach((inputElement) => {
  inputElement.addEventListener("input", () =>
  handleFieldValidation(inputElement, form, config)
  );
});
  setSubmitButtonState(form, config);
}

function handleFieldValidation(input, form, config) {
  //функция обработки формы на валидность
  if (!input.validity.valid) {
    // пишем условия добавления или скрытия ошибок валидации
    showError(input, form, config);
  } else {
    hideError(input, form, config);
  }
}

function handlerSubmit(evt) {
  // функция сохранения без перезагрузки страницы
  evt.preventDefault();
}

function setSubmitButtonState(form, config) {
  //функция изменения кнопки, если валидация не пройдена, кнопка не активна и меняет цвет
  const button = form.querySelector(config.submitButtonSelector);

  button.disabled = !form.checkValidity();
  button.classList.toggle(config.inactiveButtonClass, !form.checkValidity());
}

function enableValidation(validationConfig) {
  // функция включения валидации
  const forms = [...document.querySelectorAll(validationConfig.formSelector)]; // ищем все формы
  forms.forEach((form) => setFormListener(form, validationConfig)); // проходим каждую форму в массиве
}

enableValidation(config);