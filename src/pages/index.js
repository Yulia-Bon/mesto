import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from "./initCards.js";













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









import './index.css';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

import {/*........*/} from '../utils/constants.js';

let PopupNewCardValidation = undefined


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