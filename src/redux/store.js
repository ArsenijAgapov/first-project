import dialogsPageReducer from "./dialogsPageReducer"
import musicPageReducer from "./musicPageReducer"
import profilePageReducer from "./profilePageReducer"
import sidebarPageReducer from "./sidebarPageReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'privet', likesCount: 15 },
                { id: 2, message: 'kak ti?', likesCount: 20 },
                { id: 3, message: 'normal', likesCount: 17 },
            ],

            newPostText: ''
        },
        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Arseniy', images: 'https://sun9-east.userapi.com/sun9-25/s/v1/ig2/w82_SBJBv06tjbslvfHnTUCLZJVnnj25gRrnURJmAi87KOQ78Fy3QWGH1zz4ZXDxNB7nY8pVTXtnxTs4iYMBUf5m.jpg?size=738x1600&quality=95&type=album' },
                { id: 3, name: 'Hach', images: 'https://sun9-west.userapi.com/sun9-71/s/v1/ig2/Y3cuAL49oMZp6OzQj2G4o3UF-iUXJJlRXT_ABaZMO1aGfQqvqjTuhe-g5q-iN6rYHz8or5yLv68XqrhiD4nCdrcR.jpg?size=1080x810&quality=96&type=album' },
                { id: 4, name: 'Kub', images: 'https://sun9-west.userapi.com/sun9-5/s/v1/ig2/xvOVEtLpon2XL55_toQTLShFJj0c0I4LLsQU_EJgY1kfpykDLxq3z2eMzP6g_cm2XzjpsrK94y87c78ZEMjQYy0O.jpg?size=1062x1416&quality=96&type=album' },
                { id: 5, name: 'Soleniy', images: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/nNfYb7KjWdFR0TEDJ9BA2lh2GnKgCgceHaLA4m2EDFKK-FTyjv7hb4jiaOpDjze7ugT0rRuZfAV9ugZnG0pG8eeT.jpg?size=1062x1416&quality=96&type=album' }
            ],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Yo' },
                { id: 3, message: 'Yes' }
            ],

            newMessageText: ''
        },
        musicPage: {
            musics: [
                { id: 1, name: 'rok', time: '4:23' },
                { id: 2, name: 'metal', time: '4:23' },
                { id: 3, name: 'classic', time: '4:23' },
                { id: 4, name: 'rep', time: '4:23' },
            ]
        },
        sidebarPage: {
            sidebar: [
                { id: 1, name: 'Arseniy', images: 'https://sun9-east.userapi.com/sun9-25/s/v1/ig2/w82_SBJBv06tjbslvfHnTUCLZJVnnj25gRrnURJmAi87KOQ78Fy3QWGH1zz4ZXDxNB7nY8pVTXtnxTs4iYMBUf5m.jpg?size=738x1600&quality=95&type=album' },
                { id: 3, name: 'Hach', images: 'https://sun9-west.userapi.com/sun9-71/s/v1/ig2/Y3cuAL49oMZp6OzQj2G4o3UF-iUXJJlRXT_ABaZMO1aGfQqvqjTuhe-g5q-iN6rYHz8or5yLv68XqrhiD4nCdrcR.jpg?size=1080x810&quality=96&type=album' },
                { id: 4, name: 'Kub', images: 'https://sun9-west.userapi.com/sun9-5/s/v1/ig2/xvOVEtLpon2XL55_toQTLShFJj0c0I4LLsQU_EJgY1kfpykDLxq3z2eMzP6g_cm2XzjpsrK94y87c78ZEMjQYy0O.jpg?size=1062x1416&quality=96&type=album' }                
            ]
        }
    },

    _callSubscribe() {
        console.log('123')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {

        this._state.profilePage = profilePageReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer (this._state.dialogsPage, action);
        this._state.musicPage = musicPageReducer (this._state.musicPage, action);
        this._state.sidebar = sidebarPageReducer (this._state.sidebar, action);

        this._callSubscribe (this._state);
    }
}

export default store;
window.store = store