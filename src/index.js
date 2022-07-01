import './pages/index.css';

import {  FormValidator } from './components/formValidator.js';
import { initialCards,
  buttonEditProfile,
  popupEditModalWindow,
  inputTypeName,
  inputTypeInformation,
  buttonAddCard,
  popupAddCardlWindow } from './utils/constants.js';
import { Card } from './components/card.js';
import { Section } from './components/section.js';
import { PopupWithImage } from './components/popupWithImage.js';
import { PopupWithForm } from './components/popupWithForm.js';
import { UserInfo } from './components/userInfo.js';

const validationData = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  submitButtonSelector:'.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
};

const validFormProfile = new FormValidator(validationData, popupEditModalWindow);
const validFormAddCard = new FormValidator(validationData, popupAddCardlWindow);

const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userDescriptionSelector: '.profile__information'
});

const userInfoPopup = new PopupWithForm('.popup_edit-profile', handleEditProfile);
const addCardPopup = new PopupWithForm('.popup_add-card', handleAddCard);

addCardPopup.setEventListeners();
userInfoPopup.setEventListeners();

function handleOpenProfilePopup() { 
  const data = userInfo.getUserInfo();
  inputTypeName.value = data.name;
  inputTypeInformation.value = data.description;

  userInfoPopup.open();
}

function handlePurifyAddCard() {
  addCardPopup.open();
}

 function handleEditProfile(data) {              
  userInfo.setUserInfo(data);
  userInfoPopup.close();
}

function createCard(item) {
  const card = new Card(item, '.template', () => {
    imagePopup.open(item.link, item.name);
  });

  return card.generateCard();
}

const section = new Section({                                
  items: initialCards.reverse(),
  renderer: renderCard
}, '.elements__team');

                                
section.renderItems();

function renderCard(item, wrap) {
  const card = createCard(item);
  wrap.prepend(card);
}


function handleAddCard(data) {                                                      

  const card = createCard({ name: data.title, link: data.link});
  section.addItem(card);
 
  addCardPopup.close();
};

validFormProfile.enableValidation();
validFormAddCard.enableValidation();

const imagePopup = new PopupWithImage('.popup_img-card');
imagePopup.setEventListeners();

buttonEditProfile.addEventListener('click', handleOpenProfilePopup);
buttonAddCard.addEventListener('click', handlePurifyAddCard);
