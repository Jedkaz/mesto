export default class Section {

  constructor( { items, renderer }, containerSelector ) {
    this._items = items;
    this._render = renderer;
    this._container = containerSelector;
    
  }


   renderer() {
    this._items.forEach(item => this._render(item));
  }
  
  createCard(element) {
   this._container.prepend(element);
  }



}





// export default class Section {
//   constructor({ data, renderer }, containerSelector) {
//     this._renderedItems = data;
//     this._renderer = renderer; 
    
//     this._container = document.querySelector(containerSelector);
//   }

//   renderItems() {
//     this._renderedItems.forEach(item => this._renderer(item));
//   }

//   setItem(element) {
//     this._container.append(element);
//   }
// }