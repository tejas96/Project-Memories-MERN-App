import {combineReducers} from 'redux';
import posts from './posts';
import form from './form';
export default combineReducers({
    posts,
    form,
});