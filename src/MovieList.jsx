import React, {useState, useEffect} from 'react';
import placeholder from './images/film-poster-placeholder.png';
import MovieInfo from './MovieInfo.jsx';
import axios from 'axios';

function MovieList({movies}) {
  const [show, setShow] = useState(false)
  const [currentMovie, setCurrentMovie] = useState(null);

  const openModal = (movie) => {
    setCurrentMovie(movie);
    setShow(true);
  }

  const closeModal = () => {
    setCurrentMovie(null);
    setShow(false);
  }
  // const [movieDetails, setMovieDetails] = useState([]);

  // const fetchData = () => {
  //   fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&plot=full`)
  //   .then(res => res.json())
  //   .then(data =>
  //     setMovieDetails(data)
  //     )
  //   .catch(err => console.log('Error', err));
  // }

  // useEffect(() => {
  //   fetchData();
  //   return () => {setMovieDetails(null)};
  // }, [show])

  const searchResult = movies && movies
  .filter((val,idx,arr)=> arr.findIndex( item => (item.imdbID === val.imdbID)) === idx)
  .map((movie, key) => {
    return (
      <div className="columns" key={movie.imdbID}>
        <div className="rows">
          <button onClick={() => openModal(movie)}>{movie.Title}</button>
          <MovieInfo movieId={movie.imdbID} show={show} onClose={closeModal} currentMovie={currentMovie}/>
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

