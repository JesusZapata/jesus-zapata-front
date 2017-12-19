import { FILTER_CATEGORY,
    SELECT_CATEGORY } from '../constants/CategoryConstants';

export const filterCategory = Category => {
    return {
        type: FILTER_CATEGORY,
        Category: Category
    }
}

export const selectCategory = Category => {
    return {
        type: SELECT_CATEGORY,
        Category: Category
    }
}
