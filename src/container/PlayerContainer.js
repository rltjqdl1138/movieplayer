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
    handleUpdateList = () =>{
        
        const movieURL = '/api/list/digimonadventure'
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
        const { handleChangeVideo, handleUpdateList } = this;
        const { movieUrl, movieName, videoList, videoNumber, videoSpecial, videoTitle, videoID } = this.props;
        
        if(movieUrl===''){ handleUpdateList() }
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
        movieUrl:    player.movieUrl,
        movieName:   player.movieName,
        videoList:   player.videoList,
        videoNumber: player.videoNumber,
        videoSpecial:player.videoSpecial,
        videoTitle:  player.videoTitle,
        videoID:     player.videoID
    })
)(PlayerContainer);