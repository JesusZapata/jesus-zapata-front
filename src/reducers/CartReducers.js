import { ADD_PRODUCT_TO_CART } from '../constants/CartConstants';

let initialState = {
    products: [],
    productSelect: null
};

initialState = (localStorage.getItem('App.Cart') ? JSON.parse(localStorage.getItem('App.Cart')) : initialState);

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            localStorage.setItem('App.Cart', JSON.stringify(state));
            return {
                ...state,
                productSelect: action.productSelect
            };
        default:
            return state
    }
}
