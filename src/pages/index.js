import './index.css';
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
  insertValues
} from "../components/constants.js";

import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

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
  nameSelector:profileName, jobSelector:profileJob
});
const profileForm = new PopupWithForm(popupUser, {
  handleFormSubmit: (inputValues) => {
    profile.setUserInfo(inputValues);
    profileForm.close();
  },
});
profileForm.setEventListeners();
/** Обработчик кнопки редактирования профиля */
buttonEdit.addEventListener("click", () => {
  insertValues(profile.getUserInfo());
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

cardList.renderItems();
