'use strict';

export default class Section {

  constructor({renderer}, containerSelector) {
   // this._items = items;
    this._render = renderer;
    this._container = containerSelector;

  }
  renderer(data) {
    this.servCard = data;
   // this._items.forEach(item => this._render(item));
    this.servCard.forEach(item => this._render(item));
    
  }

  addingCard(element) {
    this._container.prepend(element);
  }
}

