import React from 'react'

const PlaylistItem = ({ number, title, changeNumber }) => (
    <li className="play_list_content" onClick={()=>{changeNumber(number, title)}}>
        <div className="list_information">
            <p className="list_movie_number">{number} 화</p>
            <p className="list_movie_name">{title}</p>
        </div>
    </li>
  )
const Playlist = ({videoList, changeNumber})=>{
    const PlaylistItems = videoList.map( (item, index)=>{
        const {number, title} = item
        return (
            <PlaylistItem
                key={index.toString()}
                changeNumber={changeNumber}
                number={number}
                title={title}
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
Playlist.defaultProps = {
    videoList: []
}
    

export default Playlist