const openButton = document.querySelector('.user__edit-profile'),
  overlay = document.querySelector('.popup'),
  closeButton = overlay.querySelector('.popup__button-close'),
  autor = document.querySelector('.user__title'),
  jobeDescr = document.querySelector('.user__profession'),
  nameInput = document.querySelector('.popup__text_name'),
  jobeInput = document.querySelector('.popup__text_description'),
  formElement = overlay.querySelector('.popup__field'), 
  cardsContainer = document.querySelector('.cards__container'),
  cardsTemplate = document.querySelector('.cards__template').content;



const initialCards = [{
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
//------------------------------------------------
function openForm() {
  overlay.classList.add('popup_active');
  nameInput.value = autor.textContent;
  jobeInput.value = jobeDescr.textContent;
}

function closeForm() {
  overlay.classList.remove('popup_active');
  
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  autor.textContent = nameInput.value;
  jobeDescr.textContent = jobeInput.value;
  overlay.classList.remove('popup_active');
}
//----------------------------------------------

function loadArrayImages (cards) {
  const cardsElement = cardsTemplate.cloneNode(true);
    cardsElement.querySelector('.cards__item-picture').src = cards.link;
    cardsElement.querySelector('.cards__item-picture').alt = cards.name;
    cardsElement.querySelector('.cards__item-heading').textContent = cards.name;
    
    cardsElement.querySelector('.cards__item-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__item-like_active');});
        
    cardsContainer.prepend(cardsElement);
    
initialCards.forEach(cardRemover);
}



function cardRemover() {
// выберем кнопку удаления
const deleteButton = cardsContainer.querySelector('.cards__remoover');
// добавим обработчик
deleteButton.addEventListener('click', function () {
  const listItem = deleteButton.closest('.cards__item');
  listItem.remove();
}); }




//-----------------------------------------------
openButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
formElement.addEventListener('submit', handleFormSubmit);
initialCards.forEach(loadArrayImages);

