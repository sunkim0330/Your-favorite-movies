import React, {useEffect, useState} from 'react';
// import Modal from './Modal.jsx';
import {API_KEY} from '../config.js';

const MovieInfo = ({movieId, show, onClose, currentMovie}) => {
  // console.log('ids', movieId)
  // const [show, setShow] = useState(false)
  const [movieDetails, setMovieDetails] = useState();

  const fetchData = () => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${currentMovie.imdbID}&plot=full`)
    .then(res => res.json())
    .then(data => setMovieDetails([data]))
    .catch(err => console.log('Error', err));
  }

  useEffect(() => {
    if (currentMovie) {
      fetchData();
    }
    return () => {setMovieDetails(null)};
  }, [show])

  if (!show) {
    return null;
  }


  return (
    <div className="movie-info-container">

      {movieDetails && movieDetails.map(movie => {
        return <div>{movie.Plot}</div>
      })}

      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default MovieInfo;

/*
{Object.keys(movieDetails).map((item, idx) => {
      <div key={idx}>
        <h3>{movieDetails[item]}</h3>
        <button onClose={props.onClose}>Close</button>
      </div>
      })}


      {movieDetails && movieDetails.map(movie => {
        return <div>{movie.Plot}</div>
      })}
*/