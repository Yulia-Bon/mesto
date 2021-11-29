//=(

  function toggleButtonState (inputList, buttonElement) {
    const { inactiveButtonClass } = validationSettings;
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

//функция для отображения ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const { inputErrorClass, errorClass } = validationSettings;
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass); 
  errorElement.textContent = errorMessage;
};

//функция для скрытия ошибки
const hideInputError = (formElement, inputElement) => {
  const { inputErrorClass, errorClass } = validationSettings;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};


const cleanInputErrorValidation = (popup, config) => {
  const formElement = popup.querySelector(config.formSelector);
  const inputList = popup.querySelectorAll(config.inputSelector);
  inputList.forEach((inputElement) => {
    hideInputError(config, formElement, inputElement);
  })
};


// функция для проверки на валидность инпутов
const isValid = (formElement, inputElement, validationSettings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,validationSettings );
  } else {
    hideInputError(formElement, inputElement, validationSettings);
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
  const {
    inputSelector,
    submitButtonSelector,
    ...restConfig
  } = validationSettings;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  // проверяю состояние кнопки в начале
   toggleButtonState(inputList, buttonElement);
 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, restConfig)
      toggleButtonState(inputList, buttonElement);
    });
  });
};


const enableValidation = (validationSettings) => {
  const { formSelector, ...restConfig } = validationSettings;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, restConfig);
  });
};


const validationSettings= {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'}





enableValidation(validationSettings);