const popupEdit = document.querySelector(".popup_edit-card");
const popupOpenEdit = document.querySelector(".profile__editbutton");
const popupCloseEdit = document.querySelector(".popup__close_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profile = document.querySelector(".profile");
const userName = document.querySelector(".profile__title");
const userJob = document.querySelector(".profile__subtitle");
const form = document.querySelector(".popup__form");
const createCardPopup = document.querySelector(".popup_create-card");
const openCardFormButton = document.querySelector(".profile__addbutton");
const createPopupClose = document.querySelector(".popup__close_create");
const linkCard = document.querySelector(".popup__input_create_link");
const nameCard = document.querySelector(".popup__input_create_name");
const formAdd = document.querySelector(".popup__form_add");
const cardsElement = document.querySelector("#card");
const cardTemplate = document.querySelector(".elements").content;
const elementDelit = document.querySelector(".element__delit");
const bigCard = document.querySelector(".popup_big-card");
const openBigCard = document.querySelector(".element__photo");
const closeBigCard = document.querySelector(".popup__close_card");
const bigPhoto = document.querySelector(".popup__big-photo");
const bigCardTitle = document.querySelector(".popup__big-title");
const popupTitle = document.querySelector(".popup__big-title");
const ESC_CODE = "Escape";
const popupInput = document.querySelectorAll('.popup__input')

initialCards.forEach(prependCard);

function createCard(item) {
  // создаем функцию добавления элементов из массива на страницу
  const element = cardTemplate.querySelector(".element").cloneNode(true);
  element.querySelector(".element__title").innerText = item.name; //заполняем карточку элементами
  element.querySelector(".element__photo").src = item.link;
  element.querySelector(".element__photo").alt = item.name;
  element
    .querySelector(".element__like-button")
    .addEventListener("click", function (evt) {
      //добавляем возможность сделать кнопку like активной(поменять цвет)
      evt.target.classList.toggle("element__like-button_active");
    });
  element
    .querySelector(".element__delit")
    .addEventListener("click", function (evt) {
      // добавляем возможность удалять карточки
      evt.target.closest(".element").remove();
    });
  element
    .querySelector(".element__photo")
    .addEventListener("click", function (evt) {
      // функция открытия по любой карточке из маленькой в большую
      evt.preventDefault();
      const card = evt.target.closest(".element");
      const image = card.querySelector(".element__photo").src;
      openCard(item);
    });

  return element;
}

function openCard(item) {
  bigPhoto.src = item.link;
  bigPhoto.alt = item.name;
  popupTitle.textContent = item.name;
  openPopup(bigCard);
}

function prependCard(item) {
  // функция добавления новой карточки
  const element = createCard(item);
  cardsElement.prepend(element);
}

function addCard(evt) {
  //функция заполнения и сохранения инпутов для карточки
  evt.preventDefault();
  const nameInput = nameCard.value;
  const linkInput = linkCard.value;
  const dataCard = {
    name: nameInput,
    link: linkInput,
  };
  prependCard(dataCard);
  evt.target.reset(); // стираем введенные параметры в input после добавления карточки
  closePopup(createCardPopup);
}

formAdd.addEventListener("submit", addCard);

function openPopup(popup) {
  //создаем функцию открытия попапов
  popup.classList.add("popup_active");
}

function closePopup (popup) {
  //создаем функцию закрытия попапов
  popup.classList.remove("popup_active");
}

function closePopupByOverlay(event) {  // функция закрытия popup кликом на оверлей
  if (event.target.classList.contains("popup__body")) {
    const openedPopup = document.querySelector(".popup_active");
    closePopup(openedPopup);
  }
}

function closePopupEsc(event) {
  // функция закрытия popup черех ESC
  if (event.key === ESC_CODE) {
    const openedPopup = document.querySelector(".popup_active");
    closePopup(openedPopup);
  }
}

function submitForm(event) {
  //функция соранения изменений в редакторе (имя/должность)
  event.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

form.addEventListener("submit", submitForm);
nameInput.value = userName.textContent;
jobInput.value = userJob.textContent;

popupCloseEdit.addEventListener("click", () => {
  popupInput.forEach(input => {
    hideError(input, form, config);
    closePopup(popupEdit);
});
});

popupOpenEdit.addEventListener("click", () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
 openPopup(popupEdit);
});
createPopupClose.addEventListener("click", () => closePopup(createCardPopup));
openCardFormButton.addEventListener("click", () => openPopup(createCardPopup));
closeBigCard.addEventListener("click", () => closePopup(bigCard));
document.addEventListener("click", closePopupByOverlay);
document.addEventListener("keydown", closePopupEsc);