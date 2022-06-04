export class Card {
    constructor(data, cardSelector, openImage) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openImage = openImage;
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

        this._element.querySelector('.elements__img').src = this._link;
        this._element.querySelector('.elements__img').alt = this._name;
        this._element.querySelector('.elements__title').textContent = this._name;

        this._setEventListeners();
        
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__remove').addEventListener('click', () => {
            this._removeElement();
        });

        this._element.querySelector('.elements__like').addEventListener('click', () => {
            this._toggleLike();
        });

        this._element.querySelector('.elements__img').addEventListener('click', () => {
            this._openImage(this._link, this._name);
        });
    }

    _removeElement() {
        this._element.remove();
    }

    _toggleLike() {
        this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    }
}