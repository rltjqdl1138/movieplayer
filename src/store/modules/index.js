import { combineReducers } from 'redux';
import viewer from './viewer';
import playlist from './playlist'

export default combineReducers({
    viewer,
    playlist
});

