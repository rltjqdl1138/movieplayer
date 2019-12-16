import React, {Component} from 'react'
import VideoControlor from './videoControlor'
class VideoPlayer extends Component{
    constructor(props){
        super(props)
        this.VideoUrl= ""
    }
    render(){

        const {movieUrl, videoList, movieName, videoNumber, videoTitle, videoID, videoSpecial, handleChangeVideo} = this.props
        
        if(!videoID || videoID === "")
            return(
                <h2>Not support</h2>
            )

        this.VideoUrl= "/movie/" + movieUrl + "/" + videoID;
        
        return (
            <article className="movie_container">
                <div className="video_container">
                    <video controls key={this.VideoUrl}>
                        <source src={this.VideoUrl} type="video/mp4" preload="none"></source>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="movie_information">
                    <div className="movie_class">
                        <h3 className="movie_name">{movieName}</h3>
                        <h3 className="movie_special">{videoSpecial}</h3>
                        <h3 className="movie_number">{videoNumber}화</h3>
                    </div>
                    <h2 className="movie_title">
                        {videoTitle}
                    </h2>
                </div>

                <VideoControlor
                    videoID={videoID}
                    handleChangeVideo={handleChangeVideo}
                    videoList={videoList}
                />
            </article>
        )
    }
}

export default VideoPlayer;