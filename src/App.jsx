import React, {useState, useEffect} from 'react';
import {API_KEY} from '../config.js';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

export default function App() {
  const [movieData, setmMovieData] = useState();
  const [movieTitle, setMovieTitle] = useState('');


  useEffect(() => {
    let movieAPI = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}&type=movie`;

    const getSearchResult = () => {
      fetch(movieAPI)
        .then(res => res.json())
        .then(data => {
          setmMovieData(data.Search)
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
      <h1 className="page-title">What is your favorite movie?</h1>
      <Search handleSubmit={handleSubmit} />
      <MovieList movies={movieData} />
    </div>
  )
}