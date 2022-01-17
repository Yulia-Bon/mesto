export default class Api{
    constructor(options){
        this._options = options;
    }
    
    getInitialCards(){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-34/cards', {
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    getProfileInfo(){
        return fetch('https://nomoreparties.co/v1/cohort-34/users/me', {
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190'
            }
        })
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    setProfileInfo(data){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-34/users/me', {
            method: 'PATCH',
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.job
            })
        })
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    setNewCard(data){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-34/cards', {
            method: 'POST',
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    deleteCard(data){
        const a = `https://mesto.nomoreparties.co/v1/cohort-34/cards/${data._id}`
        return fetch(a,{
            method: 'DELETE',
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
                'Content-Type': 'application/json'
            }
        })
    }
    setLike(data){
        const a = `https://mesto.nomoreparties.co/v1/cohort-34/cards/likes/${data._id}`
        return fetch(a, {
            method: 'PUT',
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    deleteLIke(data){
        const a = `https://mesto.nomoreparties.co/v1/cohort-34/cards/likes/${cardId}`
        return fetch(a, {
            method: 'DELETE',
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    changeAvatar(data){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-34/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
}