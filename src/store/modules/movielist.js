import { createAction, handleActions } from 'redux-actions';


const initialState = {
    leng: 0,
    movieList: []
}

const UPDATE_LIST = 'movielist/UPDATE_LIST';
export const updateList = createAction(UPDATE_LIST, data=>data);

export default handleActions({
    [UPDATE_LIST]: (state, {payload})=>{
        const {movieList, leng} = payload
        if(!leng || leng==0 || !movieList || !movieList.length || movieList.length===0)
            return{
                ...state
            }
        
        return {
            ...state,
            leng,
            movieList
        }
        
    }
}, initialState )  