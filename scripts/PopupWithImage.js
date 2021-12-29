import Popup from './Popup.js';

export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector)

        this._popupFullImage = this._popup.querySelector(".popup__image");
        this._popupFullFigcaption = this._popup.querySelector(".popup__figcaption");
    }
    open(name, link){
        this._popupFullImage.src = link;
        this._popupFullImage.alt = name;
        this._popupFullFigcaption.textContent = name;
        super.open();
    }

}