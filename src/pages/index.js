import './index.css';

import {  FormValidator } from '../components/formValidator.js';
import { 
  buttonEditProfile,
  popupEditModalWindow,
  inputTypeName,
  inputTypeInformation,
  buttonAddCard,
  popupAddCardlWindow,
  validationData,
  buttonUpdateAvatar,
  popupUpdateAvatarWindow } from '../utils/constants.js';
import { Card } from '../components/card.js';
import { Section } from '../components/section.js';
import { PopupWithImage } from '../components/picturePopup.js';
import { PopupWithForm } from '../components/popupWithForm.js';
import { UserInfo } from '../components/userInfo.js';
import { Api } from '../components/api';
import { PopupWithConfirmation } from '../components/popupWithConfirmation.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '0cca389c-2bfe-4c54-84e5-257b0da00bfb',
    'Content-Type': 'application/json'
  }
});

// добавление карточек с сервера на страницу
api.getInitialCards() 
  .then(items => {
    const initialCards = items;
    section.renderItems(initialCards);
});

// добавление данных профиля с сервера на страницу 
let myId = null;

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo({ name: res.name, information: res.about, avatar: res.avatar });
    myId = res._id;
});

const validFormProfile = new FormValidator(validationData, popupEditModalWindow);
const validFormAddCard = new FormValidator(validationData, popupAddCardlWindow);
const validUpdateAvatar = new FormValidator(validationData, popupUpdateAvatarWindow);

const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userDescriptionSelector: '.profile__information',
  userAvatarSelector: '.profile__avatar'
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

  debugger

  // отправка на сервер новых данных профиля
  userInfoPopup.loading(true);
  api.editProfile(data)
  .finally(() => {
    userInfoPopup.loading(false);
    userInfoPopup.close();
  });
}

function createCard(item) {
  const card = new Card(item, myId, '.template', handleCardDelete, handleAddLike, handleRemoveLike, () => {
    imagePopup.open(item.link, item.name);
  });

  return card.generateCard();
}

const section = new Section({
  renderer: renderCard
}, '.elements__team');

function renderCard(item, wrap) {
  const card = createCard(item);
  wrap.prepend(card);
}

let card = null;

function handleAddCard(data) {                                                      

  card = {
    name: data.title,
    link: data.link
  };
  
  // создание новой карточки и отправка её данных на сервер
  addCardPopup.loading(true);
  api.addCard(card)
  .then((data) => {
    section.addItem(createCard(data));
  })
  .finally(() => {
    updateAvatarPopup.loading(false);
    addCardPopup.close();
  });
};

validFormProfile.enableValidation();
validFormAddCard.enableValidation();
validUpdateAvatar.enableValidation();

const imagePopup = new PopupWithImage('.popup_img-card');
imagePopup.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation('.popup_with_confirmation');
popupWithConfirmation.setEventListeners();

function handleCardDelete(card) {
  popupWithConfirmation.open();
  
  // удаление карточки с сервера
  popupWithConfirmation.setSubmitAction(()=>{
    api.removeCard(card._cardId)
    .then(() => {
      card.removeCard(card);
      popupWithConfirmation.close();
    })
  });
}

// добавление лайка
function handleAddLike(card) {
  api.addLike(card._cardId)
  .then((res) => {
    card.counterLikes(res.likes);
  })
}

// удаление лайка 
function handleRemoveLike(card) {
  api.removeLike(card._cardId)
  .then((res) => {
    card.counterLikes(res.likes);
  })
}

const updateAvatarPopup = new PopupWithForm('.popup_update_avatar', handleUpdateAvatar);
updateAvatarPopup.setEventListeners();

function handleOpenUpdateAvatar() {
  updateAvatarPopup.open();
}

// редактирование аватара
function handleUpdateAvatar(data) {
  updateAvatarPopup.loading(true);
  api.editAvatar(data)
  .then((res) => {
    userInfo.editAvatar(res.avatar);
  })
  .finally(() => {
    updateAvatarPopup.loading(false);
    updateAvatarPopup.close();
  }); 
}

buttonEditProfile.addEventListener('click', handleOpenProfilePopup);
buttonAddCard.addEventListener('click', handlePurifyAddCard);
buttonUpdateAvatar.addEventListener('click', handleOpenUpdateAvatar);