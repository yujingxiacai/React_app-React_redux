import {createStore} from 'redux';
import reduce from './reduce';
let initialState={
    count:0
}
const store = createStore(reduce,initialState);
export default store;