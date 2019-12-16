import { createAction, handleActions } from 'redux-actions';


const initialState = {
    movieID: "",
    movieUrl: "",
    movieName: "",
    videoList: [],
    videoNumber: 0,
    videoSpecial: "",
    videoTitle: "",
    videoID: "",
}

const CHANGE_CURRUNT = 'player/CHANGE_CURRUNT';
const UPDATE_LIST = 'player/UPDATE_LIST';
const CHANGE_MOVIEID = 'player/CHANGE_MOVIEID'
//const NEXT_VIDEO = 'player/TO_NEXT_VIDEO'
//const PREVIOUS_VIDEO = 'player/TO_PREVIOUS_VIDEO'
export const changeMovieID = createAction(CHANGE_MOVIEID, data=>data)
export const changeCurrunt = createAction(CHANGE_CURRUNT, param=>param)
export const updateList = createAction(UPDATE_LIST, data=>data)
//export const nextVideo = createAction(NEXT_VIDEO)
//export const previousVideo = createAction(PREVIOUS_VIDEO)

export default handleActions({
    [CHANGE_MOVIEID]: (state, {payload})=>{
        return{
            ...state,
            movieID: payload
        }
    },
    [CHANGE_CURRUNT]: (state, {payload}) =>{
        const nextID = payload
        if(!nextID || nextID==="" || nextID===0)
            return {...state}    
        const {videoNumber, videoSpecial, videoTitle} = state.videoList.find(({ videoID }) => nextID === videoID )
        if( !videoNumber || !videoTitle )
            return {...state}
        
        return {
            ...state,
            videoID: nextID,
            videoNumber,
            videoSpecial,
            videoTitle
        }
    },
    [UPDATE_LIST]: (state, {payload})=>{
        const { movieName, movieUrl, videoList} = payload
        if( !movieName || movieName === "" || !movieUrl || movieUrl === "" || !videoList)
            return {
                ...state
            }
        if( videoList.length === 0)
            return {
                ...state
            }
        if( !state.videoID || state.videoID == ""){
            return {
                ...state,
                movieName,
                movieUrl,
                videoList,

                videoNumber: videoList[0].videoNumber,
                videoSpecial: videoList[0].videoSpecial,
                videoTitle: videoList[0].videoTitle,
                videoID: videoList[0].videoID
            }
        }
        else
        {
            return {
                ...state,
                movieName,
                movieUrl,
                videoList
            }
        }
    }
}, initialState )  