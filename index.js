const editProfile = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close'); 
const formName = document.querySelector('.popup__input_type_name');
const formInformation = document.querySelector('.popup__input_type_information');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_active');
  formName.value = profileName.textContent;
  formInformation.value = profileInformation.textContent;
}

editProfile.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow); 

function onOverlayclick(event) {
  if (event.target === event.currentTarget) {
    toggleModalWindow(); 
  }
}

modalWindow.addEventListener('click', onOverlayclick);

const myForm = document.querySelector('.popup__form');
const saveForm = document.querySelector('.popup__save');

function onSubmit(e) {
  e.preventDefault();
  profileName.textContent = formName.value;
  profileInformation.textContent = formInformation.value;
  toggleModalWindow();
}

myForm.addEventListener('submit', onSubmit);
saveForm.addEventListener('submit', onSubmit);