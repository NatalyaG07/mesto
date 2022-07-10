export class Card {
    constructor(data, myId, cardSelector, handleCardDelete, handleAddLike, handleRemoveLike, openImage) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes.length;
        this._myLike = data.likes;
        this._myId = myId;
        this._userId = data.owner._id;
        this._cardId = data._id;
        this._cardSelector = cardSelector;
        this._handleOpenImage = openImage;
        this._handleCardDelete = handleCardDelete;
        this._handleAddLike = handleAddLike;
        this._handleRemoveLike = handleRemoveLike;
    }

    _getTemplate() {
        const cardElementTemplate = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.elements__iteam')
        .cloneNode(true);

        return cardElementTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._img = this._element.querySelector('.elements__img');
        this._like = this._element.querySelector('.elements__like');
        this._title = this._element.querySelector('.elements__title');
        this._remove = this._element.querySelector('.elements__remove');
        this._likesCounter = this._element.querySelector('.elements__like-counter');

        this._img.src = this._link;
        this._img.alt = this._name;
        this._title.textContent = this._name;
        this._likesCounter.textContent = this._likes;


        this._handleRemoveElementActive();
        this._handleMyLikeDisplay();
        this._setEventListeners();
        
        return this._element;
    }

    _setEventListeners() {
 
        this._remove.addEventListener('click', () => {
            this._handleCardDelete(this);
        });
        
        this._like.addEventListener('click', () => {
            if(this._like.classList.contains('elements__like_active')) {
                this._handleRemoveLike(this);
            } else {
                this._handleAddLike(this);
            }
        })

        this._img.addEventListener('click', () => {
            this._handleOpenImage(this._link, this._name);
        });
    }

    counterLikes(likes) {
        this._likesCounter.textContent = likes.length;
        this._handleToggleLike();
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }

    _handleRemoveElementActive() {
        if (this._userId === this._myId) {
          this._remove.classList.add('elements__remove_active');
        }
    }

    _handleToggleLike() {
        this._like.classList.toggle('elements__like_active');
    }

    _handleMyLikeDisplay() {
        this._myLike.forEach(like => {
            if(like._id === this._myId) {
                this._like.classList.add('elements__like_active');
            }
        });
    }

}