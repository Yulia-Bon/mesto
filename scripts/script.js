
//POPUP
const popup = document.querySelector(".popup")
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



//функция закрытия попапов по оверлэй
const closePopupTarget = (evt) => {
  if(evt.target === evt.currentTarget) {
    evt.currentTarget.classList.remove('popup_opened');
  }
};


//функция закрытия всех попапов по оверлэй
const closePopupOverlay = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
  popup.addEventListener('click', closePopupTarget);
  });
};


//УДАЛИТЬ КАРТОЧКУ
function deletePhoto(evt) {
  const cardToDelete = evt.target.closest(".photo-grid__item");
  cardToDelete.remove();
}


// ФУНКЦИЯ ДЛЯ ЛАЙКА
function likePhoto(evt) {
  evt.target.classList.toggle("photo-grid__like_active");
}


//Вывести карточки на страницу
initialCards.forEach(function (item) {
  insertCard(item);
});

function insertCard(card) {
  const photoCard = addCard(card.link, card.name);
  cardList.prepend(photoCard);
}

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


// =(((
function togglePopup(popup) {
 popup.classList.toggle("popup_opened");
 if (popup.classList.contains('popup_opened')) {
  enableValidation(validationSettings);
} else {
  const formElement = document.querySelector('.popup__form');
  formElement.reset();
  cleanInputErrorValidation(popup, validationSettings); 
}
 popup.addEventListener('click',closePopupTarget);
}


 //ВЫХОД ИЗ ПОПАПА ПО НАЖАТИЮ НА ESC
function closePopupByEsqButton(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    togglePopup(popupOpened);
  }
  return;
}


// Обработчик «отправки» формы
function handlerFullFormSubmit(evt) {
  popupFullImage.src = evt.target.src;
  popupFullImage.alt = evt.target.alt;
  popupFullFigcaption.textContent = evt.target.alt;
  // Закрываем попап
togglePopup(popupFull);
}


//ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const editProfile = function(evt) {
togglePopup(popupUser);  
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
}

function submitHandlerForm(evt) {

  evt.preventDefault(); //отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  // Закрываем попап
  togglePopup(popupUser); 
 
}


// ФУНКЦИИ ДЛЯ ПОПАПА ГАЛЕРЕИ
// Обработчик «отправки» формы
function submitHandlerFormPhoto(evt) {
  // отменяет стандартную отправку формы
  evt.preventDefault();
  submitPhotoForm(evt);
  // Закрываем попап
  togglePopup(popupPhotos);
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
}


// Закрываем попап по нажатию Escape
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    togglePopup(popupUser);
  }
};


// Прикрепляем обработчики к формам:
// они будет следить за событиеми “submit” - «отправка» и "click"
fullButtonClosePopup.addEventListener("click", () => togglePopup(popupFull));
//buttonEdit.addEventListener('click', editProfile);
photoButtonClosePopup.addEventListener("click", () => togglePopup(popupPhotos));
buttonAdd.addEventListener("click", () => togglePopup(popupPhotos));
userButtonClosePopup.addEventListener("click", () => togglePopup(popupUser));
buttonEdit.addEventListener("click",editProfile, () => togglePopup(popupUser), );

userContainer.addEventListener("submit", submitHandlerForm);
photoContainer.addEventListener("submit", submitHandlerFormPhoto);

userContainer.addEventListener('keydown', keyHandler);

document.addEventListener('keydown', closePopupByEsqButton);
