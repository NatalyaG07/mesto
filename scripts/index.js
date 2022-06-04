import {  FormValidator } from './formValidator.js';
import { Card } from './card.js';

const btnEditProfile = document.querySelector('.profile__edit-button');
const popupEditModalWindow = document.querySelector('.popup_edit-profile');
const btnClosePopupModalWindow = popupEditModalWindow.querySelector('.popup__close'); 
const inputTypeName = document.querySelector('.popup__input_type_name');
const inputTypeInformation = document.querySelector('.popup__input_type_information');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');

const validationData = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  submitButtonSelector:'.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
};

const validFormProfile = new FormValidator(validationData, popupEditModalWindow);
validFormProfile.enableValidation();

function openPopup (popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup (popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEsc);
}

btnEditProfile.addEventListener('click', openProfilePopup);
btnClosePopupModalWindow.addEventListener('click', () => closePopup(popupEditModalWindow));

function openProfilePopup() { 
  inputTypeName.value = profileName.textContent; 
  inputTypeInformation.value = profileInformation.textContent; 
  openPopup(popupEditModalWindow);
}

function onOverlayclick(event, popup) {
 if(event.target === event.currentTarget) {
  closePopup(popup);
 }
}

popupEditModalWindow.addEventListener('click', (event) => onOverlayclick(event, popupEditModalWindow));

const popupFormEditProfile = document.querySelector('.popup__form');

function editProfile() {
  profileName.textContent = inputTypeName.value;
  profileInformation.textContent = inputTypeInformation.value; 
  closePopup(popupEditModalWindow);
}

popupFormEditProfile.addEventListener('submit', (event) => editProfile(event));

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const listContainer = document.querySelector('.elements__team');
const template = '.template';

initialCards.forEach((item) => {
	const card = new Card(item, template, openImage);
	const cardElement = card.generateCard();

	listContainer.append(cardElement);
});

const imgCardlWindow = document.querySelector('.popup_img-card');
const imgCardCloseBtn = imgCardlWindow.querySelector('.popup__close_img-card');

imgCardCloseBtn.addEventListener('click', () => closePopup(imgCardlWindow));

const popupImg = document.querySelector('.popup__img');
const popupImgName = document.querySelector('.popup__img-name');

function openImage(img, title) {
  popupImg.src = img;
  popupImg.alt = title;
  popupImgName.textContent = title;
  openPopup(imgCardlWindow);
}

imgCardlWindow.addEventListener('click', (event) => onOverlayclick(event, imgCardlWindow));

const btnAddCard = document.querySelector('.profile__add-button');
const popupAddCardlWindow = document.querySelector('.popup_add-card');
const btnCloseAddCard = popupAddCardlWindow.querySelector('.popup__close_add-card');

btnAddCard.addEventListener('click', purifyAddCard);
btnCloseAddCard.addEventListener('click', () => closePopup(popupAddCardlWindow));

const popupFormAddCard = document.querySelector('.popup__form_add-card');

function purifyAddCard() {
  popupFormAddCard.reset();
  openPopup(popupAddCardlWindow);
}

const validFormAddCard = new FormValidator(validationData, popupAddCardlWindow);
validFormAddCard.enableValidation();

const inputTypeTitle = popupAddCardlWindow.querySelector('.popup__input_type_title');
const inputTypeLink = popupAddCardlWindow.querySelector('.popup__input_type_link');

function handleAddCard(template) {
  const inputTitleValue = inputTypeTitle.value;
  const inputLinkValue = inputTypeLink.value;
  const element = new Card({ name: inputTitleValue, link: inputLinkValue}, template, openImage);
  const cardElement = element.generateCard();
  listContainer.prepend(cardElement);
  closePopup(popupAddCardlWindow);
}

popupFormAddCard.addEventListener('submit', (event) => handleAddCard(template));

popupAddCardlWindow.addEventListener('click', (event) => onOverlayclick(event, popupAddCardlWindow));


function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup); 
  }
}

