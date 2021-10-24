import React, {useState, useEffect} from 'react';
import {API_KEY} from '../config.js';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

export default function App() {
  const [movieData, setmovieData] = useState();
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(() => {
    let movieAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}`;

    const getSearchResult = async () => {
      fetch(movieAPI)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.Search)
          setmovieData(data.Search)
        })
    }
    getSearchResult();
  }, [movieTitle])

  const handleSubmit = (title) => {
    setMovieTitle(title);
  }


  return (
    <div>
      <h1>What is your favorite movie?</h1>
      <Search handleSubmit={handleSubmit} />
      <MovieList movies={movieData} />
    </div>
  )
}