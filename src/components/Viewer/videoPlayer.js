import React, {Component} from 'react'
//import './videoPlayer.css'

class VideoPlayer extends Component{
    constructor(props){
        super(props)
        this.url= ""
    }
    render(){

        this.url= "/api/movie/" + this.props.movieUrl + "/" +
            ( this.props.movieNumber > 9 ? "" : "0")+ this.props.movieNumber.toString()
        
        return (
            <article className="movie_container">
                <div className="video_container" align="center">
                    <video controls key={this.url}>
                        <source src={this.url} type="video/mp4" preload="none"></source>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="movie_information" align="center">
                    <div className="movie_class">
                        <h3 className="movie_name">{this.props.movieClass}</h3>
                        <h3 className="movie_number">{this.props.movieNumber}화</h3>
                    </div>
                    <h2 className="movie_title">
                        {this.props.movieTitle}
                    </h2>
                </div>
            </article>
        )
        /*
        return (
            <div>
                <p>URL: {this.props.movieUrl}</p>
                <p>Class: {this.props.movieClass}</p>
                <p>Title: {this.props.movieTitle}</p>
                <p>Number: {this.props.movieNumber}</p>
                <p>URL: {this.url}</p>
            </div>
        )
        */
    }
}

export default VideoPlayer;