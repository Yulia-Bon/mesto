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
  editProfileButton,
  avatar,
  editAvatarForm,
  insertValues,
  popupAvatar
} from "../components/constants.js";

import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

let userId = '';




const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34',
  headers: {
    authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
    'Content-Type': 'application/json;charset=utf-8'
  }
});


const promises = [api.getInitialCards(), api.getProfileInfo()];
Promise.all(promises)
  .then((res) => {
    userId = res[1]._id;
    sectionCards.renderItems(res[0]);
    profile.setUserInfo(res[1]);
  })
  .catch((err) => {
    console.log(err);
  })




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

/*
const formEditAvatar = new FormValidator(validationSettings, editAvatarForm);
formEditAvatar.enableValidation();
*/

//попап с картинкой
const popupImage = new PopupWithImage(popupFull);
popupImage.setEventListeners();


/** попап удаления карточки*/
const popupDelete = document.querySelector('#popup_type_check');
const popupDeleteImage = new PopupWithConfirmation(popupDelete);
popupDeleteImage.setEventListeners();


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


/*

// тут создаете карточку и возвращаете ее
function createCard(item) {
  const cards = new Card(item.name, item.link, cardTemplate, handleOpenImage, handleRemoveCard);
  const photo = cards.generateCard();
  cardList.addItem(photo);
}

function handleOpenImage(name, link) {
  popupImage.open(name, link);
}

function handleRemoveCard ()  {
  popupDeleteImage.open();
};


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


*/
/*
const initialCards = api.getInitialCards()
    .then((data) => {
      const cardList = new Section({items:data, renderer: (item) =>{
          cardList.addItem(createCopyCard(item));
        }}, '.photo-grid');
      cardList.renderItem();
      return cardList
    })
    .catch((err) => {
      console.log(err);
    });

*/


/*
/CARDS 

const createCopyCard = (data) => {
  const card =  new Card({data, userId,
   handleOpenImage: () => {
     popupImage.open({name: data.name, link: data.link});
   },
   handleRemoveCard: (id, element) => {
     popupDeleteImage.open();
     popupDeleteImage.getCard(id, element);
   },
   handleLike:{
     handleSetLike: (id) => {
       api.setLike(id)
       .then((res) => {
         card.updateLikes(res.likes.length);
     })
       .catch(err => {
         console.log(err);
     })
   },
     handleDeleteLike: (id) => {
       api.deleteLIke(id)
       .then((res) => {
         card.updateLikes(res.likes.length);
     })
       .catch(err => {
         console.log(err);
     });
 }
  }},'.photo-grid');
  return card.generateCard()
};


const sectionCards = new Section({renderer: (item) => {
  sectionCards.addItem(createCopyCard(item));
}}, '.photo-grid');

 */


// Форма редактирования профиля
const profile = new UserInfo({
  nameSelector:profileName, jobSelector:profileJob,  avatarSelector:avatar
});
const profileForm = new PopupWithForm(popupUser, {
  handleFormSubmit: (inputValues) => {

    api.setProfileInfo(inputValues)
  .then(() => {
    profile.setUserInfo(inputValues);
    profileForm.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    profileForm.renderLoading(false);
  });
}});
    
profileForm.setEventListeners();
/** Обработчик кнопки редактирования профиля */
buttonEdit.addEventListener("click", () => {
  insertValues(profile.getUserInfo());
  profileForm.open();
});



/** Форма добавления новой карточки */
const addFhotoForm = new PopupWithForm(popupPhotos, {handleFormSubmit: (inputValues) =>{
  api.setNewCard(inputValues)
  .then((data) => {
    sectionCards.aIddNewItem(createCopyCard(data));
    addFhotoForm.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    addFhotoForm.renderLoading(false);
  });
}});
addFhotoForm.setEventListeners();
/**  Обработчик клика по кнопке добавления карточки */
buttonAdd.addEventListener('click', () => {
  formAddCardValidation.updatePopupSubmitButtonState();
 // formAddPhoto.resetValidation();
  addFhotoForm.open();
});

/* Форма добавления новой карточки 
const addPhotoForm = new PopupWithForm(popupPhotos, {
  handleFormSubmit: (inputValues) => {
    createCard(inputValues);
    addPhotoForm.close();
    formAddCardValidation.updatePopupSubmitButtonState();
  },
});
addPhotoForm.setEventListeners();
/*  Обработчик клика по кнопке добавления карточки 
buttonAdd.addEventListener("click", () => {
  addPhotoForm.open();
});
*/
//cardList.renderItems();



//**AVATAR */
/** Форма редактирования аватара */
const avatarForm = new PopupWithForm(popupAvatar, {handleFormSubmit: (inputValues) => {
  api.changeAvatar(inputValues)
  .then(() => {
    profile.setUserInfo(inputValues);
    avatarForm.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    avatarForm.renderLoading(false);
  });
}});
avatarForm.setEventListeners();
/** Обработчик изменения аватара */
avatar.addEventListener('click', () => {
  avatarForm.open();
 // formEditAvatar.resetValidation();
});

cardList.renderItems();