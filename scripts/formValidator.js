export class FormValidator {
    constructor(obj, formElement) {
        this._formSelector = obj.formSelector;
        this._inputSelector = obj.inputSelector;
        this._submitButtonSelector = obj.submitButtonSelector;
        this._inactiveButtonClass = obj.inactiveButtonClass;

        this._formElement = formElement;
        this._buttonElement = formElement.querySelector(obj.submitButtonSelector);
        this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._disableButton();
          });

        this._setEventListeners();
    }

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {                                                               
            inputElement.addEventListener('input', (event) => {
              this._checkInputValidity(event);
              this._toggleButtonState();
            });
        });
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {                                 
        return !inputElement.validity.valid;
      });
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
          this._disableButton();
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
    }

    _checkInputValidity(event) {
        const input = event.target;
        const errorNode = document.querySelector(`#${input.id}-error`);
        
        if(input.validity.valid) {
          errorNode.textContent =" ";
        } else {
          errorNode.textContent = input.validationMessage;
        }
    }

    _disableButton(){
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }
}