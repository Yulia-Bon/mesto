export const validationSettings = {
    formSelector: ".popup__form",
    inputList: ".popup__input",
    buttonElement: ".popup__submit",
    inactiveButtonClass: "popup__submit_inactive",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
};

export const initialCards = [
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
export const cardTemplate = document.querySelector("#photos-element").content;
export const cardList = document.querySelector(".photo-grid");



//POPUP
export const popupList = Array.from(document.querySelectorAll(".popup"));
export const popupUser = document.querySelector(".popup-user");
export const popupPhotos = document.querySelector(".popup-photos");

//BATTON OPEN POPUP
export const buttonEdit = document.querySelector(".profile__edit");
export const buttonAdd = document.querySelector(".profile__add-button");

// ПЕРЕМЕННЫЕ ДЛЯ ПРОФИЛЯ
export const userContainer = document.querySelector(".popup-user__container"); // Воспользуйтесь методом querySelector()
// поля формы в DOM
export const nameInput = document.querySelector(".popup-user__input-name");
export const jobInput = document.querySelector(".popup-user__input_type_job");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");

// ПЕРЕМЕННЫЕ ГАЛЕРЕИИ
export const photoName = document.querySelector(".popup-photos__input-card-name");
export const photoLink = document.querySelector(".popup-photos__input_type_card-src");

// ПЕРЕМЕННЫЕ ФУЛЛСКРИНА
export const popupFullImage = document.querySelector(".popup__image");
export const popupFullFigcaption = document.querySelector(".popup__figcaption");

//ФОРМЫ ПОПАПОВ
export const popupFormProfile = document.querySelector(".popup-user__form");
export const popupFormPhoto = document.querySelector(".popup-photos__form");
export const popupFull = document.querySelector(".popup-fullscreen");