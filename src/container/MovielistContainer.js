import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { MovielistActions, PlayerActions } from '../store/actionCreators';
import Medialist from '../components/player/medialist'


class MovielistContainer extends Component{
    handleUpdateList = () =>{
        const movieURL = '/api/list/'
        axios.get(movieURL)
            .then((res)=>{
                MovielistActions.updateList(res.data)
            })
            .catch((err)=>
                console.error(err)
            )
    }
    handleEntertoMovie = (movieID) =>{
        console.log(movieID)
        PlayerActions.changeMovieID(movieID)
        MovielistActions.toggleHidden()
    }
    handleToggleHidden = ()=>{
        MovielistActions.toggleHidden()
    }

    render() {
        const { handleUpdateList, handleEntertoMovie } = this;
        const { ifHidden, leng, movieList, curruntMovie } = this.props;
        if(!leng || leng==0 || !movieList || !movieList.length || movieList.length===0){
            handleUpdateList()
            return ( <h2 onClick={()=>{handleUpdateList()}}> 동영상 리스트 로딩 중... </h2> )
        }
        if(ifHidden == true)
            return (
                <button onClick={this.handleToggleHidden}>보이기</button>
            )
        return(
            <div className="medialist_container">
            <button onClick={this.handleToggleHidden}>숨기기</button>
                <Medialist
                    movieList={movieList}
                    handleEntertoMovie={handleEntertoMovie}
                />
            </div>)
        
    }
}

/*

*/


export default connect(
    ({ movielist }) => ({
        ifHidden: movielist.ifHidden,
        movieList:   movielist.movieList,
        leng:   movielist.leng,
        curruntMovie:   movielist.curruntMovie
    })
)(MovielistContainer);