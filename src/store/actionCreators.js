import { bindActionCreators } from 'redux';
import * as playerActions from './modules/player';
import * as movielistActions from './modules/movielist';

import store from './index';

const { dispatch } = store;

export const PlayerActions = bindActionCreators(playerActions, dispatch);
export const MovielistActions = bindActionCreators(movielistActions, dispatch);