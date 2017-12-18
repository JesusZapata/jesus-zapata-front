import { REGISTER_USER } from '../constants/UserConstants';

export const registerAction = User => {
    return {
        type: REGISTER_USER,
        User: User
    }
}
