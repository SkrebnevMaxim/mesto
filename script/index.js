const popup = document.querySelector('.popup'); 
const popupOpen = document.querySelector('.profile__editbutton'); 
const popupClose = document.querySelector('.popup__close'); 
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 
const nameMain = document.querySelector('.profile__title'); 
const jobMain = document.querySelector('.profile__subtitle'); 
const formEdit = document.querySelector('.popup__form_edit');
const createPopup = document.querySelector('.createPopup');
const createPopupOpen = document.querySelector('.profile__addbutton');
const createPopupClose = document.querySelector('.createPopup__close');
const linkCard = document.querySelector('.createPopup__input_card-link');
const nameCard = document.querySelector('.createPopup__input_card-name');

const formAdd = document.querySelector('.popup__form_add');

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
const cardsElement = document.querySelector('#card');
const cardTemplate = document.querySelector('.elements').content;
const elementDelit = document.querySelector('.element__delit');
initialCards.forEach(prependCard)

function createCard(item){
  const element = cardTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__title').innerText = item.name;
  element.querySelector('.element__photo').src = item.link;
  element.querySelector('.element__like-button').addEventListener('click', function (evt) { //добавляем возможность сделать кнопку like активной(поменять цвет)
    evt.target.classList.toggle('element__like-button_active');
    });
  element.querySelector('.element__delit').addEventListener('click', function(evt) {  // доюовляем возможность удалять карточки
    evt.target.closest('.element').remove();
  });

  return element;
}


function prependCard(item){
  const element = createCard(item);
  cardsElement.prepend(element)
}

function popupCreate() { //функция открытия popup создания новых элементов
  createPopup.classList.add('createPopup_active')
}
function popupCreateClose() {  //функция закрытия popup создания новых элементов
  createPopup.classList.remove('createPopup_active') 
} 
function addCard(evt) { // функция добавления новой карточки
  evt.preventDefault();
  const nameInput = nameCard.value;
  const linkInput = linkCard.value;
  const dataCard = {
    name: nameInput,
    link: linkInput
  }
  prependCard(dataCard);
  evt.target.reset(); // стираем введенные параметры в input после добавления карточки
  popupCreateClose();
}
 formAdd.addEventListener('submit', addCard)

function bigcard (src, alt) {
  const cardphoto = document.querySelector('.bigCard__photo').src;
  const cardtitle = document.querySelector('.bigCard__title').alt;
  function opencard() { 
    popup.classList.add('bigCard_active'); 
  } 
  const openbig = document.querySelector('.element__photo');
  openbig.addEventListener('click', opencard);
  bigcard()
}


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



formEdit.addEventListener('submit', submitForm) 
 
popupClose.addEventListener('click', closePopup) 
popupOpen.addEventListener('click', openPopup)
createPopupOpen.addEventListener('click', popupCreate);
createPopupClose.addEventListener('click', popupCreateClose);