const inputName = document.querySelector(".popup-user__input-name");
const inputAbout = document.querySelector(".popup-user__input_type_job");
export const insertValues = (config) => {
  inputName.value = config.name;
  inputAbout.value = config.about;
};

const validationSettings = {
  formSelector: ".popup__form",
  inputList: ".popup__input",
  buttonElement: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type-error",
  errorClass: "popup__input-error_active",
};

const popupUser = document.querySelector(".popup-user");
const popupPhotos = document.querySelector(".popup-photos");

//BATTON OPEN POPUP
const buttonEdit = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__add-button");

//ФОРМЫ ПОПАПОВ
const popupFormProfile = document.querySelector(".popup-user__form");
const popupFormPhoto = document.querySelector(".popup-photos__form");
const popupFull = document.querySelector(".popup-fullscreen");

const popupDelete = document.querySelector("#popup_type_check");

const avatar = document.querySelector(".profile__avatar");
const editAvatarForm = document.querySelector("#edit_avatar");
const popupAvatar = document.querySelector("#popup_type_avatar");
const editAvatarButton = document.querySelector(".profile__edit-avatar");

export {
  popupFull,
  popupFormPhoto,
  popupFormProfile,
  buttonAdd,
  buttonEdit,
  popupPhotos,
  popupUser,
  validationSettings,
  avatar,
  editAvatarForm,
  popupAvatar,
  editAvatarButton,
  popupDelete,
};
