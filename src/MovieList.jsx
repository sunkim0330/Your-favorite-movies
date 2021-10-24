import React from "react";

function MovieList({movies}) {
  const searchResult = movies && movies
  .filter((val,idx,arr)=> arr.findIndex( item => (item.imdbID === val.imdbID)) === idx)
  .map((movie, key) => {
    return (
      <div key={movie.imdbID}>
      <h3>Title: {movie.Title}</h3>
      <h4>Year: {movie.Year}</h4>
      <img src={movie.Poster} width='200px' />
      </div>
    )
  })

  return (
    <div>
      <h2>Search Result: </h2>
      {searchResult}
    </div>
  )
}

export default MovieList;