'use strict';

export default class Card {
  constructor(cards, handlePreview, templateData) {
    this._name = cards.name;
    this._link = cards.link;
    this._handlePreview = handlePreview;
    this._templateData = templateData;
    this._cardImage = this._templateData.querySelector('.cards__item-picture');
    console.log(templateData);
  }

  _getTemplate() {
    const cardElement = this._templateData.querySelector('.cards__item') 
      //.querySelector('.cards__template')
      //.content
      //this._templateData.querySelector('.cards__item')
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

  
  // generateCard() {
  //   this._element = this._getTemplate();
  //   this._cardImage.src = this._link;
  //   this._element.querySelector('.cards__item-heading').textContent = this._name;
  //   this._element.querySelector('.cards__item-picture').alt = this._name;
  //   this._setListeners();
  //   return this._element;
  // }



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
