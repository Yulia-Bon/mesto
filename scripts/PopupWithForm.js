import Popup from './Popup.js'

export default class PopupWithForm extends Popup{
    constructor(popupSelector, {handleFormSubmit}){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;

        const container = this._popup.querySelector('.popup__container');
        this._form = container.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        //this._button = this._popup.querySelector('.popup__submit');
    }



    _getInputValues() {
        this._data = {};
        this._inputList.forEach((input) => {
            this._data[input.name] = input.value;
        });
        return this._data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", () => {
            this._handleFormSubmit(this._getInputValues());

          //  this.close();
        });

    }

    close() {
        super.close();
        this._form.reset();
    }

    //renderLoading () {
    // if () {
    //
    // }
    // else {
    //
    // }
    // }
}