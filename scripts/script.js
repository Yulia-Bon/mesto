//POPUP
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
//  формa
const formElement = document.querySelector(".popup-user__container"); // Воспользуйтесь методом querySelector()
// поля формы в DOM
const nameInput = document.querySelector(".popup-user__input_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup-user__input_type_job"); // Воспользуйтесь инструментом .querySelector()
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// ПЕРЕМЕННЫЕ ГАЛЕРЕИИ
const title = document.querySelector(".photo-grid__title");
const pic = document.querySelector(".photo-grid__pic");
const photoContainer = document.querySelector(".photo-grid");
const photoItem = document.querySelector(".photo-grid__item");
const photoTemplate = document.querySelector("#photos-element");

//Submit для фотографий
const photoName = document.querySelector(".popup-photos__input_type_card-name");
const photoLink = document.querySelector(".popup-photos__input_type_card-src");
const photoContain = document.querySelector(".popup-photos__container");
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
const popupFullContainer = document.querySelector(".popup-fullscreen__container");
const popupFullImage = document.querySelector(".popup-fullscreen__image");
const popupFullFigcaption = document.querySelector(".popup-fullscreen__figcaption");


//Добавить разметку карточки
const cardTemplate = document.querySelector("#photos-element").content;
const cardList = document.querySelector(".photo-grid");


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
  cardItem.querySelector(".photo-grid__pic").src = src;
  cardItem.querySelector(".photo-grid__pic").alt = name;
  cardItem.querySelector(".photo-grid__title").textContent = name;
  const pic = cardItem.querySelector(".photo-grid__pic");
  pic.addEventListener("click", popupFullOpen);
  return cardItem;
}

//ОДИН ПОПАП, ЧТОБЫ ПРАВИТЬ ВСЕМИ
function popupToggle(popup) {
 popup.classList.toggle("popup_opened");
}



// Обработчик «отправки» формы, пока она никуда отправляться не будет
function formSubmitHandlerFull(evt) {
  popupFullImage.src = evt.target.src;
  popupFullImage.alt = evt.target.alt;
  popupFullFigcaption.textContent = evt.target.alt;
  evt.preventDefault(); //отменяет стандартную отправку формы.
  // Закрываем попап
  popupToggle();
}



//ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Обработчик «отправки» формы, пока она никуда отправляться не будет
function formSubmitHandler(evt) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  evt.preventDefault(); //отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  // Закрываем попап
  popupToggle();
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
  // отменяет стандартную отправку формы
  evt.preventDefault();
  submitPhotoForm(evt);
  // Закрываем попап
  popupToggle();
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



//УДАЛИТЬ КАРТОЧКУ
function deletePhoto(evt) {
  if (!evt.target.matches(".photo-grid__delete-button")) {
    return;
  } else {
    const cardToDelete = evt.target.closest(".photo-grid__item");
    cardToDelete.remove();
  }
}

// Прикрепляем обработчики к формам:
// они будет следить за событиеми “submit” - «отправка» и "click"
popuoFullCloseButton.addEventListener("click", () => togglePopup(popupUser))
closeButtonPhoto.addEventListener("click", popupClosePhoto);
addButton.addEventListener("click", popupOpenPhoto);

closeButton.addEventListener("click", popupClose);
editButton.addEventListener("click", popupOpen);

formElement.addEventListener("submit", formSubmitHandler);

cardList.addEventListener("click", likePhoto);
photoContain.addEventListener("submit", formSubmitHandlerPhoto);
cardList.addEventListener("click", deletePhoto);
