import { combineReducers } from 'redux';

import UserReducers from './UserReducers';
import CategoryReducers from './CategoryReducers';
import ProductReducers from './ProductReducers';
import CartReducers from './CartReducers';
import MainSearchReducers from './MainSearchReducers';

export default combineReducers({
    userReducers: UserReducers,
    categoryReducers: CategoryReducers,
    productReducers: ProductReducers,
    cartReducers: CartReducers,
    mainSearchReducers: MainSearchReducers
});

