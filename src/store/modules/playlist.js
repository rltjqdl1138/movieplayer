
import { createAction, handleActions } from 'redux-actions';
const UPDATE_LIST = 'todo/UPDATE_LIST';

export const updateList = createAction(UPDATE_LIST, data=>data);

const initialState = {
    videoClass: "",
    videoUrl: "",
    videoList: []
  }
  
  export default handleActions({
    [UPDATE_LIST]: (state, {payload}) => {
      return {
          ...state,
          videoClass: payload.videoClass,
          videoUrl: payload.videoUrl,
          videoList: payload.videoList
      }
    }
  }, initialState);