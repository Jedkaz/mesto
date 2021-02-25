'use strict';

export default class Card {
  constructor(cards, handlePreview) {
    this._name = cards.name;
    this._link = cards.link;
    this._handlePreview = handlePreview;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.cards__template')
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__item-picture').src = this._link;
    this._element.querySelector('.cards__item-heading').textContent = this._name;
    this._element.querySelector('.cards__item-picture').alt = this._name;
    this._setListeners();
    return this._element;
  }

  _setListeners() {
    this._element.querySelector('.cards__remoover').addEventListener('click', () => {
      this._handleRemoover();
    });
    this._element.querySelector('.cards__item-like').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.cards__item-picture').addEventListener('click', () => {
      this._handlePreview(this._name, this._link);
    });
  }

  _handleRemoover() {
    this._element.remove('cards__item');
  }

  _handleLike() {
    this._element.querySelector('.cards__item-like').classList.toggle('cards__item-like_active');
  }
}
