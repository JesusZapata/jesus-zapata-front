import { combineReducers } from 'redux';

import UserReducers from './UserReducers';
import CategoryReducers from './CategoryReducers';
import ProductReducers from './ProductReducers';

export default combineReducers({
    userReducers: UserReducers,
    categoryReducers: CategoryReducers,
    productReducers: ProductReducers
});

