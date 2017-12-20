import { MAIN_SEARCH_CHANGE } from '../constants/MainSearchConstants';

export const mainSearchChange = MainSearch => {
    return {
        type: MAIN_SEARCH_CHANGE,
        MainSearch: MainSearch
    }
}
