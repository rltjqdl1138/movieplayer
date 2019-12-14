import { bindActionCreators } from 'redux';
import * as playerActions from './modules/player';

import store from './index';

const { dispatch } = store;

export const PlayerActions = bindActionCreators(playerActions, dispatch);