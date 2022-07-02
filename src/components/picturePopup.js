import { Popup } from './popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);

      this._popupImageName = this._popup.querySelector('.popup__img-name');
      this._popupImage = this._popup.querySelector('.popup__img');
    }

    open(link, name) {
      this._popupImage.src = link;
      this._popupImage.alt = name;
      this._popupImageName.textContent = name;
        
      super.open();
    }
}