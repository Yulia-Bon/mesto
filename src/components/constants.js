const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
        likes: 10
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
        likes: 10
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
        likes: 10
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
        likes: 1
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
        likes: 108
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
        likes: 54
    },
];

const inputName = document.querySelector(".popup-user__input-name");
const inputAbout = document.querySelector(".popup-user__input_type_job");
export const insertValues = (config) => {
    inputName.value = config.name;
    inputAbout.value = config.about;
};

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
const profileAbout = document.querySelector(".profile__job");

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

// ПЕРЕМЕННЫЕ ФУЛЛСКРИНА
export const popupFullImage = document.querySelector(".popup__image");
export const popupFullFigcaption = document.querySelector(".popup__figcaption");

const popupDelete = document.querySelector('#popup_type_check');


 const editProfileButton = document.querySelector('.profile__edit');
 const avatar = document.querySelector('.profile__avatar');
const editAvatarForm = document.querySelector('#edit_avatar');

const popupAvatar = document.querySelector('#popup_type_avatar');


const editAvatarButton = document.querySelector('.profile__edit-avatar');



export {
    initialCards, popupFull, popupFormPhoto, popupFormProfile, buttonAdd, buttonEdit, photoLink, photoName,
    profileAbout, profileName, popupPhotos, popupUser, validationSettings, cardList, cardTemplate, editProfileButton, avatar,
    editAvatarForm, popupAvatar, editAvatarButton, popupDelete
};