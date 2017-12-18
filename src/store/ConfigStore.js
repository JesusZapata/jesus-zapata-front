import { createStore } from 'redux';
import reducers from '../reducers';

export default function configStore(initialState)
{
    return createStore(
        reducers,
        initialState
    )
}