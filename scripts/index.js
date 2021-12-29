import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initCards.js";
//import  Popup  from "./Popup.js";
import {PopupWithImage} from './PopupWithImage.js';

import PopupWithForm from './PopupWithForm.js';

import UserInfo from './UserInfo.js';




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








const insertValues = (config) => {
  inputName.value = config.name;
  inputJob.value = config.about;
};



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



//попап с картинкой
const popupImage = new PopupWithImage(popupFull);
popupImage.setEventListeners();



//ИНИЦИАЛИЗАЦИЯ КАРТОЧЕК
function insertCard(card) {
  const photoCard = createCard(card);
  cardList.prepend(photoCard);
}

// тут создаете карточку и возвращаете ее а зачем
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



function handleOpenImage(name, link) {
  popupImage.open (name, link)
}





//PROFILE
/** Форма редактирования профиля */
const profile = new UserInfo('.profile__name', '.profile__job');

//редактор профиля
const  profileForm = new PopupWithForm(popupUser, (inputValues)=> {
  profile.setUserInfo(inputValues);
  });
  profileForm.setEventListeners();

// Слушатель на кнопке редактора профиля
buttonEdit.addEventListener('click', () => {
  const { name, job } = profile.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  // editFormValidator.resetValidation();
  profileForm.open();
});


/** Форма добавления новой карточки */
const addPhotoForm = new PopupWithForm(popupPhotos, {handleFormSubmit: (inputValues) =>{
    insertCard(inputValues);
    addPhotoForm.close();
}});
addPhotoForm.setEventListeners();
/**  Обработчик клика по кнопке добавления карточки */
buttonAdd.addEventListener('click', () => {
//  formAddPhoto.resetValidation();
  addPhotoForm.open();
});