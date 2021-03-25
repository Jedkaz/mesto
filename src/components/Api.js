export default class Api {
  constructor(config) {
   this.url = config.url;
   this.headers = config.headers;

  }


  getInitialCards() {
   // this.cards = initialCards;
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
       .then((data) =>  {
          let initialCards = data;
          console.log(initialCards);
          return initialCards;
        })


      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });

  }

}


// runApi.getInitialCards()
// .then((data) => {
//   console.log(data);
//   const initialCards = data.map( item => [{name: item.name, link: item.link}]);
//    console.log(initialCards);
//    return initialCards;
// });


  // })
  // .catch((err) => {
  //   console.log(err); // выведем ошибку в консоль
  // });

  // this._items.forEach(item => this._render(item));
