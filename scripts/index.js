const btnEditProfile = document.querySelector('.profile__edit-button');
const popupEditModalWindow = document.querySelector('.popup_edit-profile');
const btnClosePopupModalWindow = popupEditModalWindow.querySelector('.popup__close'); 
const inputTypeName = document.querySelector('.popup__input_type_name');
const inputTypeInformation = document.querySelector('.popup__input_type_information');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');

//function toggleModalWindow() {
//  popupEditModalWindow.classList.toggle('popup_active');
//  if (popupEditModalWindow.classList.contains('popup_active')) {
//    inputTypeName.value = profileName.textContent;
//    inputTypeInformation.value = profileInformation.textContent; 
//  }
//}

function openPopup (popup) {
  popup.classList.add('popup_active');
}

function closePopup (popup) {
  popup.classList.remove('popup_active');
}

btnEditProfile.addEventListener('click', openProfilePopup);
btnClosePopupModalWindow.addEventListener('click', () => closePopup(popupEditModalWindow));

function openProfilePopup() { 
  inputTypeName.value = profileName.textContent; 
  inputTypeInformation.value = profileInformation.textContent; 
  openPopup(popupEditModalWindow);
}

//function onOverlayclick(event) {
//  if (event.target === event.currentTarget) {
//    toggleModalWindow(); 
//  }
//}

//modalWindow.addEventListener('click', onOverlayclick);

const popupFormEditProfile = document.querySelector('.popup__form');

function editProfile(event) {
  event.preventDefault();
  profileName.textContent = inputTypeName.value;
  profileInformation.textContent = inputTypeInformation.value;
  closePopup(popupEditModalWindow);
}

popupFormEditProfile.addEventListener('submit', editProfile);

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
const template = document.querySelector('.template');

function renderCard () {
  const html = initialCards.map(createElement);
  listContainer.append(...html);
}

const imgCardlWindow = document.querySelector('.popup_img-card');
const imgCardCloseBtn = imgCardlWindow.querySelector('.popup__close_img-card');

function createElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const name = getElementTemplate.querySelector('.elements__title');
  name.textContent = item.name;
  const img = getElementTemplate.querySelector('.elements__img');
  img.src = item.link;
  img.alt = item.name;

  const btnRemove = getElementTemplate.querySelector('.elements__remove');
  btnRemove.addEventListener('click', removeElement);

  const btnLike = getElementTemplate.querySelector('.elements__like');
  btnLike.addEventListener('click', toggleLike);

  img.addEventListener('click', () => openImage(item));

  return getElementTemplate;
}

imgCardCloseBtn.addEventListener('click', () => closePopup(imgCardlWindow));

function removeElement(event) {
  const element = event.target.closest('.elements__iteam');
  element.remove();
}

function toggleLike(event) {
  const likeActive = event.target.closest('.elements__like');
  likeActive.classList.toggle('elements__like_active');
}

const popupImg = document.querySelector('.popup__img');
const popupName = document.querySelector('.popup__img-name');

function openImage(item) {
  popupImg.src = item.link;
  popupImg.alt = item.name;
  popupName.textContent = item.name;
  openPopup(imgCardlWindow);
}

renderCard();

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

function handleAddCard(event) {
  event.preventDefault();
  const inputTypeTitle = popupAddCardlWindow.querySelector('.popup__input_type_title').value;
  const inputTypeLink = popupAddCardlWindow.querySelector('.popup__input_type_link').value;
  const element = createElement({ name: inputTypeTitle, link: inputTypeLink });
  listContainer.prepend(element);
  closePopup(popupAddCardlWindow);
}

popupFormAddCard.addEventListener('submit', handleAddCard);