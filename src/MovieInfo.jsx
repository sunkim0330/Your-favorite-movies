import React from 'react';

const MovieInfo = (props) => {

  if (!props.showDetails) {
    return null;
  }

  return (
    <div className="movie-info-container">
      {props.movieDetails && props.movieDetails.map((info, key) => {
        <div key={info.imdbID}>
          <h3>{info.Title}</h3>
          <h2>{info.Year}</h2><h2>{info.Released}</h2>
          <h5>{info.Genre}</h5>
          <p>{info.Plot}</p>
          <button onClose={onClose}>Close</button>
        </div>
      })}
    </div>
  )
}

export default MovieInfo;