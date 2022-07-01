export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
    }

    open() {
      this._popup.classList.add('popup_active');
      document.addEventListener('keydown', (evt) => {
        this._handleEscClose(evt);
      });
    }

    close() {
      this._popup.classList.remove('popup_active');
      document.removeEventListener('keydown', (evt) => {
        this._handleEscClose(evt);
      });
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

      this._popup.addEventListener('click', (event) => {
        this._handleOnOverlayclick(event);
      });
    }
}