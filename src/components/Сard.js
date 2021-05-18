'use strict';

export default class Card {

  constructor(cards, handlePreview, templateData) {
    this._name = cards.name;
    this._link = cards.link;
    this._likeCount = cards.likes;
    this._handlePreview = handlePreview;
    this._templateData = templateData;
    this._cardId = cards._id;
    this._cardOwner = cards.owner;
  }

  _getTemplate() {
    const cardElement = this._templateData.querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {

    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__item-picture');
    this._cardLike = this._element.querySelector('.cards__item-like');
    this._cardRemoover = this._element.querySelector('.cards__remoover');
    this._cardLikeCount = this._element.querySelector('.cards__item-like_count');

    this._element.querySelector('.cards__item-heading').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardImage.id = this._cardId;
    this._cardLikeCount.textContent = this._likeCount.length;

    this._setListeners();
    return this._element;
  }

  _setListeners() {
    this._cardRemoover.addEventListener('click', () => {
      this._handleRemoover();
    });
    this._cardLike.addEventListener('click', () => {
      this._handleLike();
    });



    this._cardImage.addEventListener('click', () => {
      const cardData = {
        name: this._name,
        link: this._link
      };
      this._handlePreview(cardData);

    });
  }

  _handleRemoover() {
    this._element.remove('cards__item');
  }

  _handleLike() {
    this._button = this._element.querySelector('.cards__item-like'); //('cards__item-like_active');
    this._cardLikeCount = this._element.querySelector('.cards__item-like_count');
    this._count = Number(this._cardLikeCount.textContent);
    if (this._button.classList.contains('cards__item-like_active')) {
      this._button.classList.remove('cards__item-like_active');
      this._count -= 1;
    } else {
      this._count =+ 1;
      this._button.classList.add('cards__item-like_active');
    }
    


  }
}