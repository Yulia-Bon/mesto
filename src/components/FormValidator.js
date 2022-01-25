//НЕОБХОДИМЫЕ НАСТРОЙКИ ДЛЯ ВАЛИДАЦИИ ФОРМ
export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);


  }

  _getErrorElement(inputElement) {
    return this._formElement.querySelector(`#${inputElement.id}-error`);
  }

  //ПОКАЗАТЬ ОШИБКИ ВАЛИДАЦИИ
  _showInputError(inputElement, validationMessage, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  //СКРЫТЬ ОШИБКИ ВАЛИДАЦИИ
  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  //ПРОВЕРИТЬ ВАЛИДАЦИЮ
  _checkInputValidity(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage,
        errorElement
      );
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }

  // ПРОВЕРКА ВАЛИДНОСТИ ФОРМЫ PROFILE
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // функция для установки слушателей проверки на валидность инпутов
  _setEventListeners() {
    this._updateButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._updateButtonState(this._inputList, this._buttonElement);
      });
    });
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }

  //ИПОЛЬЗУЕТСЯ В SCRIPT.JS ДЛЯ ОБНОВЛЕНИЯ СОСТОЯНИИ КНОПКИ САБМИТ
  updatePopupSubmitButtonState() {
    this._updateButtonState(this._inputList, this._buttonElement);
  }

  _updateButtonState(inputList, buttonElement) {
    const validationResult = this._hasInvalidInput(inputList);
    this._setButtonDisabledState(buttonElement, validationResult);
  }

  _setButtonDisabledState(buttonElement, newState) {
    if (newState) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  enableValidation() {
    this._setEventListeners();
  }
}
