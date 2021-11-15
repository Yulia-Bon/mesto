

// ПЕРЕМЕННЫЕ ДЛЯ ПРОФИЛЯ
const closeButton = document.querySelector(".popup__close");
const editButton = document.querySelector(".profile__edit");
//  попап
const popup = document.querySelector(".popup");
//  формa
const formElement = document.querySelector(".popup__container"); // Воспользуйтесь методом querySelector()
// поля формы в DOM
const nameInput = document.querySelector(".popup__input_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup__input_type_job"); // Воспользуйтесь инструментом .querySelector()
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// ПЕРЕМЕННЫЕ ГАЛЕРЕИИ
const photoContainer = document.querySelector('.photo-grid');
const popupPhotos = document.querySelector(".popup-photos");
const formElementPhotos = document.querySelector(".popup-photos__form");
const addButton = document.querySelector(".profile__add-button");
const closeButtonPhoto = document.querySelector(".popup-photos__close");
const photoItem = document.querySelector(".photo-grid__item");
const photoTemplate = document.querySelector("#photos-element");
const cardName = document.querySelector(".popup-photos__input_type_card-name");
const cardSrc = document.querySelector(".popup-photos__input_type_card-src");
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

function addPhoto(name, link) {
  // function handleRemoveTodo(e) {
  //     e.target.closest('.tasks__item').remove();
  // }

  const newPhoto = photoTemplate.content.querySelector('.photo-grid__item').cloneNode(true);
  const photoSrc = newPhoto.querySelector('.photo-grid__pic');
  const photoTitle = newPhoto.querySelector('.photo-grid__title');
  //const cardRemoveButton = newTask.querySelector('.tasks__trash');

  photoTitle.textContent = name;
  photoSrc.src = link;

  //cardRemoveButton.addEventListener('click', handleRemoveTodo);
  //closeButton.addEventListener('click', popupClose);

  return newPhoto;
}

initialCards.forEach(function(item) {
  const newCard = addPhoto(item['name'], item['link']);
  photoContainer.append(newCard);
});

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 

    // Форма добавления фото
    if (photoTitleInput.value && photoLinkInput.value) {
      photoContainer.prepend(addPhoto(photoTitleInput.value, photoLinkInput.value));
      // Очищаем поля
      photoTitleInput.value = '';
      photoLinkInput.value = '';
    }

    // Закрываем попап
    popupClose();
}

formPhoto.addEventListener('submit', formSubmitHandler);


// ПЕРЕМЕННЫЕ ФУЛЛСКРИН ПОПАПА
const popupFullscreen = document.querySelector(".popup_type_fullscreen");
const fullscreenImage = document.querySelector(".popup__fullscreen-image");
const fullscreenText = document.querySelector(".popup__fullscreen-text");


//ЛАЙК
const cardList = document.querySelector(".photo-grid");


//ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей jobInput и nameInput из свойства value
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  // Закрываем попап
  popupClose();
}

function popupOpen() {
  popup.classList.add("popup_opened");

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose() {
  popup.classList.remove("popup_opened");
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



// ФУНКЦИИ ГРУППЫ ФУЛЛСКРИН
function openFullscreen(evt) {
  const element = evt.target.closest(".photos__image");
  fullscreenImage.src = element.src;
  fullscreenText.textContent = element.alt;
  openPopup(popupFullscreen);
}

const popupFullscreenOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup(popupFullscreen);
  }
};
const fullscreenCloseButton = document.querySelector(
  ".popup__close_fullscreen"
);

// ФУНКЦИЯ СО СЛУШАТЕЛЯМИ
function addEventListeners (element) {
  element.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  element.querySelector('.element__like-button').addEventListener('click', likeCard);
  element.querySelector('.element__image').addEventListener('click', openFullscreen);
}


// Прикрепляем обработчики к формам:
// они будет следить за событиеми “submit” - «отправка» и "click"
formElementPhotos.addEventListener("submit", formSubmitHandlerPhoto);
closeButtonPhoto.addEventListener("click", popupClosePhoto);
addButton.addEventListener("click", popupOpenPhoto);

fullscreenCloseButton.addEventListener("click", () =>
  closePopup(popupFullscreen));
popupFullscreen.addEventListener("click", popupFullscreenOverlay);
 
formElement.addEventListener("submit", formSubmitHandler);
closeButton.addEventListener("click", popupClose);
editButton.addEventListener("click", popupOpen);

cardList.addEventListener("click", likePhoto);