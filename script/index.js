const popupEdit = document.querySelector('.popup__edit-card');
const popupOpen = document.querySelector('.profile__editbutton');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameMain = document.querySelector('.profile__title');
const jobMain = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const createPopup = document.querySelector('.popup__create-card');
const createPopupOpen = document.querySelector('.profile__addbutton');
const createPopupClose = document.querySelector('.createPopup__close');
const linkCard = document.querySelector('.createPopup__input_card-link');
const nameCard = document.querySelector('.createPopup__input_card-name');
const formAdd = document.querySelector('.popup__form_add');
const cardsElement = document.querySelector('#card');
const cardTemplate = document.querySelector('.elements').content;
const elementDelit = document.querySelector('.element__delit');
const bigCard = document.querySelector('.popup__big-card');
const openBigCard = document.querySelector('.element__photo');
const closeBigCard = document.querySelector(".popup__close-card")
const bigPhoto = document.querySelector('.bigCard__photo');
const bigCardTitle = document.querySelector('.bigCard__title');

const initialCards = [ // создаем массив карточек
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

initialCards.forEach(prependCard)

function createCard(item){ // создаем функцию добавления элементов из массива на страницу
  const element = cardTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__title').innerText = item.name; //заполняем карточку элементами
  element.querySelector('.element__photo').src = item.link;
  element.querySelector('.element__photo').alt = item.name;
  element.querySelector('.element__like-button').addEventListener('click', function (evt) { //добавляем возможность сделать кнопку like активной(поменять цвет)
    evt.target.classList.toggle('element__like-button_active');
    });
  element.querySelector('.element__delit').addEventListener('click', function(evt) {  // добавляем возможность удалять карточки
    evt.target.closest('.element').remove();
  });
 element.addEventListener('click', function(evt){  // функция открытия по любой карточке из маленькой в большую
   evt.preventDefault();
   const card = evt.target.closest('.element');
   const image = card.querySelector('.element__photo').src;
   openCard(image);
 })
  return element;
}

function openCard(src, alt) { 
  bigPhoto.src = src;
  bigPhoto.alt = alt;
  openPopup(bigCard);
}

function prependCard(item){ // функция добавления новой карточки
  const element = createCard(item);
  cardsElement.prepend(element)
}

function addCard(evt) { //функция заполнения и сохранения инпутов для карточки
  evt.preventDefault();
  const nameInput = nameCard.value;
  const linkInput = linkCard.value;
  const dataCard = {
    name: nameInput,
    link: linkInput
  }
  prependCard(dataCard);
  evt.target.reset(); // стираем введенные параметры в input после добавления карточки
  closePopup(createPopup);
}
 formAdd.addEventListener('submit', addCard)
function openPopup(popup) { //создаем функцию открытия попапов
  popup.classList.add('popup_active');
  nameInput.value = nameMain.textContent;
  jobInput.value = jobMain.textContent;
}

function closePopup(popup) {  //создаем функцию закрытия попапов 
  popup.classList.remove('popup_active');
}

function submitForm(event) {  //функция соранения изменений в редакторе (имя/должность)
  event.preventDefault();
  nameMain.textContent = nameInput.value;
  jobMain.textContent = jobInput.value;
  closePopup(popupEdit);
}

form.addEventListener('submit', submitForm)

popupClose.addEventListener('click', () => closePopup(popupEdit));
popupOpen.addEventListener('click', () => openPopup(popupEdit));
createPopupClose.addEventListener('click', () => closePopup(createPopup));
createPopupOpen.addEventListener('click', () => openPopup(createPopup));
closeBigCard.addEventListener('click', () =>closePopup(bigCard));
