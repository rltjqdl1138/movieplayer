import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import Playlist from '../components/player/playlist'
import VideoPlayer from '../components/player/videoPlayer'
import { PlayerActions } from '../store/actionCreators';

class PlayerContainer extends Component{
    handleChangeVideo = (videoID) => {
        PlayerActions.changeCurrunt(videoID)
    }
    handleUpdateList = (movieID) =>{
        const movieURL = '/api/list/'+movieID
        axios.get(movieURL)
            .then((res)=>{
                console.log('UPDATE: playlist')
                PlayerActions.updateList(res.data)
            })
            .catch((err)=>
                console.error(err)
            )
    }
    
    render() {
        console.log(this.props)
        const { handleChangeVideo, handleUpdateList } = this;
        const { movieID, movieUrl, movieName, videoList, videoNumber, videoSpecial, videoTitle, videoID, videoURL } = this.props;
        //const movieID = 'digimonadventure'
        if(!movieID || movieID==="")
            return(
                <p></p>
            )
        if(movieUrl===''){ handleUpdateList(movieID) }
        return (
            <section className="player_container">
                
                <VideoPlayer
                        movieUrl={movieUrl}
                        movieName={movieName}
                        videoNumber={videoNumber}
                        videoTitle={videoTitle}
                        videoID = {videoID}
                        videoList = {videoList}
                        videoSpecial={videoSpecial}
                        handleChangeVideo={handleChangeVideo}
                        videoURL = {videoURL}
                />
                <aside className="play_list_container">
                    <Playlist
                        updateList={handleUpdateList}
                        changeVideo={handleChangeVideo}
                        videoList={videoList}
                        videoID={videoID}
                    />
                </aside>
            </section>

        );
    }
}

export default connect(
    ({ player }) => ({
        movieID:     player.movieID,
        movieUrl:    player.movieUrl,
        movieName:   player.movieName,
        videoList:   player.videoList,
        videoNumber: player.videoNumber,
        videoSpecial:player.videoSpecial,
        videoTitle:  player.videoTitle,
        videoID:     player.videoID,
        videoURL:    player.videoURL
    })
)(PlayerContainer);