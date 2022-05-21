const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {                       //функция проверки валидности каждого инпута 
    if (!inputElement.validity.valid) {                                             
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {                                    //создаём переменную, в которую кладём функцию создания слушателей для всех полей формы (передаём форму)
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));   //создаём переменную, в которую кладём массив всех инпутов формы  
    const buttonElement = formElement.querySelector('.form__submit');
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {                                          //обходим массив инпутов (каждый инпут передаём как парамтр)                            
      inputElement.addEventListener('input', function () {                         //на каждый инпут вешаем слушатель события инпут 
        checkInputValidity(formElement, inputElement);                             //обработчик события инпут проверяет валидность каждого поля (как параметр передаем ему форму и инпут)
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {                                           //создаём переменную, в которую кладём функцию валидации форм 
    const formList = Array.from(document.querySelectorAll('.form'));         //создаём переменную, в которую записываем массив всех элементов с классом форм
    formList.forEach((formElement) => {                                      //в нашем массиве перебираем каждую форму (форму передаём как параметр)
      formElement.addEventListener('submit', function (evt) {                //вешаем на каждую форму слушатель события сабмит и передаём объект эвент 
        evt.preventDefault();                                                //отменяем для каждой формы автоматическую отправку данных на сервер 
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));    //
      fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);                                                      //вызываем функцию создания слушателей для всех нпутов формы
  });
    });
  };
  
  
  const hasInvalidInput = (inputList) => {                                     //функция проверки валидности всех полей формы (принимает на вход массив всех инпутов формы)
    return inputList.some((inputElement) => {                                  //
    return !inputElement.validity.valid;
  });
  }
  
  const toggleButtonState = (inputList, buttonElement) => {
      if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('button_inactive');
    } else {
      buttonElement.classList.remove('button_inactive');
    }
  }
  
  enableValidation();