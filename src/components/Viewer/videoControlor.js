import React from 'react'
const VideoControlor = ({input, onChangeInput, onChangeNumber, onIncrement, onDecrement})=>{
    return(
        <article className="player_controlor">
            <input value={input} onChange={onChangeInput}/>
            <button onClick={onChangeNumber}>이동하기</button>

            <button onClick={onDecrement}>이전화</button>
            <button onClick={onIncrement}>다음화</button>
        </article>
    )
}
export default VideoControlor