import REGISTER_USER from '../actions/UserActions';

export const geod = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return action.geod;
        default:
            return state;
    }
};