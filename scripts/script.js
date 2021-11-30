//POPUP
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
const cardTemplate = document.querySelector("#photos-element").content;
const cardList = document.querySelector(".photo-grid");


const popupFormProfile = document.querySelector('.popup-user__form');
const popupFormPhoto = document.querySelector('.popup-photos__form');


const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsqButton);

}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsqButton);
}


//ДОБАВИТЬ КАРТОЧКИ НА СТРАНИЦУ
function addCard(src, name) {
  const cardItem = cardTemplate.cloneNode(true);
  const buttonLikePhoto = cardItem.querySelector(".photo-grid__like");
  const buttonDeletePhoto = cardItem.querySelector(".photo-grid__delete-button");
  const picPhotoGrid = cardItem.querySelector(".photo-grid__pic");

  picPhotoGrid.src = src;
  picPhotoGrid.alt = name;

  cardItem.querySelector(".photo-grid__title").textContent = name;
  picPhotoGrid.addEventListener("click", handlerFullFormSubmit);
  buttonDeletePhoto.addEventListener("click", deletePhoto);
  buttonLikePhoto.addEventListener("click", likePhoto);

  return cardItem;
}



function insertCard(card) {
  const photoCard = addCard(card.link, card.name);
  cardList.prepend(photoCard);
}



//Вывести карточки на страницу
initialCards.forEach(function (item) {
  insertCard(item);
});



//УДАЛИТЬ КАРТОЧКУ
function deletePhoto(evt) {
  const cardToDelete = evt.target.closest(".photo-grid__item");
  cardToDelete.remove();
}



// ФУНКЦИЯ ДЛЯ ЛАЙКА
function likePhoto(evt) {
  evt.target.classList.toggle("photo-grid__like_active");
}


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


//обновление состояния кнопки submit при открытии попапа добавления карточки и я чуть не сдохла пока делала
function handleOpenAddCardPopup () {
  updatePopupSubmitButtonState(popupPhotos);
  openPopup(popupPhotos);
}



//функция закрытия попапов по оверлэй 
const closePopupTarget = (evt) => { 
  if (evt.target === evt.currentTarget) { 
    evt.currentTarget.classList.remove("popup_opened"); 
  } 
};


// ф-я для передачи ссылки и подписи при открытии фуллскрин попапа
function handlerFullFormSubmit(evt) {
  popupFullImage.src = evt.target.src;
  popupFullImage.alt = evt.target.alt;
  popupFullFigcaption.textContent = evt.target.alt;
  // Закрываем попап
  openPopup(popupFull);
}



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


buttonEdit.addEventListener('click', handleOpenProfilePopup);
userButtonClosePopup.addEventListener('click', () => closePopup(popupUser));
buttonAdd.addEventListener('click', handleOpenAddCardPopup);
photoButtonClosePopup.addEventListener('click', () => closePopup(popupPhotos));
fullButtonClosePopup.addEventListener('click', () => closePopup(popupFull));

popupUser.addEventListener('click', closePopupTarget);
popupPhotos.addEventListener('click', closePopupTarget);
popupFull.addEventListener('click', closePopupTarget);

popupFormProfile.addEventListener('submit', profileInfoEdit);
popupFormPhoto.addEventListener('submit',submitHandlerFormPhoto );

enableValidation(validationSettings);

