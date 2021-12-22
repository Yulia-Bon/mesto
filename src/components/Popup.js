export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._closeBtn = this._popup.querySelector('.popup__close');

        this._handleEscClose = this._handleEscClose.bind(this);


       /* this._handleEsc = (evt) => {
            this._handleEscClose(evt);
        }*/
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEsc);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _onOverlayClick(event) {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeBtn.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('click', this._onOverlayClick.bind(this));
    }

}
  
  