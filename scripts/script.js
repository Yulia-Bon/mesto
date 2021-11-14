const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// кнопки Закрыть, Редактировать
let closeButton = document.querySelector(".popup__close");
let editButton = document.querySelector(".profile__edit");
//  попап
let popup = document.querySelector(".popup");
//  формa
let formElement = document.querySelector(".popup__container"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input_type_name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__input_type_job"); // Воспользуйтесь инструментом .querySelector()
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
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

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
closeButton.addEventListener("click", popupClose);
editButton.addEventListener("click", popupOpen);







// кнопки Закрыть, Редактировать
//let closeButton = document.querySelector(".popup__close");
let addButton = document.querySelector(".profile__add-button");
//  попап
let popupPhotos = document.querySelector(".popup-photos");
//  формa
let formElementPhotos = document.querySelector(".popup-photos__container"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let cardInput = document.querySelector(".popup-photos__input_type_card-name"); // Воспользуйтесь инструментом .querySelector()
let srcInput = document.querySelector(".popup-photos__input_type_card-src"); // Воспользуйтесь инструментом .querySelector()
let cardName = document.querySelector(".card__caption");
let cardPhoto = document.querySelector(".card__photo");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerPhoto(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей jobInput и nameInput из свойства value
 // cardName.textContent = cardInput.value;
  //cardPhoto.textContent = srcInput.value;

  // Закрываем попап
  popupClose();
}

function popupOpenPhoto() {
  popup-photos.classList.add("popup-photos_opened");

 // cardInput.value = cardName.textContent;
 // srcInput.value = cardPhoto.textContent;
}

function popupClosePhoto() {
  popup-photos.classList.remove("popup-photos_opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementPhotos.addEventListener("submit", formSubmitHandlerPhoto);
closeButton.addEventListener("click", popupClose);
addButton.addEventListener("click", popupOpenPhoto);





//Лайк
const cardList = document.querySelector('.photo-grid');
function likePhoto(evt) {
  if (!evt.target.matches('.photo-grid__like')) {
    return;
  }
  else {
    evt.target.classList.toggle('photo-grid__like_active');
  }
}

cardList.addEventListener('click', likePhoto);
