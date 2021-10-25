import React, {useEffect, useState} from 'react';
import {API_KEY} from '../config.js';

const MovieInfo = ({movieId, show, onClose, currentMovie}) => {
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
      {movieDetails && movieDetails.map((movie, idx) => {
        return (
          <div className="movie-info-modal" key={idx}>
            <h2 className="movie-info-title">Title: {movie.Title}</h2>
            <h3 className="movie-info-genre">Genre: {movie.Genre}</h3>
            <h3 className="movie-info-released">Released Date: {movie.Released}</h3>
            <p className="movie-info-plot"><b>Plot:</b> {movie.Plot}</p>
            <button className="modal-close-button bn37" onClick={onClose}>Close</button>
          </div>
        )
      })}
    </div>
  )
}

export default MovieInfo;
