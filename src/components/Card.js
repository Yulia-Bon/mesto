export default class Card {
    constructor ({data, userId, handleOpenImage, handleRemoveCard, handleLike}, template){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._cardUserId = data.owner._id;
        this._user = userId;
        this._handleOpenImage = handleOpenImage;
        this._handleRemoveCard = handleRemoveCard;
        this._handleLike = handleLike;
        this._template = template;
      }
    //добавить разметку
    _getTemplate() {
        const cardTemplate = document.querySelector(this._template).content; 
        const cardItemNode = cardTemplate.cloneNode(true);
        const cardItem = cardItemNode.querySelector(".photo-grid__item");
        return cardItem;
    }
    //добавить карточки на страницу
    generateCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector(".photo-grid__pic");
        this._elementLike = this._element.querySelector('.photo-grid__like')
        this._deleteButton = this._element.querySelector('.photo-grid__delete-button')
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._element.querySelector(".photo-grid__title").textContent = this._name;
        this._setEventListeners();
        this._checkLike();
        if(this._user !== this._cardUserId){
          this._deleteButton.remove();
        }
        return this._element;
    }



    _checkLike(){
        if(this._likes.length !== 0){
          this._element.querySelector('.photo-grid__like-numbers').textContent = this._likes.length;
        } else{
          this._element.querySelector('.photo-grid__like-numbers').textContent = '';
        }
        this._likes.forEach((like) => {
          if(like._id === this._user){
            this._elementLike.classList.add('photo-grid__like_active');
        }});
      }

      updateLikes(likes){
        this._elementLike.classList.toggle('photo-grid__like_active');
        if(likes !== 0){
          this._element.querySelector('.photo-grid__like-numbers').textContent = likes;
        } else{
          this._element.querySelector('.photo-grid__like-numbers').textContent = '';
        }
      }


      
    //слушатели
    _setEventListeners() {
        this._elementLike.addEventListener('click', () => {
            if(!this._elementLike.classList.contains('photo-grid__like_active')){
              this._handleLike.handleSetLike(this._id);
            } else {
              this._handleLike.handleDeleteLike(this._id);
            };
          });
       //   if(this._user === 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190'){
            this._deleteButton.addEventListener('click', () => {
              this._handleRemoveCard(this._id, this._element);
            });
         // }
        this._element
            .querySelector(".photo-grid__pic")
            .addEventListener("click", () => {
                this._handleOpenImage(this._name, this._link);
            });
    }
}