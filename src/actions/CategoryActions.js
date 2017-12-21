import { SELECT_CATEGORY } from '../constants/CategoryConstants';

export const selectCategory = Category => {
    return {
        type: SELECT_CATEGORY,
        Category: Category
    }
}
