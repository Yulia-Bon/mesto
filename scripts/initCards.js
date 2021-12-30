const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];

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

const popupUser = document.querySelector(".popup-user");
const popupPhotos = document.querySelector(".popup-photos");


const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// ПЕРЕМЕННЫЕ ГАЛЕРЕИИ
const photoName = document.querySelector(".popup-photos__input-card-name");
const photoLink = document.querySelector(".popup-photos__input_type_card-src");


//BATTON OPEN POPUP
const buttonEdit = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__add-button");


//ФОРМЫ ПОПАПОВ
const popupFormProfile = document.querySelector(".popup-user__form");
const popupFormPhoto = document.querySelector(".popup-photos__form");
const popupFull = document.querySelector(".popup-fullscreen");

/*
//POPUP
const popupList = Array.from(document.querySelectorAll(".popup"));
// ПЕРЕМЕННЫЕ ДЛЯ ПРОФИЛЯ
const userContainer = document.querySelector(".popup-user__container");
// поля формы в DOM
const nameInput = document.querySelector(".popup-user__input-name");
const jobInput = document.querySelector(".popup-user__input_type_job");
*/

// ПЕРЕМЕННЫЕ ФУЛЛСКРИНА
export const popupFullImage = document.querySelector(".popup__image");
export const popupFullFigcaption = document.querySelector(".popup__figcaption");


  export {initialCards, popupFull, popupFormPhoto , popupFormProfile  , buttonAdd, buttonEdit , photoLink, photoName,
      profileJob, profileName , popupPhotos, popupUser, validationSettings, cardList, cardTemplate};