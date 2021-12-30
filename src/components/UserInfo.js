export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = nameSelector;
    this._job = jobSelector;
    this._inputName = document.querySelector(".popup-user__input-name");
    this._inputJob = document.querySelector(".popup-user__input_type_job");
  }
  getUserInfo(config) {
    this._name.textContent = config.name;
    this._job.textContent = config.job;
    // принимает новые данные пользователя и добавляет на страницу
  }

  setUserInfo() {
    this._inputName.value = this._name.textContent;
    this._inputJob.value = this._job.textContent;
    // получает данные со страницы в переносит в инпут
  }
}
