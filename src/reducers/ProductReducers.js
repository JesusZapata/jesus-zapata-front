import { FILTER_PRODUCT } from '../constants/ProductConstants';

import { ProductData } from './ProductData'

const initialState = ProductData;

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case FILTER_PRODUCT:
            return {
                ...state,
                products: action.Product.products,
            };
        default:
            return state
    }
}
