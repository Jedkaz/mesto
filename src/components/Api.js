export default class Api {
  constructor(initialCards) {
   this._cards = initialCards;
  }
  getInitialCards() {

     fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
        headers: {
          authorization: '0839d508-7d69-4143-bca5-773ed4487ac0',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })  
        .then((data) => {
            console.log(data);
            this._cards = data.map( item => [{name: item.name, link: item.link}]);
            console.log(this._cards);
            return this._cards;
      })
     
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
     
  }
  
  
}


const runApi = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/',
  headers: {
    authorization: '0839d508-7d69-4143-bca5-773ed4487ac0',
    'Content-Type': 'application/json'
  }
});

//runApi.getInitialCards();
  // .then((data) => {
  //   console.log(data);
  //   const cardsData = JSON.parse(data);
  //   return cardsData;
   
  // })
  // .catch((err) => {
  //   console.log(err); // выведем ошибку в консоль
  // });

  // this._items.forEach(item => this._render(item));