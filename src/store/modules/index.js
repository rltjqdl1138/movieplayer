import { combineReducers } from 'redux';
import player from './player';
import movielist from './movielist';

export default combineReducers({
    player,
    movielist
});

