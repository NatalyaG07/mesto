const editProfile = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close'); 
const formName = document.querySelector('.popup__input_type_name');
const formInformation = document.querySelector('.popup__input_type_information');
const profileName = document.querySelector('.profile__name');
const profileInformation = document.querySelector('.profile__information');

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_active');
  if (modalWindow.classList.contains('popup_active')) {
    formName.value = profileName.textContent;
    formInformation.value = profileInformation.textContent; 
  }
}

editProfile.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow); 

//function onOverlayclick(event) {
//  if (event.target === event.currentTarget) {
//    toggleModalWindow(); 
//  }
//}

//modalWindow.addEventListener('click', onOverlayclick);

const myForm = document.querySelector('.popup__form');

function onSubmit(event) {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileInformation.textContent = formInformation.value;
  toggleModalWindow();
}

myForm.addEventListener('submit', onSubmit);

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

function render () {
  const html = initialCards.map(getElement);
  listContainer.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const name = getElementTemplate.querySelector('.elements__title');
  name.textContent = item.name;
  const img = getElementTemplate.querySelector('.elements__img');
  img.src = item.link;
  img.alt = item.name;

  const removeBtn = getElementTemplate.querySelector('.elements__remove');
  removeBtn.addEventListener('click', removeElement);

  const likeBtn = getElementTemplate.querySelector('.elements__like');
  likeBtn.addEventListener('click', toggleLike);

  return getElementTemplate;
}

function removeElement(event) {
  const element = event.target.closest('.elements__iteam');
  element.remove();
}

function toggleLike(event) {
  const likeActive = event.target.closest('.elements__like');
  likeActive.classList.toggle('elements__like_active');
}

render();

const addCard = document.querySelector('.profile__add-button');
const addCardlWindow = document.querySelector('.popup_add-card');
const addCardCloseBtn = addCardlWindow.querySelector('.popup__close_add-card');
const formTitle = document.querySelector('.popup__input_type_title');
const formLink = document.querySelector('.popup__input_type_link');

function toggleAddCard() {
  addCardlWindow.classList.toggle('popup_active');
}

addCard.addEventListener('click', toggleAddCard);
addCardCloseBtn.addEventListener('click', toggleAddCard);

const addCardCreateBtn = addCardlWindow.querySelector('.popup__save_add-card');

function handleAddCard() {
  const inputTitle = addCardlWindow.querySelector('.popup__input_type_title').value;
  const inputLink = addCardlWindow.querySelector('.popup__input_type_link').value;
  const element = getElement({ name: inputTitle, link: inputLink });
  listContainer.prepend(element);
  toggleAddCard();
}

addCardCreateBtn.addEventListener('click', handleAddCard);

const myFormAddCard = document.querySelector('.popup__form_add-card');

function onSubmitAddCard(event) {
  event.preventDefault();
  //profileName.textContent = formName.value;
  //profileInformation.textContent = formInformation.value;
}

myFormAddCard.addEventListener('submit', onSubmitAddCard);

