export default class UserInfo {
    constructor({nameSelector, jobSelector, avatarSelector}) {
        this._name = nameSelector;
        this._job = jobSelector;
        this._avatar = avatarSelector;
    }

    getUserInfo() {
        this._items = {
            name: this._name.textContent,
            job: this._job.textContent
        };
        return this._items;
    }

    setUserInfo(config) {
        this._name.textContent = config.name;
        this._job.textContent = config.job;
        this._avatar.src = config.avatar;
    }
}
