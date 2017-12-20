import { MAIN_SEARCH_CHANGE } from '../constants/MainSearchConstants';

const initialState = {
    search: '',
    availability: false,
    category: 0,
    price_since: null,
    price_until: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case MAIN_SEARCH_CHANGE:
            return {
                ...state,
                mainSearch: action.MainSearch
            };
        default:
            return state
    }
}
