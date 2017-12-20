import { SELECT_CATEGORY } from '../constants/CategoryConstants';

import { CategoryData } from './CategoryData'

const initialState = CategoryData;

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                categories: action.Category.categories,
                filter: action.Category.filter
            };
        default:
            return state
    }
}
