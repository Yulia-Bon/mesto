//=(

//НЕОБХОДИМЫЕ НАСТРОЙКИ ДЛЯ ВАЛИДАЦИИ ФОРМ
const validationSettings = {
  formSelector: '.popup__form',
  inputList: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}


// ПРОВЕРКА ВАЛИДНОСТИ ФОРМ

//функция для отображения ошибки
const showInputError = (validationSettings, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.errorClass);
};


//функция для скрытия ошибки
const hideInputError = (validationSettings, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationSettings.inputErrorClass);
  errorElement.classList.remove(validationSettings.errorClass);
  errorElement.textContent = '';
};

const cleanInputErrorValidation = (popup, validationSettings) => {
  const formElement = popup.querySelector(validationSettings.formSelector);
  const inputList = popup.querySelectorAll(validationSettings.inputList);
  inputList.forEach((inputElement) => {
    hideInputError(validationSettings, formElement, inputElement);
  })
};


// функция для проверки на валидность инпутов
const isValid = (validationSettings, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(validationSettings, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(validationSettings, formElement, inputElement);
  }
};


// ПРОВЕРКА ВАЛИДНОСТИ ФОРМЫ PROFILE 
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


// функция для установки слушателей проверки на валидность инпутов
const setEventListeners = (formElement, validationSettings) => {
  const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputList));
  const buttonElement = formElement.querySelector(validationSettings.buttonElement);
  toggleButtonState(validationSettings, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(validationSettings, formElement, inputElement);
      toggleButtonState(validationSettings, inputList, buttonElement);
    });
  });
};


const toggleButtonState = (validationSettings, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
  }
}


const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationSettings);
  });
};