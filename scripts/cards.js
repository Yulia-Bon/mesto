import { openPopup } from "./script.js";


export class Card {
  constructor(name, link, templateSelector, handlerOpenImage) {
    this._name = name;
    this._link = link;
    //this._handleOpenImage = handleOpenImage;
    this._templateSelector = templateSelector;
  }

  //добавить разметку
  _getTemplate() {
    this._cardTemplate = this._templateSelector;
    this._cardItem = this._cardTemplate.cloneNode(true);

    return this._cardItem;
  }

  //добавить карточки на страницу
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._elementImage = this._cardItem.querySelector(".photo-grid__pic");

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._element.querySelector(".photo-grid__title").textContent = this._name;
 
    return this._element;
  }

  //УДАЛИТЬ КАРТОЧКУ
  _deletePhoto(evt) {
    const cardToDelete = evt.target.closest(".photo-grid__item");
    cardToDelete.remove();
  }

  // ФУНКЦИЯ ДЛЯ ЛАЙКА
  _likePhoto(evt) {
    evt.target.classList.toggle("photo-grid__like_active");
  }

  // ф-я для передачи ссылки и подписи при открытии фуллскрин попапа
  _handlerFullFormSubmit(evt) {
    // ПЕРЕМЕННЫЕ ФУЛЛСКРИН ПОПАПА
    const popupFull = document.querySelector(".popup-fullscreen");
    const popupFullImage = document.querySelector(".popup__image");
    const popupFullFigcaption = document.querySelector(".popup__figcaption");
    popupFullImage.src = evt.target.src;
    popupFullImage.alt = evt.target.alt;
    popupFullFigcaption.textContent = evt.target.alt;
    // Закрываем попап
    openPopup(popupFull);
  }

  //слушатели
  _setEventListeners() {
    this._element
      .querySelector(".photo-grid__delete-button")
      .addEventListener("click", (evt) => {
        this._deletePhoto(evt);
      });
    this._element
      .querySelector(".photo-grid__like")
      .addEventListener("click", (evt) => {
        this._likePhoto(evt);
      });
    this._element
      .querySelector(".photo-grid__pic")
      .addEventListener("click", (evt) => {
        this._handlerFullFormSubmit(evt);
      });
  }
}
