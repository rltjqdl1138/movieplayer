import { bindActionCreators } from 'redux';
import * as viewerActions from './modules/viewer';
import * as playlistActions from './modules/playlist'

import store from './index';

const { dispatch } = store;

export const ViewerActions = bindActionCreators(viewerActions, dispatch);
export const PlaylistActions = bindActionCreators(playlistActions, dispatch)