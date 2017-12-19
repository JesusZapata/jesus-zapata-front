import { FILTER_PRODUCT } from '../constants/ProductConstants';

export const filterProduct = Product => {
    return {
        type: FILTER_PRODUCT,
        Product: Product
    }
}
