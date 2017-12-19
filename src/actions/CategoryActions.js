import { FILTER_CATEGORY } from '../constants/CategoryConstants';

export const filterCategory = Category => {
    return {
        type: FILTER_CATEGORY,
        Category: Category
    }
}
