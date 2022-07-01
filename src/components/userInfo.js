export class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        this._userNameSelector = document.querySelector(userNameSelector);
        this._userDescriptionSelector = document.querySelector(userDescriptionSelector);
    }

    getUserInfo() {
        this._userInfo = {};

        this._userInfo['name'] = this._userNameSelector.textContent;
        this._userInfo['description'] = this._userDescriptionSelector.textContent;

        return this._userInfo;
    }

    setUserInfo(data) {
        this._userNameSelector.textContent = data.name;
        this._userDescriptionSelector.textContent = data.information;
    }
}