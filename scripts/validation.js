const formElement = document.querySelector('.popup__form');
const inputElement = document.querySelector('.popup__input');

//функция для отображения ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

//функция для скрытия ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};



const cleanInputErrorValidation = (popup, config) => {
  const formElement = popup.querySelector(config.formSelector);
  const inputList = popup.querySelectorAll(config.inputList);
  inputList.forEach((inputElement) => {
    hideInputError(config, formElement, inputElement);
  })
};

// функция для проверки на валидность инпутов
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


// ПРОВЕРКА ВАЛИДНОСТИ ФОРМЫ PROFILE 



const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};







// функция для установки слушателей проверки на валидность инпутов
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit');
  // проверяю состояние кнопки в начале
   toggleButtonState(inputList, buttonElement);
 
 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};


//cardData.addEventListener('submit', elementsInfoEdit);

enableValidation({
  formSelector: '.popup__form',
  inputList: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'}
); 



function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__submit_inactive');
      buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('popup__submit_inactive');
    buttonElement.removeAttribute('disabled');
  }
}