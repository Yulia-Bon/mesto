import {
  initialCards,
  popupFull,
  popupFormPhoto,
  popupFormProfile,
  buttonAdd,
  buttonEdit,
  profileJob,
  profileName,
  popupPhotos,
  popupUser,
  validationSettings,
  cardTemplate,
} from "./initCards.js";

import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithImage } from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";

//ОБЬЕКТЫ(ЭКЗЕМПЛЯРЫ) КЛАССА ВАЛИДАЦИИ
const formProfileValidation = new FormValidator(
  validationSettings,
  popupFormProfile
);
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(
  validationSettings,
  popupFormPhoto
);
formAddCardValidation.enableValidation();

//попап с картинкой
const popupImage = new PopupWithImage(popupFull);
popupImage.setEventListeners();

// тут создаете карточку и возвращаете ее
function createCard(item) {
  const cards = new Card(item.name, item.link, cardTemplate, handleOpenImage);
  const photo = cards.generateCard();
  cardList.addItem(photo);
}

function handleOpenImage(name, link) {
  popupImage.open(name, link);
}

// Создание карточек
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item);
    },
  },
  ".photo-grid"
);

// Форма редактирования профиля
const profile = new UserInfo({
  nameSelector: profileName,
  jobSelector: profileJob,
});
const profileForm = new PopupWithForm(popupUser, {
  handleFormSubmit: (inputValues) => {
    profile.getUserInfo(inputValues);
    profileForm.close();
  },
});
profileForm.setEventListeners();
/** Обработчик кнопки редактирования профиля */
buttonEdit.addEventListener("click", () => {
  profile.setUserInfo();
  profileForm.open();
});

/** Форма добавления новой карточки */
const addPhotoForm = new PopupWithForm(popupPhotos, {
  handleFormSubmit: (inputValues) => {
    createCard(inputValues);
    addPhotoForm.close();
    formAddCardValidation.updatePopupSubmitButtonState();
  },
});
addPhotoForm.setEventListeners();
/**  Обработчик клика по кнопке добавления карточки */
buttonAdd.addEventListener("click", () => {
  addPhotoForm.open();
});

cardList.renderItem();
