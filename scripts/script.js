// ПЕРЕМЕННЫЕ ДЛЯ ПРОФИЛЯ
const closeButton = document.querySelector(".popup-user__close");
const editButton = document.querySelector(".profile__edit");
//  попап
const popup = document.querySelector(".popup-user");
//  формa
const formElement = document.querySelector(".popup-user__container"); // Воспользуйтесь методом querySelector()
// поля формы в DOM
const nameInput = document.querySelector(".popup-user__input_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup-user__input_type_job"); // Воспользуйтесь инструментом .querySelector()
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// ПЕРЕМЕННЫЕ ГАЛЕРЕИИ
const title = document.querySelector('.photo-grid__title');
const pic = document.querySelector(".photo-grid__pic");
const photoContainer = document.querySelector('.photo-grid');
const popupPhotos = document.querySelector(".popup-photos");

const addButton = document.querySelector(".profile__add-button");
const closeButtonPhoto = document.querySelector(".popup-photos__close");
const photoItem = document.querySelector(".photo-grid__item");
const photoTemplate = document.querySelector("#photos-element");

//Submit для фотографий
const photoName = document.querySelector('.popup-photos__input_type_card-name');
const photoLink = document.querySelector('.popup-photos__input_type_card-src');
const photoContain = document.querySelector('.popup-photos__container');

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

// ПЕРЕМЕННЫЕ ФУЛЛСКРИН ПОПАПА
let popUpPhotos = document.querySelector('.popup-fullscreen');
let popUpPhotosImage = popUpPhotos.querySelector('.popup-fullscreen__image');
let popUpPhotosFigcaption = popUpPhotos.querySelector('.popup-fullscreen__figcaption');
let popUpPhotosCloseButton = popUpPhotos.querySelector('.popup-fullscreen__close-button');

//Добавить разметку карточки
const cardTemplate = document.querySelector('#photos-element').content;
function addCard(src, name) {
  const cardItem = cardTemplate.cloneNode(true);
  cardItem.querySelector('.photo-grid__pic').src = src;
  cardItem.querySelector('.photo-grid__pic').alt = name;
  cardItem.querySelector('.photo-grid__title').textContent = name;
  return cardItem;
}



//Вставить карточку в галерею
const photoGallery = document.querySelector('.photo-grid');
function insertCard(card) {
  const photoCard = addCard(card.link, card.name);
  photoGallery.prepend(photoCard);
}
//Вывести карточки на страницу
initialCards.forEach(function(item) {
  insertCard(item);
});



// ФУНКЦИЯ сабмит добавления карточки
function submitPhotoForm (evt) {
    evt.preventDefault();
    const cardAddedByUser = {
      name: photoName.value,
      link: photoLink.value
    };
    insertCard(cardAddedByUser);
    toggleModalWindow(photoForm);
    photoName.value = '';
    photoLink.value = '';
}

function setSubmitHandler(form, submitHandler) {
  form.addEventListener('submit', submitHandler);
}

setSubmitHandler(photoContain, submitPhotoForm);

//ЛАЙК
const cardList = document.querySelector(".photo-grid");


//ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Обработчик «отправки» формы, пока она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); //отменяет стандартную отправку формы.

  // Получите значение полей jobInput и nameInput из свойства value
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  // Закрываем попап
  popupClose();
}

function popupOpen() {
  popup.classList.add("popup-user_opened");

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose() {
  popup.classList.remove("popup-user_opened");
}



// ФУНКЦИЯ ДЛЯ ЛАЙКА
function likePhoto(evt) {
  if (!evt.target.matches(".photo-grid__like")) {
    return;
  } else {
    evt.target.classList.toggle("photo-grid__like_active");
  }
}




// ФУНКЦИИ ДЛЯ ПОПАПА ГАЛЕРЕИ
// Обработчик «отправки» формы
function formSubmitHandlerPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы
  // Закрываем попап
  popupClosePhoto();
}

function popupOpenPhoto() {
  popupPhotos.classList.add("popup-photos_opened");
}

function popupClosePhoto() {
  popupPhotos.classList.remove("popup-photos_opened");
}


//УДАЛИТЬ КАРТОЧКУ
function deletePhoto(evt) {
  if (!evt.target.matches('.photo-grid__delete-button')) {
    return;
  }
  else {
    const cardToDelete = evt.target.closest('.photo-grid__item');
    cardToDelete.remove();
  }
}
cardList.addEventListener('click', deletePhoto);
//Поменять класс
function toggleModalWindow(popup) {
  popup.classList.toggle('popup_opened');
}




// Прикрепляем обработчики к формам:
// они будет следить за событиеми “submit” - «отправка» и "click"

closeButtonPhoto.addEventListener("click", popupClosePhoto);
addButton.addEventListener("click", popupOpenPhoto);
formElement.addEventListener("submit", formSubmitHandler);
closeButton.addEventListener("click", popupClose);
editButton.addEventListener("click", popupOpen);
cardList.addEventListener("click", likePhoto);

