


const popupFormProfile = document.querySelector('.popup-user__form');
const popupFormPhoto = document.querySelector('.popup-photos__form');












//НЕОБХОДИМЫЕ НАСТРОЙКИ ДЛЯ ВАЛИДАЦИИ ФОРМ


export class FormValidator{
  constructor(config, formElement) {
    this._config = config;
    this._formSelector = config.formSelector;
    this._inputList = config.inputList;
    this._buttonElement = config.buttonElement;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass
    this._formElement = formElement;
    
   // this._inputList = Array.from(form.querySelectorAll(config.inputSelector));
   // this._submitButton = form.querySelector(config.submitButtonSelector);
}




// ПРОВЕРКА ВАЛИДНОСТИ ФОРМ

//функция для отображения ошибки
 _showInputError (inputElement) {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  
  errorElement.classList.add(this._errorClass);
  errorElement.textContent = errorMessage;
};


//функция для скрытия ошибки
 _hideInputError (inputElement) {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};


// функция для проверки на валидность инпутов
 _isValid (inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, errorElement);
  } else {
    this._hideInputError(inputElement);
  }
};


// ПРОВЕРКА ВАЛИДНОСТИ ФОРМЫ PROFILE 
 _hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


// функция для установки слушателей проверки на валидность инпутов
 _setEventListeners () {
  const inputList = Array.from(this._formElement.querySelectorAll(this._inputList));
  const buttonElement = this._formElement.querySelector(this._buttonElement);
  this._updateButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._isValid(inputElement);
      this._updateButtonState(inputList, buttonElement);
    });
  });
};




 _updateButtonState (inputList, buttonElement) {
  const validationResult =  this._hasInvalidInput(inputList);
  this._setButtonDisabledState(buttonElement, validationResult);
}


_setButtonDisabledState (buttonElement, newState) {
  if (newState) {
    buttonElement.classList.add(this._config.inactiveButtonClass);
    buttonElement.disabled = true
  } else {
    buttonElement.classList.remove(this._config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

enableValidation () {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(formElement);
  });
};




}


export const updatePopupSubmitButtonState = (popup) => {
  const formElement = popup.querySelector(this._formSelector);
  const inputList = Array.from(formElement.querySelectorAll(this._inputList));
  const buttonElement = formElement.querySelector(this._buttonElement);
  updateButtonState(inputList, buttonElement);
}

//обновление состояния кнопки submit при открытии попапа добавления карточки



