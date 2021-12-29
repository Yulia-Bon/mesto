export default class UserInfo {
    constructor(name, job) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
      }
  
      getUserInfo(){
        const userInfo = {};
        userInfo['name'] = this._name.textContent;
        userInfo['job'] = this._job.textContent;
        return userInfo;
      };
    setUserInfo(userInfo) {
      this._name.textContent = userInfo.name;
      this._job.textContent = userInfo.job ;
      }

}