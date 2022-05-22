function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      const buttonElement = formElement.querySelector(settings.submitButtonSelector);
      disableButton(settings, buttonElement);
    });
  setEventListeners(formElement, settings);

});
  }

  function setEventListeners(formElement, settings) {                                    //создаём переменную, в которую кладём функцию создания слушателей для всех полей формы (передаём форму)
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));   //создаём переменную, в которую кладём массив всех инпутов формы  
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleButtonState(settings, inputList, buttonElement);

    inputList.forEach((inputElement) => {                                          //обходим массив инпутов (каждый инпут передаём как парамтр)                            
      inputElement.addEventListener('input', function (event) {                         //на каждый инпут вешаем слушатель события инпут 
        checkInputValidity(event, formElement, inputElement);                             //обработчик события инпут проверяет валидность каждого поля (как параметр передаем ему форму и инпут)
        toggleButtonState(settings, inputList, buttonElement);
      });
    });
  };

  const hasInvalidInput = (inputList) => {                                     //функция проверки валидности всех полей формы (принимает на вход массив всех инпутов формы)
    return inputList.some((inputElement) => {                                 
    return !inputElement.validity.valid;
  });
  }

  function toggleButtonState(settings, inputList, buttonElement) {
    
    if (hasInvalidInput(inputList)) {
      disableButton(settings, buttonElement);
    } else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  function checkInputValidity(event) {
    const input = event.target;
    const errorNode = document.querySelector(`#${input.id}-error`);
    
    if(input.validity.valid) {
      errorNode.textContent =" ";
    } else {
      errorNode.textContent = input.validationMessage;
    }
  }

  function disableButton(settings, buttonElement){
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  }