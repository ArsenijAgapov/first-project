
import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReducer"
import musicPageReducer from "./musicPageReducer"
import profilePageReducer from "./profilePageReducer"
import sidebarPageReducer from "./sidebarPageReducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    musicPage: musicPageReducer,
    sidebarPage: sidebarPageReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;