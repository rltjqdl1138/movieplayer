import React from 'react'


/*
const VideoControlor = ({input, onChangeInput, onChangeNumber, onIncrement, onDecrement})=>{
    return(
        <article className="player_controlor">
            <input value={input} onChange={onChangeInput}/>
            <button onClick={onChangeNumber}>이동하기</button>

            <button onClick={onDecrement}>이전화</button>
            <button onClick={onIncrement}>다음화</button>
            const Prev = index < 1 ? (
        <div><p>none</p></div>
    ) : (<div><button onClick={()=>{handleChangeVideo(videoList[index-1].videoID)}}>이전화</button></div> )
    const Next = index >= videoList.length ?(
        <div><p>none</p></div>
    ) : (<div><button onClick={()=>{handleChangeVideo(videoList[index+1].videoID)}}>다음화</button></div>
    )
        </article>
    )
}
*/
const VideoControlor = ({ videoList, videoID, handleChangeVideo})=>{
    const nowID = videoID
    const index = videoList.findIndex(({ videoID }) => videoID === nowID)
    const prev = index < 1 ? "hidden_content" : "visible_content"
    const next = index < videoList.length-1 ? "visible_content" : "hidden_content"
    
    return(
        <article className="player_controlor">
            <button className={"prev_button "+prev} onClick={()=>{handleChangeVideo(videoList[index-1].videoID)}}> {index}화 </button>
            <button className={"next_button "+next} onClick={()=>{handleChangeVideo(videoList[index+1].videoID)}}> {index+2}화 </button>
            <div>
                
            </div>
        </article>
    )
}
export default VideoControlor