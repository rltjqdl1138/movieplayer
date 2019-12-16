import React from 'react';
import MovielistContainer from '../container/MovielistContainer'
import PlayerContainer from '../container/PlayerContainer'
const Player = () => {
    return (
        <div className="wrap_page">
            <MovielistContainer />
            <PlayerContainer />
        </div>
    );
};

export default Player;