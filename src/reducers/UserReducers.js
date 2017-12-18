import REGISTER_USER from '../constants';

const initialState = {
    User: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                User: {}
            };
        default:
            return state
    }
}
