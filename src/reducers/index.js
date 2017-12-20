import { combineReducers } from 'redux';

import UserReducers from './UserReducers';
import CategoryReducers from './CategoryReducers';
import ProductReducers from './ProductReducers';
import MainSearchReducers from './MainSearchReducers';

export default combineReducers({
    userReducers: UserReducers,
    categoryReducers: CategoryReducers,
    productReducers: ProductReducers,
    mainSearchReducers: MainSearchReducers
});

