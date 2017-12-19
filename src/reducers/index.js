import { combineReducers } from 'redux';
import UserReducers from './UserReducers';
import CategoryReducers from './CategoryReducers';

export default combineReducers({
    userReducers: UserReducers,
    categoryReducers: CategoryReducers
});

