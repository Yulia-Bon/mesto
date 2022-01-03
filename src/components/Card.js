export default class Card {
    constructor(name, link, template, handleOpenImage) {
        this._name = name;
        this._link = link;
        this._handleOpenImage = handleOpenImage;
        this._template = template;
    }

    //добавить разметку
    _getTemplate() {
        const cardItemNode = this._template.cloneNode(true);
        const cardItem = cardItemNode.querySelector(".photo-grid__item");
        return cardItem;
    }

    //добавить карточки на страницу
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._elementImage = this._element.querySelector(".photo-grid__pic");
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._element.querySelector(".photo-grid__title").textContent = this._name;

        return this._element;
    }

    //УДАЛИТЬ КАРТОЧКУ
    _deletePhoto() {

        // const cardToDelete = evt.target.closest(".photo-grid__item");
        this._element.remove();
    }

    // ФУНКЦИЯ ДЛЯ ЛАЙКА
    _likePhoto(evt) {
        evt.target.classList.toggle("photo-grid__like_active");
    }

    //слушатели
    _setEventListeners() {
        this._element
            .querySelector(".photo-grid__delete-button")
            .addEventListener("click", () => {
                this._deletePhoto();
            });
        this._element
            .querySelector(".photo-grid__like")
            .addEventListener("click", (evt) => {
                this._likePhoto(evt);
            });
        this._element
            .querySelector(".photo-grid__pic")
            .addEventListener("click", () => {
                this._handleOpenImage(this._name, this._link);
            });
    }
}
