
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './initCards.js';


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


//POPUP
const popupList = Array.from(document.querySelectorAll('.popup'));
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

//ФОРМЫ ПОПАПОВ
const popupFormProfile = document.querySelector('.popup-user__form');
const popupFormPhoto = document.querySelector('.popup-photos__form');

//ОТКРЫТЬ ПОПАП
export const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsqButton);

}

//ЗАКРЫТЬ ПОПАП
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsqButton);
}



//ИНИЦИАЛИЗАЦИЯ КАРТОЧЕК
function insertCard(card) {
  const cardsh= new Card(card.name, card.link, cardTemplate);
 
  
  const photoCard = cardsh.generateCard();
  cardList.prepend(photoCard);
}


function createCard(item) {
    // тут создаете карточку и возвращаете ее
  return cardElement
}









//Ф-Я ИЗ РЕКОМЕНДАЦИЙ РУВЬЮВЕРА 

function handlerOpenImage(name, link) {
  insertCard(cardAddedByUser);
  const cardAddedByUser = {
    name: photoName.value,
    link: photoLink.value,
  };
  openPopup(popup);


 
 // устанавливаем ссылку
  //устанавливаем подпись картинке
  //открываем попап универсальной функцией, которая навешивает обработчик Escape внутри себя
}





/*

function renderCard(card){
  elementsContainer.prepend(card);
}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, cardTemplate ).generateCard();
  renderCard(card);
});
*/







//Вывести карточки на страницу
initialCards.forEach(function (item) {
  insertCard(item);
});

//ОБРАБОТЧИК ОТПРАВКИ ФОРМЫ
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

/*
//функция закрытия попапов по оверлэй 
const closePopupTarget = (evt) => { 
  if (evt.target === evt.currentTarget) { 
    closePopup(evt.target);
  } 
};*/


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
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
  return;
}

//ЗАКРЫВАЕМ ПОПАПЫ ВТЧ НА ОВЭРЛЕЙ
popupList.forEach((popup) => {
  popup.addEventListener('click', function(evt){
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
      closePopup(popup);
    }
  });
})


function handleOpenAddCardPopup () {
formAddCardValidation.updatePopupSubmitButtonState()
openPopup(popupPhotos)}


//ОБРАБОТЧИКИ
buttonEdit.addEventListener('click', handleOpenProfilePopup);
popupFormProfile.addEventListener('submit', profileInfoEdit);
popupFormPhoto.addEventListener('submit',submitHandlerFormPhoto );
buttonAdd.addEventListener('click', handleOpenAddCardPopup);


//ОБЬЕКТЫ(ЭКЗЕМПЛЯРЫ) КЛАССА ВАЛИДАЦИИ
const formProfileValidation = new FormValidator(validationSettings, popupFormProfile );
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(validationSettings, popupFormPhoto);
formAddCardValidation.enableValidation();
