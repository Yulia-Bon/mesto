import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initCards.js";

//Добавить разметку карточки
const cardTemplate = document.querySelector("#photos-element").content;
const cardList = document.querySelector(".photo-grid");

const validationSettings = {
  formSelector: ".popup__form",
  inputList: ".popup__input",
  buttonElement: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

//POPUP
const popupList = Array.from(document.querySelectorAll(".popup"));
const popupUser = document.querySelector(".popup-user");
const popupPhotos = document.querySelector(".popup-photos");

//BATTON OPEN POPUP
const buttonEdit = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__add-button");

// ПЕРЕМЕННЫЕ ДЛЯ ПРОФИЛЯ
const userContainer = document.querySelector(".popup-user__container"); // Воспользуйтесь методом querySelector()
// поля формы в DOM
const nameInput = document.querySelector(".popup-user__input-name");
const jobInput = document.querySelector(".popup-user__input_type_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// ПЕРЕМЕННЫЕ ГАЛЕРЕИИ
const photoName = document.querySelector(".popup-photos__input-card-name");
const photoLink = document.querySelector(".popup-photos__input_type_card-src");

// ПЕРЕМЕННЫЕ ФУЛЛСКРИНА
export const popupFullImage = document.querySelector(".popup__image");
export const popupFullFigcaption = document.querySelector(".popup__figcaption");

//ФОРМЫ ПОПАПОВ
const popupFormProfile = document.querySelector(".popup-user__form");
const popupFormPhoto = document.querySelector(".popup-photos__form");
const popupFull = document.querySelector(".popup-fullscreen");











//ДЛЯ  СЕКТИОН

//ИНИЦИАЛИЗАЦИЯ КАРТОЧЕК
function insertCard(card) {
  const photoCard = createCard(card);
  cardList.prepend(photoCard);
}

// тут создаете карточку и возвращаете ее
function createCard(item) {
  const cards = new Card(item.name, item.link, cardTemplate, handleOpenImage);
  const photo = cards.generateCard();
  return photo;
}

//Вывести карточки на страницу
initialCards.forEach(function (item) {
  insertCard(item);
});

// ФУНКЦИЯ сабмит добавления карточки
function submitPhotoForm(evt) {
  const cardAddedByUser = {
    name: photoName.value,
    link: photoLink.value,
  };
  insertCard(cardAddedByUser);
}








/*
//  ДЛЯ PopupWithImage.js 
function handleOpenImage(name, link) {
  // ПЕРЕМЕННЫЕ ФУЛЛСКРИН ПОПАПА
  popupFullImage.src = link;
  popupFullImage.alt = name;
  popupFullFigcaption.textContent = name;
  // Закрываем попап
  openPopup(popupFull);
}
*/











//ОБРАБОТЧИК ОТПРАВКИ ФОРМЫ
function submitHandlerFormPhoto(evt) {
  // отменяет стандартную отправку формы
  evt.preventDefault();
  submitPhotoForm(evt);
  // Закрываем попап
  closePopup(popupPhotos);
  cleanPhotoForm();
}

function cleanPhotoForm() {
  photoName.value = "";
  photoLink.value = "";
  formAddCardValidation.updatePopupSubmitButtonState();
}

/*
//функция закрытия попапов по оверлэй 
const closePopupTarget = (evt) => { 
  if (evt.target === evt.currentTarget) { 
    closePopup(evt.target);
  } 
};*/














/*
//ДЛЯ ЮЗЕРИНФО
function handleOpenProfilePopup() {
  openPopup(popupUser);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

//передаётся значения в поле профиля
function profileInfoEdit(evt) {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupUser);
  evt.preventDefault();
}

*/









/*
//ДЛЯ СЕКЦИИ ПОПАП

//ОТКРЫТЬ ПОПАП
export const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsqButton);
};

//ЗАКРЫТЬ ПОПАП
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsqButton);
};



//ВЫХОД ИЗ ПОПАПА ПО НАЖАТИЮ НА ESC
function closePopupByEsqButton(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
  return;
}

//ЗАКРЫВАЕМ ПОПАПЫ ВТЧ НА ОВЭРЛЕЙ
popupList.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});
*/







function handleOpenAddCardPopup() {
  //formAddCardValidation.updatePopupSubmitButtonState();
  openPopup(popupPhotos);
}

//ОБРАБОТЧИКИ
buttonEdit.addEventListener("click", handleOpenProfilePopup);
popupFormProfile.addEventListener("submit", profileInfoEdit);
popupFormPhoto.addEventListener("submit", submitHandlerFormPhoto);
buttonAdd.addEventListener("click", handleOpenAddCardPopup);

//ОБЬЕКТЫ(ЭКЗЕМПЛЯРЫ) КЛАССА ВАЛИДАЦИИ
const formProfileValidation = new FormValidator(
  validationSettings,
  popupFormProfile
);
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(
  validationSettings,
  popupFormPhoto
);
formAddCardValidation.enableValidation();
