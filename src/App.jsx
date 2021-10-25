import React, {useState, useEffect, useReducer, UseCallback, useRef} from 'react';
import {API_KEY} from '../config.js';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

export default function App() {
  const [movieData, setmovieData] = useState();
  const [movieTitle, setMovieTitle] = useState('');


  useEffect(() => {
    let movieAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}&type=movie`;

    const getSearchResult = async () => {
      fetch(movieAPI)
        .then((res) => res.json())
        .then((data) => {
          setmovieData(data.Search)
        })
        .catch(error => console.log('Error', error))
    }
    getSearchResult();
  }, [movieTitle])


  const handleSubmit = (title) => {
    setMovieTitle(title);
  }

  return (
    <div>
      <h1 className="title">What is your favorite movie?</h1>
      <Search handleSubmit={handleSubmit} />
      <MovieList movies={movieData} />
    </div>
  )
}