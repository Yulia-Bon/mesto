import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupFullImage = this._popup.querySelector(".popup__image");
    this._popupFullFigcaption = this._popup.querySelector(".popup__figcaption");
  }
  open(data) {
    super.open();
    this._popupFullImage.src = data.link;
    this._popupFullImage.alt = data.name;
    this._popupFullFigcaption.textContent = data.name;
  }
}
