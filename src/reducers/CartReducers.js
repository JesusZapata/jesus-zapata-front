import { ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_TO_CART,
    CLEAR_CART } from '../constants/CartConstants';

let emptyState = {
    products: [],
    productSelect: null
};

let initialState = (localStorage.getItem('App.Cart') ? JSON.parse(localStorage.getItem('App.Cart')) : emptyState);

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            localStorage.setItem('App.Cart', JSON.stringify(state));
            return {
                ...state,
                productSelect: action.productSelect
            };
        case DELETE_PRODUCT_TO_CART:
            localStorage.setItem('App.Cart', JSON.stringify(state));
            return {
                ...state,
                products: action.products
            };
            case CLEAR_CART:
            localStorage.setItem('App.Cart', JSON.stringify(emptyState));
            return {
                ...state
            };
        default:
            return state
    }
}
