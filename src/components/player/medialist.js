import React from 'react'

const MoviesItem = ({ id, name, onC }) =>{

    return (
        <li className="play_list_content">
            <div onClick={()=>{
                    onC(id);
                }}>
                <p className="list_movie_number">{id}</p>
                <p className="list_movie_name">{name}</p>
            </div>
        </li>
    )
}

const Medialist = ({movieList, handleEntertoMovie})=>{
    const MoviesItems = movieList.map( (item)=>{
        const {movieName, movieID} = item
        return (
            <MoviesItem
                key={movieID}
                name={movieName}
                id={movieID}
                onC={handleEntertoMovie}
            />
        )
    })
    
    return(
        <div>
            <ul className="play_list">
                {MoviesItems}
            </ul>
        </div>
    )
}
export default Medialist;