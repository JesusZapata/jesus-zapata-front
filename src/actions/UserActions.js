import { REGISTER_USER,
    UPDATE_USER } from '../constants/UserConstants';

export const userRegisterAction = User => {
    return {
        type: REGISTER_USER,
        User: User
    }
}

export const userUpdateAction = User => {
    return {
        type: UPDATE_USER,
        User: User
    }
}
