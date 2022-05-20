function enableValidation(formSelector, buttonSelector, functionSelector) {

    formSelector.addEventListener('submit', (event) => handleFofmSubmit(event, formSelector, functionSelector));
    formSelector.addEventListener('input', (event) => handleFofmInput(event, formSelector, buttonSelector));
  
    toggleButton(formSelector, buttonSelector); 
  }
  
  function toggleButton(formSelector, buttonSelector) {
    buttonSelector.classList.toggle('popup__save_disabled', !formSelector.checkValidity());
  }
  
  function handleFofmSubmit(event, form, functionSelector) {
    event.preventDefault();
    
    if(form.checkValidity()) {
      functionSelector();
    } 
  }
  
  function handleFofmInput(event, formSelector, buttonSelector) {
    const input = event.target;
    const errorNode = document.querySelector(`#${input.id}-error`);
    
    if(input.validity.valid) {
      errorNode.textContent =" ";
    } else {
      errorNode.textContent = input.validationMessage;
    }
  
    toggleButton(formSelector, buttonSelector);
  }