import React, {useState} from 'react';
import placeholder from './images/film-poster-placeholder.png';
import MovieInfo from './MovieInfo.jsx';
import {API_KEY} from '../config.js';
import axios from 'axios';

function MovieList({movies}) {
  const [showDetails, setShowDetails] = useState(false)
  const [movieDetails, setmovieDetails] = useState();


  let movieAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${props.movieID}&plot=full`;

  const handleOnClick = (movieID) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}&plot=full`)
      .then(res => res.json())
      .then(data => {
        setmovieDetails(data)
      })
      .then(() => {setShowDetails(true)})
      .catch(error => console.log('Error', error))
  }

  // const handleOnClick = async () => {
  //   try {
  //     const {data} = await.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}&plot=full`).results;

  //     setmovieDetails(data);
  //     setShowDetails(true);

  //   } catch (err) {
  //     console.error('failed', err)
  //   }
  // }



  const searchResult = movies && movies
  .filter((val,idx,arr)=> arr.findIndex( item => (item.imdbID === val.imdbID)) === idx)
  .map((movie, key) => {
    return (
      <div className="columns" key={movie.imdbID}>
        <div className="rows">
          <button className="movie-title" type="button" onClick={(item) => handleOnClick(item)}>Title: {movie.Title}</button>
          <MovieInfo movieDetails={movieDetails} showDetails={showDetails} onClose={() => setShowDetails(false)}/>
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

