const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__editbutton');
const popupClose = document.querySelector('.popup__close');
const nameIput = document.querySelector('.popup__name-input');
const jobInput = document.querySelector('.popup__job-input');
const popupButton = document.querySelector('.popup__btn');
const nameMain = document.querySelector('.profile__title');
const jobMain = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('active')
}
popupOpen.addEventListener('click', openPopup)

function closePopup() {
  popup.classList.remove('active')
}
popupClose.addEventListener('click', closePopup)

nameIput.value = 'Жак-Ив Кусто';
jobInput.value = 'Исследователь океана';

function submitForm(event) {
  event.preventDefault()

  nameMain.textContent = nameIput.value;
  jobMain.textContent = jobInput.value;

  closePopup();
}
 
form.addEventListener('submit', submitForm)