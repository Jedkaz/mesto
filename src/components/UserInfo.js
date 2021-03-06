export default class UserInfo {
  constructor(autorName, autorDescr, avaImg) {
    this._autorName = autorName;
    this._autorDescr = autorDescr;
    this._avaImg = avaImg;
  }
  getUserInfo() {
    const itemUser = {
      name: this._autorName.textContent,
      about: this._autorDescr.textContent
    };
    return itemUser;
  }

  setUserInfo(data) {

    this.name = data.name;
    this.about = data.about;
    this._autorName.textContent = this.name;
    this._autorDescr.textContent = this.about;
    this._avaImg.src = data.avatar;
  }

}
