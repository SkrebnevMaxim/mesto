const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__editbutton');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameMain = document.querySelector('.profile__title');
const jobMain = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');


function openPopup() {
  popup.classList.add('popup_active')
  nameInput.value = nameMain.textContent;
  jobInput.value = jobMain.textContent; 
}

function closePopup() {
  popup.classList.remove('popup_active')
}

function submitForm(event) {
  event.preventDefault()
  nameMain.textContent = nameInput.value;
  jobMain.textContent = jobInput.value;

  closePopup();
}
form.addEventListener('submit', submitForm)

popupClose.addEventListener('click', closePopup)
popupOpen.addEventListener('click', openPopup)