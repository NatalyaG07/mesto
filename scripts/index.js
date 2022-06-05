import {  FormValidator } from './formValidator.js';
import { initialCards } from './initialCards.js';
import { Card } from './card.js';

const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditModalWindow = document.querySelector('.popup_edit-profile');
const buttonClosePopupModalWindow = popupEditModalWindow.querySelector('.popup__close'); 
const inputTypeName = document.querySelector('.popup__input_type_name');
const inputTypeInformation = document.querySelector('.popup__input_type_information');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');
const popupFormEditProfile = document.querySelector('.popup__form');
const imageCardlWindow = document.querySelector('.popup_img-card');
const imageCardCloseButton = imageCardlWindow.querySelector('.popup__close_img-card');
const popupImage = document.querySelector('.popup__img');
const popupImageName = document.querySelector('.popup__img-name');
const buttonAddCard = document.querySelector('.profile__add-button');
const popupAddCardlWindow = document.querySelector('.popup_add-card');
const buttonCloseAddCard = popupAddCardlWindow.querySelector('.popup__close_add-card');
const listContainer = document.querySelector('.elements__team');
const template = '.template';
const popupFormAddCard = document.querySelector('.popup__form_add-card');
const inputTypeTitle = popupAddCardlWindow.querySelector('.popup__input_type_title');
const inputTypeLink = popupAddCardlWindow.querySelector('.popup__input_type_link');

const validationData = {
  formSelector:'.popup__form',
  inputSelector:'.popup__input',
  submitButtonSelector:'.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
};

const validFormProfile = new FormValidator(validationData, popupEditModalWindow);
const validFormAddCard = new FormValidator(validationData, popupAddCardlWindow);

function openPopup (popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);
}

function handleClosePopup (popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEsc);
}

function handleOpenProfilePopup() { 
  inputTypeName.value = profileName.textContent; 
  inputTypeInformation.value = profileInformation.textContent; 
  openPopup(popupEditModalWindow);
}

function handleOnOverlayclick(event) {
  if(event.target === event.currentTarget) {
   handleClosePopup(event.currentTarget);
  }
 }

 function handleEditProfile() {
  profileName.textContent = inputTypeName.value;
  profileInformation.textContent = inputTypeInformation.value; 
  handleClosePopup(popupEditModalWindow);
}

initialCards.forEach((item) => {
	listContainer.append(createCard(item));
});

function openImage(img, title) {
  popupImage.src = img;
  popupImage.alt = title;
  popupImageName.textContent = title;
  openPopup(imageCardlWindow);
}

function handlePurifyAddCard() {
  popupFormAddCard.reset();
  openPopup(popupAddCardlWindow);
}

function handleAddCard() {
  const inputTitleValue = inputTypeTitle.value;
  const inputLinkValue = inputTypeLink.value;

  listContainer.prepend(createCard({ name: inputTitleValue, link: inputLinkValue}));
  handleClosePopup(popupAddCardlWindow);
}

function createCard(item) {
  const card = new Card(item, template, openImage);
	const cardElement = card.generateCard();

  return cardElement;
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    handleClosePopup(openedPopup); 
  }
}

validFormProfile.enableValidation();
validFormAddCard.enableValidation();

buttonEditProfile.addEventListener('click', handleOpenProfilePopup);
buttonClosePopupModalWindow.addEventListener('click', () => handleClosePopup(popupEditModalWindow));
popupEditModalWindow.addEventListener('click', (event) => handleOnOverlayclick(event));
popupFormEditProfile.addEventListener('submit', (event) => handleEditProfile(event));
imageCardCloseButton.addEventListener('click', () => handleClosePopup(imageCardlWindow));
imageCardlWindow.addEventListener('click', (event) => handleOnOverlayclick(event));
buttonAddCard.addEventListener('click', handlePurifyAddCard);
buttonCloseAddCard.addEventListener('click', () => handleClosePopup(popupAddCardlWindow));
popupFormAddCard.addEventListener('submit', () => handleAddCard(template));
popupAddCardlWindow.addEventListener('click', (event) => handleOnOverlayclick(event));