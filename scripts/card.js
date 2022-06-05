export class Card {
    constructor(data, cardSelector, openImage) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleOpenImage = openImage;
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

        this._img.src = this._link;
        this._img.alt = this._name;
        this._title.textContent = this._name;

        this._setEventListeners();
        
        return this._element;
    }

    _setEventListeners() {
        this._remove.addEventListener('click', () => {
            this._handleRemoveElement();
        });

        this._like.addEventListener('click', () => {
            this._handleToggleLike();
        });

        this._img.addEventListener('click', () => {
            this._handleOpenImage(this._link, this._name);
        });
    }

    _handleRemoveElement() {
        this._element.remove();
        this._element = null;
    }

    _handleToggleLike() {
        this._like.classList.toggle('elements__like_active');
    }
}