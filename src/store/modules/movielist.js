import { createAction, handleActions } from 'redux-actions';


const initialState = {
    curruntMovie: "",
    leng: 0,
    movieList: [],
    ifHidden: false
}
const CHANGE_MOVIE = 'movielist/CHANGE_MOVIE';
const UPDATE_LIST = 'movielist/UPDATE_LIST';
const TOGGLE_HIDDEN = 'movielist/TOGGLE_HIDDEN'
export const updateList = createAction(UPDATE_LIST, data=>data);
export const changeMovie = createAction(CHANGE_MOVIE, data=>data)
export const toggleHidden = createAction(TOGGLE_HIDDEN)

export default handleActions({
    [UPDATE_LIST]: (state, {payload})=>{
        const {movieList, leng} = payload
        if(!leng || leng===0 || !movieList || !movieList.length || movieList.length===0)
            return{
                ...state
            }
        return {
            ...state,
            leng,
            movieList
        }
    },
    [CHANGE_MOVIE]: (state, {payload})=>{
        console.log("changeMovie")
        console.log(payload)
        return {
            ...state,
            curruntMovie: payload
        }
    },
    [TOGGLE_HIDDEN]: (state)=>{
        return{
            ...state,
            ifHidden: !state.ifHidden
        }
    }

}, initialState )  