import { Popup } from './popup.js';

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }


    setSubmitAction(action) {                                      //принимает функцию, которую выполнит при сабмите формы
        this._handleSubmitCallback = action;
    }
    
    
    setEventListeners() {
        super.setEventListeners();

        // вешаем выполнение this._handleSubmitCallback на кнопку сабмита 
        //(Форма подтверждения ничего не должна знать о том что она подтверждает. 
        //Она просто выполняет функцию по нажатию “Да”)
        this._submitButton = document.querySelector('.popup__save_with_confirmation');
        this._submitButton.addEventListener('click', () => {
           this._handleSubmitCallback();
        });
    }

    
}


        