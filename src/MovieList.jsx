import React from "react";

function MovieList({movies}) {
  // function getUniqueIds(arr, key) {
  //   return [...new Map(arr.map(item => [item[key], item])).values()]
  // }
  // const filterMovieList = movies && getUniqueIds(movies, 'imdbID');

  const searchResult = movies && movies
  .filter((v,i,a)=> a.findIndex( t => (t.imdbID === v.imdbID)) === i)
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