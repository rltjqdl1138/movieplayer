import React, {Component} from 'react'
import { connect } from 'react-redux';
//import './videoPlayer.css'

import VideoPlayer from '../components/Viewer/videoPlayer'
import VideoControlor from '../components/Viewer/videoControlor'
import { ViewerActions } from '../store/actionCreators';

class VideoContainer extends Component{
    handleChangeInput = (e) => {
        // 인풋 값 변경
        ViewerActions.changeInput(e.target.value);
    }
    handleChangeNumber = () => {
        // 아이템 추가
        const { input } = this.props;
        ViewerActions.changeNumber(input); // 추가하고
    }
    handleIncrement = () =>{
        const { number } = this.props
        ViewerActions.nextVideo()
        ViewerActions.changeInput(number.toString())
    }
    handleDecrement = () =>{
        const { number } = this.props
        ViewerActions.previousVideo()
        ViewerActions.changeInput(number.toString())
    }
    render() {
        const { handleChangeInput, handleChangeNumber, handleIncrement, handleDecrement } = this;
        const { input, number, movieUrl, movieClass, movieTitle } = this.props;
        return (
            <section className="player_container">
                <VideoControlor
                            input={input}
                            number={number}
                            onChangeInput={handleChangeInput}
                            onChangeNumber={handleChangeNumber}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                />
                <VideoPlayer
                        movieUrl={movieUrl}
                        movieNumber={number}
                        movieClass={movieClass}
                        movieTitle={movieTitle}
                />
            </section>

        );
      }
}

export default connect(
    ({ viewer }) => ({
        input: viewer.input,
        number: viewer.number,
        movieUrl: viewer.movieUrl,
        movieClass: viewer.movieClass,
        movieTitle: viewer.movieTitle,
    })
)(VideoContainer);
//export default VideoContainer;