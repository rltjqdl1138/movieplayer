import React from 'react'

const PlaylistItem = ({ ifNow, videoID, videoNumber, videoTitle, changeVideo }) =>{
    if(!ifNow)
        return(
            <li className="play_list_content" onClick={()=>{changeVideo(videoID)}}>
                <div className="list_information">
                    <p className="list_movie_number">{videoNumber} 화</p>
                    <p className="list_movie_name">{videoTitle}</p>
                </div>
            </li>
        )
    return (
        <li className="play_list_content playing_content" onClick={()=>{changeVideo(videoID)}}>
            <div className="list_information">
                <p className="list_movie_number">{videoNumber} 화</p>
                <p className="list_movie_name">{videoTitle}</p>
            </div>
        </li>
    )
}

const Playlist = ({videoID, videoList, changeVideo, updateList})=>{
    const PlaylistItems = videoList.map( (item)=>{
        const {videoNumber, videoTitle} = item
        const id = item.videoID
        return (
            <PlaylistItem
                key={id}
                ifNow={id===videoID}
                changeVideo={changeVideo}
                videoID={id}
                videoNumber={videoNumber}
                videoTitle={videoTitle}
            />
        )
    })
    
    return(
        <div>
            <ul className="play_list">
                {PlaylistItems}
            </ul>
        </div>
    )
}
export default Playlist