const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__editbutton');
const popupClose = document.querySelector('.popup__close');
const nameIput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameMain = document.querySelector('.profile__title');
const jobMain = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');


function openPopup() {
  popup.classList.add('popup__active')
}
function closePopup() {
  popup.classList.remove('popup__active')
}

popupClose.addEventListener('click', closePopup)
popupOpen.addEventListener('click', openPopup)

function submitForm(event) {
  event.preventDefault()

  nameMain.textContent = nameIput.value;
  jobMain.textContent = jobInput.value;

  closePopup();
}
 
form.addEventListener('submit', submitForm)