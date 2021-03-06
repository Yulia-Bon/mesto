import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { handleSubmitDelete }) {
    super(popupSelector);
    this._handleSubmitDelete = handleSubmitDelete;
    this._form = this._popup.querySelector(".popup__form");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitDelete(this._idCard, this._card);
    });
  }

  getCard(id, card) {
    this._clear();
    this._idCard = id;
    this._card = card;
  }

  _clear() {
    this._idCard = "";
    this._card = "";
  }
}
