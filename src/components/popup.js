export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);

        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
      this._popup.classList.add('popup_active');
      document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
      this._popup.classList.remove('popup_active');
      document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
      this.close();
      }
    }
    
    _handleOnOverlayclick(event) {
      if(event.target === event.currentTarget) {
      this.close(event.currentTarget);
      }
    }

    setEventListeners() {
      this._buttonClose = this._popup.querySelector('.popup__close');
      this._buttonClose.addEventListener('click', () => {
        this.close();
      });

      this._popup.addEventListener('mousedown', (event) => {
        this._handleOnOverlayclick(event);
      });
    }
}