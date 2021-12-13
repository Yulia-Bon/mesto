
import {Cards} from './cards.js';
import {FormValidator/*,updatePopupSubmitButtonState*/} from './validation.js';


//Добавить разметку карточки
const cardTemplate = document.querySelector("#photos-element").content;
const cardList = document.querySelector(".photo-grid");




const validationSettings = {
  formSelector: '.popup__form',
  inputList: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
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
//POPUP

const popupList = Array.from(document.querySelectorAll('.popup'));
const popup = document.querySelector(".popup");
const popupUser = document.querySelector(".popup-user");
const popupPhotos = document.querySelector(".popup-photos");
const popupFull = document.querySelector(".popup-fullscreen");

//BATTON CLOSE
const userButtonClosePopup = document.querySelector(".popup-user__close");
const photoButtonClosePopup = document.querySelector(".popup-photos__close");
const fullButtonClosePopup = document.querySelector(".popup-fullscreen__close-button");

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
const battonLikePhoto = document.querySelector(".photo-grid__like");
const battoDeletePhoto = document.querySelector(".photo-grid__delete-button");
const photoName = document.querySelector(".popup-photos__input-card-name");
const photoLink = document.querySelector(".popup-photos__input_type_card-src");
const photoContainer = document.querySelector(".popup-photos__container");

// ПЕРЕМЕННЫЕ ФУЛЛСКРИН ПОПАПА
const popupFullImage = document.querySelector(".popup__image");
const popupFullFigcaption = document.querySelector(".popup__figcaption");

//Добавить разметку карточки
//const cardTemplate = document.querySelector("#photos-element").content;
//const cardList = document.querySelector(".photo-grid");


const popupFormProfile = document.querySelector('.popup-user__form');
const popupFormPhoto = document.querySelector('.popup-photos__form');






function handleOpenAddCardPopup () {
  /*updatePopupSubmitButtonState(popupPhotos);*/
  openPopup(popupPhotos);
}





export const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsqButton);

}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsqButton);
}





function insertCard(card) {
  const cardsh= new Cards(card.name, card.link, cardTemplate);
 
  const photoCard = cardsh.generateCard();
  cardList.prepend(photoCard);
}

//Вывести карточки на страницу
initialCards.forEach(function (item) {
  insertCard(item);
});





function submitHandlerFormPhoto(evt) {
  // отменяет стандартную отправку формы
  evt.preventDefault();
  submitPhotoForm(evt);
  // Закрываем попап
  closePopup(popupPhotos);
}


// ФУНКЦИЯ сабмит добавления карточки
function submitPhotoForm(evt) {
  const cardAddedByUser = {
    name: photoName.value,
    link: photoLink.value,
  };
  insertCard(cardAddedByUser);
  photoName.value = "";
  photoLink.value = "";
  openPopup(popupPhotos);
}






//функция закрытия попапов по оверлэй 
const closePopupTarget = (evt) => { 
  if (evt.target === evt.currentTarget) { 
    closePopup(evt.target);
  } 
};





function handleOpenProfilePopup () {
  openPopup(popupUser);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent; 
};

//передаётся значения в поле профиля
function  profileInfoEdit (evt) {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupUser);
  evt.preventDefault();
}



//ВЫХОД ИЗ ПОПАПА ПО НАЖАТИЮ НА ESC
function closePopupByEsqButton(evt) {
  const popupOpened = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopup(popupOpened);
  }
  return;
}


popupList.forEach((popup) => {
  popup.addEventListener('click', function(evt){
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
      closePopup(popup);
    }
  });
})

buttonEdit.addEventListener('click', handleOpenProfilePopup);
//

popupFormProfile.addEventListener('submit', profileInfoEdit);
popupFormPhoto.addEventListener('submit',submitHandlerFormPhoto );
buttonAdd.addEventListener('click', handleOpenAddCardPopup);



//userButtonClosePopup.addEventListener('click', () => closePopup(popupUser));
//photoButtonClosePopup.addEventListener('click', () => closePopup(popupPhotos));
//fullButtonClosePopup.addEventListener('click', () => closePopup(popupFull));

//popupUser.addEventListener('click', closePopupTarget);
//popupPhotos.addEventListener('click', closePopupTarget);
//popupFull.addEventListener('click', closePopupTarget);


const formProfileValidation = new FormValidator(validationSettings, popupFormProfile );
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(validationSettings, popupFormPhoto);
formAddCardValidation.enableValidation();


