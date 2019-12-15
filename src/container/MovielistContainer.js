import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { MovielistActions, PlayerActions } from '../store/actionCreators';
import Medialist from '../components/player/medialist'

import {Redirect} from 'react-router-dom';


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
        PlayerActions.enterToMovie(movieID)
        return (
            <Redirect to="/movie" />
        )
    }

    render() {
        const { handleUpdateList, handleEntertoMovie } = this;
        const { leng, movieList } = this.props;
        if(!leng || leng==0 || !movieList || !movieList.length || movieList.length===0){
            handleUpdateList()
            return ( <h2 onClick={()=>{handleUpdateList()}}> 동영상 리스트 로딩 중... </h2> )
        }
        
        return(
            <div>
                <Medialist
                    movieList={movieList}
                    handleEntertoMovie={handleEntertoMovie}
                />
            </div>
        )
    }
}

/*

*/


export default connect(
    ({ movielist }) => ({
        movieList:   movielist.movieList,
        leng:   movielist.leng
    })
)(MovielistContainer);