import { createAction, handleActions } from 'redux-actions';

const initialState = {
    input: '',
    number: 1,
    movieUrl: 'digimon/adventure',
    movieClass: '디지몬 어드벤처',
    movieTitle: '모험의 섬',
}
const CHANGE_TITLE = 'viewer/CHANGE_TITLE';
const CHANGE_INPUT = 'viewer/CHANGE_INPUT';
const CHANGE_NUMBER = 'viewer/CHANGE_NUMBER';
const NEXT_VIDEO = 'viewer/NEXT_VIDEO'
const PREVIOUS_VIDEO = 'viewer/PREVIOUS_VIDEO'
export const changeTitle = createAction(CHANGE_TITLE, input => input)
export const changeInput = createAction(CHANGE_INPUT, input => input);
export const changeNumber = createAction(CHANGE_NUMBER, number => number)
export const nextVideo = createAction(NEXT_VIDEO)
export const previousVideo = createAction(PREVIOUS_VIDEO)

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        return {
            ...state,
            input: action.payload
        }
    },
    [CHANGE_TITLE]: (state, {payload}) =>{
        console.log(payload)
        return {
            ...state,
            movieTitle: payload
        }
    },
    [CHANGE_NUMBER]: (state,{payload}) => {
        if(payload)
            return{
                ...state,
                number: payload
            }
        else
            return {
                ...state,
                number: parseInt(state.input)
            }
    },
    [NEXT_VIDEO]: (state)=>{
        return {
            ...state,
            number: state.number+1
        }
    },
    [PREVIOUS_VIDEO]: (state)=>{
        return {
            ...state,
            number: state.number-1
        }
    }
}, initialState )  