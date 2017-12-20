import { ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_TO_CART } from '../constants/CartConstants';

export const addProductToCart = productSelect => {
    return {
        type: ADD_PRODUCT_TO_CART,
        productSelect: productSelect
    }
}

export const deleteProductToCart = products => {
    return {
        type: DELETE_PRODUCT_TO_CART,
        products: products
    }
}