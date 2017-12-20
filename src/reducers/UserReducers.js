import { REGISTER_USER,
    UPDATE_USER } from '../constants/UserConstants';

const initialState = localStorage.getItem('App.User') ? JSON.parse(localStorage.getItem('App.User')) : {};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case REGISTER_USER:
            localStorage.setItem('App.User', JSON.stringify(action.User));
            return {
                ...state,
                User: action.User
            };
        case UPDATE_USER:
            localStorage.setItem('App.User', JSON.stringify(action.User));
            return {
                ...state,
                User: action.User
            };

        default:
            return state
    }
}
