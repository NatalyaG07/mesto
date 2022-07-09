export class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector, userAvatarSelector }) {
        this._userNameSelector = document.querySelector(userNameSelector);
        this._userDescriptionSelector = document.querySelector(userDescriptionSelector);
        this._userAvatarSelector = document.querySelector(userAvatarSelector);
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
        this._userAvatarSelector.src = data.avatar;
    }

    editAvatar(data) {
        this._userAvatarSelector.src = data;
    }
}