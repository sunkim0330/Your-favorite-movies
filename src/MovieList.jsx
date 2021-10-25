import React from 'react';
import placeholder from './images/film-poster-placeholder.png'

function MovieList({movies}) {

  const searchResult = movies && movies
  .filter((val,idx,arr)=> arr.findIndex( item => (item.imdbID === val.imdbID)) === idx)
  .map((movie, key) => {
    return (
      <div className="columns" key={movie.imdbID}>
        <div className="rows">
          <h3 className="movie-title">Title: {movie.Title}</h3>
          <h4 className="movie-year">Year: {movie.Year}</h4>
          <img className="movie-poster" src={movie.Poster !== 'N/A' ? movie.Poster : placeholder} width='200px' />
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="container">{searchResult}</div>
    </div>
  )
}

export default MovieList;

