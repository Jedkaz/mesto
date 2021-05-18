import { cardOverlay } from "../utils/constants";

export default class Api {
  constructor(config) {
   this.url = config.url;
   this.headers = config.headers;

  }

  getInitialCards() { // Получаем карточки с сервера
      return fetch('https://mesto.nomoreparties.co/v1/cohort-24/cards', {
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
       .then((data) =>  {
          let initialCards = data.reverse();
          console.log(initialCards);
          return initialCards;
        })

      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });

  }

  getUserData() {  // получаем данные пользователя с сервера
    
     return fetch('https://mesto.nomoreparties.co/v1/cohort-24/users/me', {
         headers: this.headers
       })
       .then(res => {
         if (res.ok) {
           console.log(res);
           return res.json();
         }
       })
        .then((data) =>  {
           let userData = data;
           console.log(userData);
           return userData;
         })
  
       .catch((err) => {
         console.log(err); // выведем ошибку в консоль
       });
 
   }


   postUserCard(cardData) {  // загружаем новую карточку
    return fetch('https://mesto.nomoreparties.co/v1/cohort-24/cards', {
        method: 'POST',
        body: JSON.stringify(cardData),
        headers: this.headers
      })
       .then(res => {
        if (res.ok) {
           console.log(res);
           return res.json();
         }
       })
       .then((data) =>  {
        let cardData = data;
        console.log(cardData);
        return cardData;
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
