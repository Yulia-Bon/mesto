export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._name = nameSelector;
        this._job = jobSelector;
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
    }
}
