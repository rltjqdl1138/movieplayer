import React, {Component} from 'react'
import Playlist from '../components/Viewer/playlist'
import axios from 'axios'
import { connect } from 'react-redux';

import { PlaylistActions } from '../store/actionCreators';
import { ViewerActions } from '../store/actionCreators';

class PlaylistContainer extends Component{
    updateList = () =>{
        axios.get('/api/hello').then((res)=>{
            PlaylistActions.updateList(res.data)
        })
        
    }
    handleChangeVideo = (num, title) => {
        ViewerActions.changeNumber(num);
        ViewerActions.changeTitle(title);
    }
    render(){
        const {updateList, handleChangeVideo} = this
        const {videoList, videoUrl} = this.props
        if(videoUrl===''){ updateList() }
        return (
            <aside className="play_list_container">
                <Playlist
                    updateList={updateList}
                    videoList={videoList}
                    changeNumber={handleChangeVideo}
                />
            </aside>
        )
    }
}

export default connect(
    ({ playlist }) => ({
        videoList: playlist.videoList,
        videoUrl: playlist.videoUrl,
        videoClass: playlist.videoClass
    })
)(PlaylistContainer);