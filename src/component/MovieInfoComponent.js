import React, { useEffect, useState } from 'react';
import '../component/MovieInfoComponent.scss';
import axios from "axios";
import { API_KEY } from '../App';

const MovieInfoComponent = (props) => {
  const { selectedMovie } = props;
  const [movieInfo, SetMovieInfo] = useState();

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => SetMovieInfo(response.data));
  }, [selectedMovie])

  return (
    <div className='movie-info'>
      {movieInfo ? <>
        <div>
          <img src={movieInfo?.Poster} alt='movie-poster' />
        </div>
        <div className='movie-desc'>
          <p><span className='bold'>{movieInfo?.Type}</span> : <span>{movieInfo?.Title}</span> </p>
          <p><span className='bold'>IMDB Rating : </span> <span>{movieInfo?.imdbRating}</span> </p>
          <p><span className='bold'>Year : </span> <span>{movieInfo?.Year}</span> </p>
          <p><span className='bold'>Language : </span><span>{movieInfo?.Language}</span> </p>
          <p><span className='bold'>Rated : </span><span>{movieInfo?.Rated}</span> </p>
          <p><span className='bold'>Released: </span><span>{movieInfo?.Released}</span> </p>
          <p><span className='bold'>Runtime : </span><span>{movieInfo?.Runtime}</span> </p>
          <p><span className='bold'>Genere : </span><span>{movieInfo?.Genre}</span> </p>
          <p><span className='bold'>Director : </span><span>{movieInfo?.Director}</span> </p>
          <p><span className='bold'>Actors : </span><span>{movieInfo?.Actors}</span> </p>
          <p><span className='bold'>Plot :</span> <span>{movieInfo?.Plot}</span> </p>
        </div>
        <div className='close' onClick={() => props.onMovieSelect()}>&#10006;</div>
      </> : "Loading..."}

    </div>
  )
}

export default MovieInfoComponent;