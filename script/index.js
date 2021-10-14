const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__editbutton');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameMain = document.querySelector('.profile__title');
const jobMain = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const createPopup = document.querySelector('.createPopup');
const createPopupOpen = document.querySelector('.profile__addbutton')
const createPopupClose = document.querySelector('.createPopup__close ')

//сохраняем новые карточки
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  //создаем функцию добавления новых элементов на страницу
  function newElements () {
    const cardTemplate = document.querySelector('#card').content;
    for (let i = 0; i < initialCards.length; i+=1) {
      const cardsElement = cardTemplate.querySelector('.element').cloneNode(true);
      cardsElement.querySelector('.element__photo').setAttribute('src', initialCards[i]['link']);
      cardsElement.querySelector('.element__title').textContent = initialCards[i]['name'];
      cardsElement.querySelector('.element__like-button').addEventListener('click', function (evt) { //добавляем возможность сделать кнопку like активной(поменять цвет)
        evt.target.classList.toggle('element__like-button_active');
        });
      card.prepend(cardsElement);
    }
  }
  newElements(); //запускаем функцию добавления елементов
  

function openPopup() {  //функция открытия popup редактирования профиля
  popup.classList.add('popup_active') 
  nameInput.value = nameMain.textContent; 
  jobInput.value = jobMain.textContent;  
}
function closePopup() { //функция закрытия popup редактирования профиля
  popup.classList.remove('popup_active') 
}

function popupCreate() { //функция открытия popup создания новых элементов
  createPopup.classList.add('createPopup_active')
  nameInput.value = nameMain.textContent;
  jobInput.value = jobMain.textContent;
}
function popupCreateClose() {  //функция закрытия popup создания новых элементов
  createPopup.classList.remove('createPopup_active') 
} 

function submitForm(event) {  // функция сохранения данных редактирования профиля
  event.preventDefault()
  nameMain.textContent = nameInput.value;
  jobMain.textContent = jobInput.value;
  closePopup();   
  }
form.addEventListener('submit', submitForm);
popupClose.addEventListener('click', closePopup);
popupOpen.addEventListener('click', openPopup);
createPopupOpen.addEventListener('click', popupCreate);
createPopupClose.addEventListener('click', popupCreateClose);