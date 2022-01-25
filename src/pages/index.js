import "./index.css";
import {
  popupFull,
  popupFormPhoto,
  popupFormProfile,
  buttonAdd,
  buttonEdit,
  popupPhotos,
  popupUser,
  validationSettings,
  editAvatarForm,
  insertValues,
  popupAvatar,
  editAvatarButton,
  popupDelete,
} from "../components/constants.js";

import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

let userId = "";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-34",
  headers: {
    authorization: "df21cdb1-cdd7-4792-acbf-9af5bc5a6190",
    "Content-Type": "application/json",
  },
});

//ОЧЕВИДНО, ЭТО ПРОМИС:)
const promises = [api.getInitialCards(), api.getProfileInfo()];
Promise.all(promises)
  .then((res) => {
    userId = res[1]._id;
    sectionCards.renderItems(res[0]);
    profile.setUserInfo(res[1]);
  })
  .catch((err) => {
    console.log(err);
  });

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

const formEditAvatar = new FormValidator(validationSettings, editAvatarForm);
formEditAvatar.enableValidation();

//РАБОТА С КАРТОЧКАМИ.

const createCopyCard = (data) => {
  const card = new Card(
    {
      data,
      userId,
      handleOpenImage: () => {
        popupImage.open({ name: data.name, link: data.link });
      },
      handleRemoveCard: (id, card) => {
        popupDeleteImage.open();
        popupDeleteImage.getCard(id, card);
      },
      handleLike: {
        handleSetLike: (id) => {
          api
            .setLike(id)
            .then((res) => {
              card.updateLikes(res.likes.length);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        handleDeleteLike: (id) => {
          api
            .deleteLIke(id)
            .then((res) => {
              card.updateLikes(res.likes.length);
            })
            .catch((err) => {
              console.log(err);
            });
        },
      },
    },
    "#photos-element"
  );
  return card.generateCard();
};

//СОЗДАНИЕ ГАЛЕРЕИ ИЗ КАРТОЧЕК
const sectionCards = new Section(
  {
    renderer: (item) => {
      sectionCards.addItem(createCopyCard(item));
    },
  },
  ".photo-grid"
);

//ПОПАП С КАРТОЧКОЙ
const popupImage = new PopupWithImage(popupFull);
popupImage.setEventListeners();


//РАБОТА С КАРТОЧКАМИ. ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
// Форма добавления новой карточки
const addFhotoForm = new PopupWithForm(popupPhotos, {
  handleFormSubmit: (inputValues) => {
    api
      .setNewCard(inputValues)
      .then((data) => {
        sectionCards.addNewItem(createCopyCard(data));
        addFhotoForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addFhotoForm.renderLoading(false);
      });
  },
});
addFhotoForm.setEventListeners();


//УДАЛЕНИЕ КАРТОЧКИ
const popupDeleteImage = new PopupWithConfirmation(popupDelete, {
  handleSubmitDelete: (id, card) => {
    api
      .deleteCard(id)
      .then(() => {
        card.removeCard()//   вот здесь нужно вызвать метод
        popupDeleteImage.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

popupDeleteImage.setEventListeners();





//  Обработчик клика по кнопке добавления карточки
buttonAdd.addEventListener("click", () => {
  formAddCardValidation.updatePopupSubmitButtonState();
  addFhotoForm.open();
});

//РАБОТА С ПРОФИЛЕМ

const profile = new UserInfo({
  name: ".profile__name",
  about: ".profile__job",
  avatar: ".profile__avatar",
});

// Форма редактирования профиля
const profileForm = new PopupWithForm(popupUser, {
  handleFormSubmit: (inputValues) => {
    api
      .setProfileInfo(inputValues)
      .then((data) => {
        profile.setUserInfo({
          name: data.name,
          about: data.about,
          avatar: data.avatar,
        });
        profileForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profileForm.renderLoading(false);
      });
  },
});

profileForm.setEventListeners();

//Обработчик кнопки редактирования профиля
buttonEdit.addEventListener("click", () => {
  insertValues(profile.getUserInfo());
  profileForm.open();
});

//AVATAR
//Форма редактирования аватара
const avatarForm = new PopupWithForm(popupAvatar, {
  handleFormSubmit: (inputValues) => {
    api
      .changeAvatar(inputValues)
      .then((res) => {
        profile.setUserInfo({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        });
        avatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarForm.renderLoading(false);
      });
  },
});
avatarForm.setEventListeners();
// Обработчик изменения аватара
editAvatarButton.addEventListener("click", () => {
  avatarForm.open();
  formEditAvatar.updatePopupSubmitButtonState();
});
