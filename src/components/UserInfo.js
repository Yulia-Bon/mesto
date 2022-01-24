export default class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.name);
    this._profileAbout = document.querySelector(data.about);
    this._avatar = document.querySelector(data.avatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
